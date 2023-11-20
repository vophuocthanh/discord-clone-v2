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
import { Checkbox } from '@/components/ui/checkbox';

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
      username: '',
      displayname: '',
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
      <div className='absolute w-1/3 p-8 text-center -translate-x-1/2 -translate-y-1/2 rounded-sm top-1/2 left-1/2 bg-background text-primary-foreground'>
        <h1 className='mb-6 text-2xl font-bold'>Create an Account</h1>
        <form className='text-start' onSubmit={handleSubmit(onSubmit)}>
          <label className='w-full mb-4'>
            <span className='font-bold text-gray-400 uppercase'>Email</span>
            <Input {...register('email')} className='mt-2 rounded' />
            {errors.email && (
              <p className='mt-1 text-red-500'>{errors.email.message}</p>
            )}
          </label>
          <label className='w-full mb-4'>
            <span className='font-bold text-gray-400 uppercase'>
              Display Name
            </span>
            <Input {...register('displayname')} className='mt-2 rounded' />
            {errors.displayname && (
              <p className='mt-1 text-red-500'>{errors.displayname.message}</p>
            )}
          </label>
          <label className='w-full mb-4'>
            <span className='font-bold text-gray-400 uppercase'>UserName</span>
            <Input {...register('username')} className='mt-2 rounded' />
            {errors.username && (
              <p className='mt-1 text-red-500'>{errors.username.message}</p>
            )}
          </label>
          <label className='w-full mb-4'>
            <span className='font-bold text-gray-400 uppercase'>Password</span>
            <Input
              type='password'
              className='mt-2 rounded'
              {...register('password')}
            />
            {errors.password && (
              <p className='mt-1 text-red-500'>{errors.password.message}</p>
            )}
          </label>
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
  );
}
