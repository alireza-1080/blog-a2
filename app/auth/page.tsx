import React from 'react'
import { redirect } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import LoginForm from '@/components/auth/LoginForm'
import SignupForm from '@/components/auth/SignupForm'

const Auth = async () => {
  const isUserLoggedIn = false

  if (isUserLoggedIn) {
    redirect('/dashboard')
  }

  return (
    <div className="w-full mt-10">
      <Tabs defaultValue="login" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="login">Log in</TabsTrigger>
          <TabsTrigger value="signup">Sign up</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
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
