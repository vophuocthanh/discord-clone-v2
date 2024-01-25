import bgAuth from '@/assets/images/bg-auth.png';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getToken, setToken } from '@/lib/storage';
import { redirect, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { signIn } from '@/apis/auth';
import { Link } from '@/router';
import { ChevronLeft } from 'lucide-react';
import qrCode from '@/assets/images/qr-code.png';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { LoginSchema } from '@/lib/schema';

export function Loader() {
  const isAuth = getToken();
  if (isAuth) {
    return redirect('/channels');
  }
  return null;
}

export default function Component() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: 'phuocthanh@gmail.com',
      password: '!Enouvo123',
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof LoginSchema>> = async ({
    email,
    password,
  }) => {
    try {
      setIsLoading(true);
      const res = await signIn(email, password);
      setToken(res.data.accessToken);
      navigate('/channels');
      toast.success('Login successfully!');
    } catch (error) {
      toast.error('Invalid email or password');
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      }
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className='relative w-full h-screen'>
      <img src={bgAuth} className='object-cover w-full h-full' alt='bg-auth' />
      <div className='absolute w-full max-w-xl p-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:max-w-4xl'>
        <div className='flex w-full gap-20 p-8 text-white bg-gray-800 rounded-sm'>
          <div className='w-full'>
            <Link to='/' className='inline-flex mb-4'>
              <ChevronLeft /> Go back
            </Link>
            <h1 className='text-2xl font-bold text-center'>Welcome back!</h1>
            <p className='mb-4 text-center'>We're excited to see you again !</p>
            <form className='mt-5 text-start' onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder='Email Or Phone Number'
                className='text-white bg-gray-600 rounded'
                {...register('email')}
              />
              {errors.email && (
                <p className='mt-1 text-red-500'>{errors.email.message}</p>
              )}
              <Input
                placeholder='Password'
                type='password'
                className='mt-6 text-white bg-gray-600 rounded'
                {...register('password')}
              />
              {errors.password && (
                <p className='my-1 text-red-500'>{errors.password.message}</p>
              )}
              <Link
                to='/forgot-password'
                className='my-1 text-xs cursor-pointer text-sky-500 text-start'
              >
                Forgot Password?
              </Link>
              <Button
                className='w-full mt-4 mb-3'
                type='submit'
                loading={isLoading}
              >
                Login
              </Button>
              <p className='text-xs'>
                Need an account?{' '}
                <Link to='/register' className='text-sky-500'>
                  Sign up
                </Link>
              </p>
            </form>
          </div>
          <div className='flex-col items-center justify-center hidden md:flex'>
            <div className='space-y-4'>
              <div className='flex items-center justify-center w-48 h-48 mx-auto bg-white rounded'>
                <img
                  src={qrCode}
                  alt='qr-code'
                  className='flex items-center justify-center'
                />
              </div>
              <h1 className='text-2xl font-bold'>Log in with QR Code</h1>
              <p className='text-center text-primary-foreground/60'>
                Scan this with the Discord mobile app to log in instantly
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
