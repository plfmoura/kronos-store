import { CardTitle, CardDescription, CardHeader, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"
import { Formik } from 'formik'
import InputText from "../shared/InputText"

interface FormValues {
    email: string;
    password: string;
    confirmPassword: string;
}

export default function UpdatePassword() {

    const initialFormValues = {
        email: '',
        password: '',
        confirmPassword: ''
    };

    const handleSubmitUpdatePassword = async (values: FormValues) => {
        console.log(values)

        if (values.password !== values.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const { data: { user } } = await supabase.auth.getUser();

            if (user?.email !== values.email) {
                alert('Email does not match the current user');
                return;
            }

            let { data, error } = await supabase
                .auth
                .updateUser({
                    password: values.confirmPassword
                })
            if (data.user) {
                console.log(data)
                alert('Password updated successfully');
            };
            if (error?.status === 422) {
                alert('Password must be different from the previous one');
                return;
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <CardContent className="space-y-4">
            <CardHeader className='h-[10%] px-0 flex flex-row items-center'>
                <div>
                    <CardTitle className="text-2xl font-bold">Update Password</CardTitle>
                    <CardDescription>Enter your information to create an account</CardDescription>
                </div>
            </CardHeader>
            <Formik
                initialValues={initialFormValues}
                onSubmit={
                    (values: FormValues) =>
                        handleSubmitUpdatePassword(values)
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
                                label="Your email"
                                id="email"
                                placeholder="Enter your email address"
                                onChange={handleChange}
                                value={values.email}
                            />
                        </div>
                        <div className="space-y-2">
                            <InputText
                                name="password"
                                id="password"
                                label="Password"
                                type="text"
                                onChange={handleChange}
                                value={values.password}
                            />
                        </div>
                        <div className="space-y-2">
                            <InputText
                                name="confirmPassword"
                                id="confirmPassword"
                                label="Confirm password"
                                type="text"
                                onChange={handleChange}
                                value={values.confirmPassword}
                            />
                        </div>
                        <Button className="w-full" type="submit">
                            Update Password
                        </Button>
                    </form>)}
            </Formik>
        </CardContent>
    )
}
