import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useAppStore } from "@/store/AppStore"

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
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="Lee" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Robinson" required />
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="m@example.com" required type="email" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" required type="password" />
            </div>
            <Button className="w-full" type="submit">
                Sign Up
            </Button>
            <Button className="w-full" variant="outline">
                Sign up with Google
            </Button>
            <CardFooter className="text-center text-sm">
                Already have an account?
                <Link className="underline" href="#" onClick={handleShowSignIn}>
                    Login
                </Link>
            </CardFooter>
        </CardContent>
    )
}
