import React from 'react'
import { redirect } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import SigninForm from '@/components/auth/SigninForm'
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
      <Tabs defaultValue={formType} className="max-w-96 w-full gap-5">
        <TabsList className="w-full">
          <TabsTrigger value="signin" className='cursor-pointer'>Sign in</TabsTrigger>
          <TabsTrigger value="signup" className='cursor-pointer'>Sign up</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <SigninForm />
        </TabsContent>
        <TabsContent value="signup">
          <SignupForm />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Auth
