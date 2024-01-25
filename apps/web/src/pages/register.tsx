import bgAuth from '@/assets/images/bg-auth.png';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getToken, setToken } from '@/lib/storage';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { signUp } from '@/apis/auth';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { SignUpSchema } from '@/lib/schema';

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: zodResolver(SignUpSchema),

    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof SignUpSchema>> = async ({
    email,
    password,
  }) => {
    try {
      setIsLoading(true);
      const res = await signUp(email, password);
      setToken(res.data.accessToken);
      navigate('/login');
      toast.success('Sign up successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to sign up');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className='relative flex w-full h-screen'>
      <img src={bgAuth} className='object-cover w-full h-full' />
      <div className='absolute w-full max-w-xl p-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:max-w-xl'>
        <div className='flex flex-col w-full p-8 text-white bg-gray-800 rounded-sm '>
          <h1 className='mb-6 text-2xl font-bold text-center'>
            Create an Account
          </h1>
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
            <div className='flex items-center justify-between w-full mt-4'>
              <label className='text-gray-400'>
                <div className='flex items-center gap-2'>
                  <Checkbox className='w-8 h-8 rounded-sm' />
                  <span className='ml-2 text-sm text-primary-foreground/30'>
                    (Optional) It's okay to send me emails with Discord updates,
                    tips, and special offers. You can opt out at nay time.
                  </span>
                </div>
              </label>
            </div>
            <Button
              className='w-full mt-6 rounded'
              type='submit'
              loading={isLoading}
            >
              Continue
            </Button>
            <p className='mt-4 text-sm text-primary-foreground/30'>
              By continuing, you agree to Discord's{' '}
              <span className='text-blue-500 cursor-pointer hover:underline'>
                Terms of Service
              </span>{' '}
              and{' '}
              <span className='text-blue-500 cursor-pointer hover:underline'>
                Privacy Policy.
              </span>
            </p>
            <span className='flex items-center gap-2 mt-4'>
              <Link to={'/login'} className='text-blue-500 hover:underline'>
                <span>Already have an account?</span>
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
