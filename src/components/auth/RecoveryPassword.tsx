/* eslint-disable react/no-unescaped-entities */
import { supabase } from '@/lib/supabase'
import React from 'react'
import { Button } from '../ui/button';
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import Link from 'next/link';
import InputText from '../shared/InputText';
import { Formik } from 'formik';
import { useAppStore } from '@/store/AppStore';

export default function RecoveryPassword({
    onClose,
}:{
    onClose: () => void;
}) {
    const { showSignUp, closeDrawer } = useAppStore();
  
    const handleShowSignUp = () => {
      closeDrawer();
      setTimeout(() => {
        showSignUp();
      }, 300);
    };

    const handleSubmitPasswordRecovery = async (email: string) => {
        try {
            let { data } = await supabase
                .auth
                .resetPasswordForEmail(email);

            if (data) console.log(data);
        } catch (error) {
            console.log(error);
        }
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
                initialValues={{
                    email: ''
                }}
                onSubmit={
                    (values: any) =>
                        handleSubmitPasswordRecovery(values.email)
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
                        <div className="space-y-4">
                            <Button className="w-full" type="submit">
                                Send recovery email
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
