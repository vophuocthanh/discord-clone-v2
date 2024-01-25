import { resetPassword } from '@/apis/auth';
import bgAuth from '@/assets/images/bg-auth.png';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ResetPasswordSchema } from '@/lib/schema';
import { getToken } from '@/lib/storage';
import { Link, useNavigate } from '@/router';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { redirect, useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import * as z from 'zod';

export function Loader() {
  const isAuth = getToken();
  if (isAuth) {
    return redirect('/orgs');
  }
  return null;
}

export default function Component() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      password: '',
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof ResetPasswordSchema>> = async ({
    password,
  }) => {
    try {
      const token = searchParams.get('token');
      if (!token) {
        toast.error('Unable to reset password. Please try again later');
        return;
      }
      setIsLoading(true);
      await resetPassword(token, password);
      navigate('/login');
      toast.success(
        'Your password has been reset. Please login with your new password.'
      );
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className='relative w-full h-screen'>
      <img src={bgAuth} className='object-cover w-full h-full' />
      <div className='absolute w-full max-w-xl p-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:max-w-3xl'>
        <div className='flex w-full gap-20 p-8 text-white bg-gray-800 rounded-sm'>
          <div className='w-full'>
            <Link to='/' className='inline-flex mb-4'>
              <ChevronLeft /> Go back
            </Link>
            <h1 className='text-2xl font-bold text-center'>Reset Password</h1>
            <form className='mt-5 text-start' onSubmit={handleSubmit(onSubmit)}>
              <Input
                type='password'
                placeholder='Password'
                className='text-black bg-gray-200'
                {...register('password')}
              />
              {errors.password && (
                <p className='mt-1 text-red-500'>{errors.password.message}</p>
              )}
              <Button
                className='w-full mt-4 mb-3'
                type='submit'
                loading={isLoading}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
