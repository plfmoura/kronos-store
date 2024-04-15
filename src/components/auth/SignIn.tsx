/* eslint-disable react/no-unescaped-entities */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAppStore } from "@/store/AppStore"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import InputText from "../shared/InputText"
import { Formik } from 'formik';

interface FormValues {
  email: string;
  password: string;
}

export default function SignIn({
  onClose,
}: {
  onClose: () => void;
}) {
  const { showSignUp, closeDrawer, setUser } = useAppStore();
  const router = useRouter();

  const initialFormValues = { email: '', password: '' };

  const handleShowSignUp = () => {
    closeDrawer();
    setTimeout(() => {
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
      if (data) {
        console.log(data);
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
              <div className="flex items-center">
                <Link className="ml-auto inline-block text-sm underline" href="#">
                  Forgot your password?
                </Link>
              </div>
              <InputText
                name="password"
                id="password"
                type="password"
                label="Password"
                onChange={handleChange}
                value={values.password}
              />
            </div>
            <div className="space-y-4 ">
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
        <Link className="underline" href="#" onClick={handleShowSignUp}>
          Sign up
        </Link>
      </CardFooter>
    </CardContent>
  )
}