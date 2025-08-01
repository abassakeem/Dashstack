import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Checkbox, checkbox} from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Check } from "lucide-react";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 bg-white rounded-2xl border-0  ",
        className
      )}
      {...props}
    >
      <Card className="">
        <CardHeader>
          <CardTitle className="text-[32px] text-center text-black font-bold">
            Login to account
          </CardTitle>
          <CardDescription className="text-center text-sm font-semibold text-black ">
            Please enter your email and password to continue.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email" className="text-black font-semibold">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="bg-gray border border-gray-100 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-black font-semibold">
                    Password
                  </Label>
                  <Link
                    href="#"
                    className="ml-auto text-black/60 inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input className="bg-gray border border-gray-100 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent" id="password" type="password" required />

                <div className="flex items-center gap-2 text-sm text-black/60">
                    <Checkbox/> Remember password
                </div>
              </div>
             <div className="flex flex-col items-center justify-center gap-3">
                <Button type="submit" className="w-3/4 cursor-pointer text-white bg-primary ">
                  Sign In
                </Button>
              
              </div>
            </div>
            <div className="mt-4 text-center text-black/65 text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline cursor-pointer text-primary underline-offset-4">
                Create account
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
