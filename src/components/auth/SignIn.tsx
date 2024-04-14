/* eslint-disable react/no-unescaped-entities */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAppStore } from "@/store/AppStore"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { useState } from "react"
import InputText from "../shared/InputText"
import { Formik, Field, Form, FormikHelpers } from 'formik';

interface FormValues {
  email: string;
  password: string;
}

export default function SignIn({
  onClose,
}: {
  onClose: () => void;
}) {
  const [data, setData] = useState<{
    email: string;
    password: string;
  }>({
    email: '',
    password: '',
  });
  const { showSignUp, closeDrawer, setUser } = useAppStore();
  const router = useRouter();

  const login = async () => {
    try {
      let { data, error } = await supabase
        .auth
        .signInWithPassword({
          email: 'someone@email.com',
          password: 'aqckbSNAfiFjCHDCHWDo'
        })
      if (data) console.log(data);
      if (error) console.log(error);
    } catch (error) {
      console.log(error)
    }
  };

  const handleShowSignUp = () => {
    closeDrawer();
    setTimeout(() => {
      showSignUp();
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle login logic here
    // try {
    //   setUser({
    //     id: '1',
    //     email: '',
    //     name: 'John Doe',
    //     role: 'user',
    //   });
    //   closeDrawer();
    //   router.push('/');
    // } catch (error) {
    //   console.log(error);
    // }
    console.log(data)
  };

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
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
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
                id="email"
                onChange={handleChange}
                value={values.email}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Link className="ml-auto inline-block text-sm underline" href="#">
                  Forgot your password?
                </Link>
              </div>
              <InputText
                name="password"
                id="password"
                label="Password"
                onChange={handleChange}
                value={values.password}
              />
            </div>
            <div className="space-y-4 ">
              <Button className="w-full" type="submit">
                Login
              </Button>
              <Button className="w-full" variant="outline">
                Login with Google
              </Button>
            </div>
          </form>)}
      </Formik>
      <CardFooter className="text-center text-sm">
        Don't have an account?
        <Link className="underline" href="#" onClick={handleShowSignUp}>
          Sign up
        </Link>
      </CardFooter>
    </CardContent>
  )
}