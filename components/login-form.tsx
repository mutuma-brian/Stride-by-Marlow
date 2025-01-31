"use client"

import { useState } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
})

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    setIsLoading(true)
    // Here you would typically send the data to your backend
    console.log("Login data:", data)
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulating API call
    setIsLoading(false)
    toast({
      title: "Login Successful",
      description: "Welcome back to Stride by Marlow!",
    })
    window.dispatchEvent(new Event("login-success"))
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-white bg-opacity-90">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center gradient-text">Sign in to your account</CardTitle>
        <CardDescription className="text-center">Enter your email and password to access your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" {...register("password")} />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          <Button type="submit" className="w-full gradient-bg" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign in"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Link href="/forgot-password" className="text-sm text-orange-600 hover:text-orange-500">
          Forgot your password?
        </Link>
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <Link href="/register" className="font-medium text-orange-600 hover:text-orange-500">
            Sign up
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}

