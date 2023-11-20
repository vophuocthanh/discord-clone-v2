import bgAuth from '@/assets/images/bg-auth.png';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getToken, setToken } from '@/lib/storage';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { LoginSchema } from '@/lib/shema';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { signIn } from '@/apis/auth';
import qrCode from '@/assets/images/qr-code.png';

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
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
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
      navigate('/orgs');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className='relative flex w-full h-screen'>
      <img src={bgAuth} className='object-cover w-full h-full' />
      <div className=''>
        <div className='absolute w-1/2 p-8 text-center -translate-x-1/2 -translate-y-1/2 rounded-sm top-1/2 left-1/2 bg-background text-primary-foreground'>
          <div className='flex gap-4'>
            <div className='w-full'>
              <h1 className='text-2xl font-bold'>Welcome back!</h1>
              <p className='mb-4'> We're excited to see you again !</p>
              <form className='text-start' onSubmit={handleSubmit(onSubmit)}>
                <label className='w-full mb-4'>
                  <span className='text-gray-400'>Email and Phone Number</span>
                  <Input
                    placeholder='Email Or Phone Number'
                    {...register('email')}
                    className='mt-2 rounded'
                  />
                  {errors.email && (
                    <p className='mt-1 text-red-500'>{errors.email.message}</p>
                  )}
                </label>
                <label className='w-full mb-4'>
                  <span className='text-gray-400'>Password</span>
                  <Input
                    placeholder='Password'
                    type='password'
                    className='mt-2 rounded'
                    {...register('password')}
                  />
                  {errors.password && (
                    <p className='mt-1 text-red-500'>
                      {errors.password.message}
                    </p>
                  )}
                </label>
                <Button
                  className='w-full mt-6'
                  type='submit'
                  loading={isLoading}
                >
                  Login
                </Button>
                <span className='flex items-center gap-2 mt-4'>
                  Need an account?{' '}
                  <Link to={'/register'} className='text-blue-500'>
                    <span>Register</span>
                  </Link>
                </span>
              </form>
            </div>
            <div className='space-y-4'>
              <div className='flex items-center justify-center w-48 h-48 mx-auto bg-white rounded'>
                <img
                  src={qrCode}
                  alt='qr-code'
                  className='flex items-center justify-center'
                />
              </div>
              <h1 className='text-2xl font-bold'>Log in with QR Code</h1>
              <p className='text-primary-foreground/60'>
                Scan this with the Discord mobile app to log in instantly
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
