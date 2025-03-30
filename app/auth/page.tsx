import React from 'react'
import { redirect } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import LoginForm from '@/components/auth/SigninForm'
import SignupForm from '@/components/auth/SignupForm'

type SearchParams = {
  mode: undefined | 'signup'
}

const Auth = async ({ searchParams }: { searchParams: Promise<SearchParams> }) => {
  const isUserLoggedIn = false

  if (isUserLoggedIn) {
    redirect('/dashboard')
  }

  const { mode } = await searchParams

  const formType = mode ? "signup" : "signin"

  return (
    <div className="w-full mt-10 flex justify-center">
      <Tabs defaultValue={formType} className="max-w-[600px] w-full gap-5">
        <TabsList className="w-full">
          <TabsTrigger value="signin">Sign in</TabsTrigger>
          <TabsTrigger value="signup">Sign up</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <LoginForm />
        </TabsContent>
        <TabsContent value="signup">
          <SignupForm />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Auth
