/* eslint-disable react/no-unescaped-entities */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAppStore } from "@/store/AppStore"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import InputText from "../shared/InputText"
import { Formik } from 'formik';
import { useState } from "react"

interface FormValues {
  email: string;
  password: string;
}

export default function SignIn({
  onClose,
}: {
  onClose: () => void;
}) {
  const { showSignUp, closeDrawer, setUser, showRecovery } = useAppStore();
  const [showError, setShowError] = useState<string | null>(null);
  const router = useRouter();

  const initialFormValues = { email: '', password: '' };

  const handleShowDrawerContent = (target?: string) => {
    closeDrawer();
    setTimeout(() => {
      if(target === 'recovery') {
        showRecovery();
        return;
      }
      showSignUp();
    }, 300);
  };

  const handleSubmitSignIn = async (values: FormValues) => {
    console.log(values);

    try {
      let { data, error } = await supabase
        .auth
        .signInWithPassword({
          email: values.email,
          password: values.password
        })
      if (error) {
        setShowError(error.message);

        setTimeout(() => {
          setShowError(null);
        }, 3000);
        return;
      }
      if (data.user) {
        setUser(data);
      }
      closeDrawer();
      router.refresh();
    } catch (error) {
      console.log(error)
    }
  };

  const handleSocialLogin = async (values: FormValues) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (data) console.log(data);
    if (error) console.log(error);
  }

  return (
    <CardContent className="space-y-4">
      <CardHeader className='h-[10%] px-0 flex flex-row justify-between items-center'>
        <div>
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </div>
        <Button
          onClick={onClose}
          size="icon"
          variant="ghost"
        >
          <span>Close</span>
        </Button>
      </CardHeader>
      <Formik
        initialValues={initialFormValues}
        onSubmit={
          (values: FormValues) =>
            handleSubmitSignIn(values)
        }
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <InputText
                name="email"
                label="Email"
                type="email"
                placeholder="email@provider.com"
                id="email"
                onChange={handleChange}
                value={values.email}
              />
            </div>
            <div className="space-y-2">
              <InputText
                name="password"
                id="password"
                type="password"
                label="Password"
                rightLabel={
                  <Link className="ml-auto text-sm underline" href="#" onClick={() => handleShowDrawerContent('recovery')}>
                    Forgot your password?
                  </Link>
                }
                onChange={handleChange}
                value={values.password}
              />
            </div>
            <div className="text-red-500 text-sm h-4">{showError}</div>
            <div className="space-y-4">
              <Button className="w-full" type="submit">
                Login
              </Button>
              <Button className="w-full" variant="outline" onClick={() => handleSocialLogin(values)}>
                Login with Google
              </Button>
            </div>
          </form>)}
      </Formik>
      <CardFooter className="text-center text-sm">
        Don't have an account?
        <Link className="underline" href="#" onClick={() => handleShowDrawerContent()}>
          Sign up
        </Link>
      </CardFooter>
    </CardContent>
  )
}