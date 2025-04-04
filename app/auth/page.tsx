import React from 'react'
import { redirect } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import SigninForm from '@/components/auth/SigninForm'
import SignupForm from '@/components/auth/SignupForm'
import isUserLoggedInFunc from '@/utils/isUserLoggedIn'

type SearchParams = {
  mode: undefined | 'signup'
}

const Auth = async ({ searchParams }: { searchParams: Promise<SearchParams> }) => {
  const isUserLoggedIn = await isUserLoggedInFunc()

  if (isUserLoggedIn) {
    redirect('/dashboard')
  }

  const { mode } = await searchParams

  const formType = mode ? 'signup' : 'signin'

  return (
    <div className="w-full flex justify-center py-8">
      <Tabs
        defaultValue={formType}
        className="max-w-md w-full bg-gray-50 dark:bg-gray-800/50 border-2 border-gray-300 dark:border-gray-700 rounded-xl p-6 shadow-md"
      >
        <TabsList className="w-full grid grid-cols-2 mb-6 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg">
          <TabsTrigger
            value="signin"
            className="cursor-pointer text-gray-900 dark:text-gray-100 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:border-blue-600 dark:data-[state=active]:bg-blue-500 dark:data-[state=active]:border-blue-500 transition-colors"
          >
            Sign In
          </TabsTrigger>
          <TabsTrigger
            value="signup"
            className="cursor-pointer text-gray-900 dark:text-gray-100 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:border-blue-600 dark:data-[state=active]:bg-blue-500 dark:data-[state=active]:border-blue-500 transition-colors"
          >
            Sign Up
          </TabsTrigger>
        </TabsList>
        <TabsContent value="signin" className="mt-0">
          <SigninForm />
        </TabsContent>
        <TabsContent value="signup" className="mt-0">
          <SignupForm />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Auth
