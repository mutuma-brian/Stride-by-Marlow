import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserAuthForm } from "@/components/user-auth-form"

export const metadata: Metadata = {
  title: "Login | Stride by Marlow",
  description: "Login to your account",
}

export default function LoginPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image src="/authentication.png" width={1280} height={843} alt="Authentication" className="hidden dark:block" />
      </div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/register"
          className={cn(buttonVariants({ variant: "ghost" }), "absolute right-4 top-4 md:right-8 md:top-8")}
        >
          Register
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-orange-600" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Image src="/logo.png" alt="Stride by Marlow Logo" width={40} height={40} className="mr-2" />
            Stride by Marlow
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Stride by Marlow has revolutionized my sneaker shopping experience. The quality and style are
                unmatched!&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Login to your account</h1>
              <p className="text-sm text-muted-foreground">
                Enter your email and password below to login to your account
              </p>
            </div>
            <UserAuthForm type="login" />
            <p className="px-8 text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/register" className="underline underline-offset-4 hover:text-primary">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

