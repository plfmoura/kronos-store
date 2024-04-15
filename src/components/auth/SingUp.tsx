import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useAppStore } from "@/store/AppStore"
import { supabase } from "@/lib/supabase"
import { Formik } from 'formik'
import InputText from "../shared/InputText"

interface FormValues {
    name: string;
    surname: string;
    email: string;
    password: string;
}

export default function SignUp({
    onClose,
}: {
    onClose: () => void;
}) {
    const { showSignIn, closeDrawer } = useAppStore();

    const handleShowSignIn = () => {
        closeDrawer();
        setTimeout(() => {
            showSignIn();
        }, 300);
    };
    const initialFormValues = {
        name: '',
        surname: '',
        email: '',
        password: ''
    };

    const handleSubmitSignUp = async (values: FormValues) => {
        console.log(values)

        try {
            let { data, error } = await supabase
                .auth
                .signUp({
                    email: values.email,
                    password: values.password
                })
            if (data) console.log(data);
            if (error) console.log(error);
            handleShowSignIn();
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <CardContent className="space-y-4">
            <CardHeader className='h-[10%] px-0 flex flex-row justify-between items-center'>
                <div>
                    <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
                    <CardDescription>Enter your information to create an account</CardDescription>
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
                        handleSubmitSignUp(values)
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
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <InputText
                                    name="name"
                                    label="First Name"
                                    id="name"
                                    placeholder="Josh"
                                    onChange={handleChange}
                                    value={values.name}
                                />
                            </div>
                            <div className="space-y-2">
                                <InputText
                                    name="surname"
                                    label="Last Name"
                                    placeholder="Smith"
                                    id="surname"
                                    onChange={handleChange}
                                    value={values.surname}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <InputText
                                name="email"
                                label="Email"
                                placeholder="email@provider.com"
                                id="email"
                                type="email"
                                onChange={handleChange}
                                value={values.email}
                            />
                        </div>
                        <div className="space-y-2">
                            <InputText
                                name="password"
                                id="password"
                                label="Password"
                                type="password"
                                onChange={handleChange}
                                value={values.password}
                            />
                        </div>
                        <Button className="w-full" type="submit">
                            Sign Up
                        </Button>
                        <Button className="w-full" variant="outline">
                            Sign up with Google
                        </Button>
                    </form>)}
            </Formik>
            <CardFooter className="text-center text-sm">
                Already have an account?
                <Link className="underline" href="#" onClick={handleShowSignIn}>
                    Login
                </Link>
            </CardFooter>
        </CardContent>
    )
}
