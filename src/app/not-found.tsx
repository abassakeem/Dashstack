import { cn } from "@/lib/utils";
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
export default function page({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
   <div className="main-bg bg-cover bg-center h-screen  ">
         <div className="flex flex-col items-center justify-center ">
           <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
             <div className="w-full max-w-md">
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
          404
          </CardTitle>
          <CardDescription className="text-center text-sm font-semibold text-black ">
          Looks like you&apos;ve got lost.......
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
               
               
              </div>
       
            </div>
            <div className="mt-4 text-center text-black/65 text-sm">
               <Button type="submit" className="w-3/4 cursor-pointer text-white bg-primary ">
                 Back to Dashboard
                </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
             </div>
           </div>
         </div>
       </div>
  )
}
