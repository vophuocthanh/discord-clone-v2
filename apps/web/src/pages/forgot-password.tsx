import { forgotPassword } from "@/apis/auth";
import bgAuth from "@/assets/images/bg-auth.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ForgotPasswordSchema } from "@/lib/schema";
import { getToken } from "@/lib/storage";
import { Link } from "@/router";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { redirect } from "react-router-dom";
import { toast } from "sonner";
import * as z from "zod";

export function Loader() {
  const isAuth = getToken();
  if (isAuth) {
    return redirect("/orgs");
  }
  return null;
}

export default function Component() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "admin@enouvo.com",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof ForgotPasswordSchema>> = async ({
    email,
  }) => {
    try {
      setIsLoading(true);
      await forgotPassword(email);
      toast.success(
        "Your password has been sent to your email! Please check your email",
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
    <div className="h-screen relative w-full">
      <img alt="" src={bgAuth} className="w-full h-full object-cover" />
      <div className="p-2 w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-xl md:max-w-3xl">
        <div className="w-full p-8 flex gap-20 bg-gray-800 rounded-sm text-white">
          <div className="w-full">
            <Link to="/" className="inline-flex mb-4">
              <ChevronLeft /> Go back
            </Link>
            <h1 className="font-bold text-2xl text-center">Forgot Password</h1>
            <form className="text-start mt-5" onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="Email Or Phone Number"
                className="bg-gray-200 text-black"
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-red-500">{errors.email.message}</p>
              )}
              <Button
                className="w-full mt-4 mb-3"
                type="submit"
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
