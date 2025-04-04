'use client'
import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { mutate } from 'swr'

const SigninForm = () => {
  const router = useRouter()

  const [identifier, setIdentifier] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [isPending, setIsPending] = React.useState<boolean>(false)

  const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsPending(true)

    try {
      const loginResponse = await fetch('/api/user/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identifier, password }),
      })

      const data = await loginResponse.json()

      mutate('/api/user/is-logged-in')
      mutate('/api/user/get-me')

      if (loginResponse.status >= 400) {
        toast.error(data.error)
        setIsPending(false)
        return
      }

      toast.success(data.message)
      router.replace('/dashboard')
    } catch (error) {
      if (error instanceof Error) {
        toast(`❌ ${error.message}`)
        console.log(error)
        setIsPending(false)
      }
    }
  }

  return (
    <form 
  className="w-full flex flex-col items-center gap-6" 
  onSubmit={formSubmitHandler}
>
  <div className="grid w-full max-w-sm items-center gap-2">
    <Label 
      htmlFor="username" 
      className="text-gray-900 dark:text-gray-100 font-medium"
    >
      Username or Email
    </Label>
    <Input 
      type="text" 
      id="username" 
      value={identifier} 
      onChange={(e) => setIdentifier(e.target.value)}
      className="border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent"
    />
  </div>

  <div className="grid w-full max-w-sm items-center gap-2">
    <Label 
      htmlFor="password" 
      className="text-gray-900 dark:text-gray-100 font-medium"
    >
      Password
    </Label>
    <Input 
      type="password" 
      id="password" 
      value={password} 
      onChange={(e) => setPassword(e.target.value)}
      className="border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent"
    />
  </div>

  <Button 
    type="submit" 
    className="cursor-pointer bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white border-2 border-blue-600 dark:border-blue-500 rounded-lg transition-colors w-full max-w-sm"
    disabled={isPending}
  >
    Sign In
  </Button>
</form>
  )
}

export default SigninForm
