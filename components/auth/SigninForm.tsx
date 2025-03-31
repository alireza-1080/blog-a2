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

  const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

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

      if (loginResponse.status >= 400) {
        toast.error(data.error)
        return
      }

      toast.success(data.message)
      router.replace('/dashboard')
    } catch (error) {
      if (error instanceof Error) {
        toast(`❌ ${error.message}`)
        console.log(error)
      }
    }
  }

  return (
    <form className="w-full flex flex-col items-center gap-5" onSubmit={formSubmitHandler}>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="username">Username or Email</Label>
        <Input type="text" id="username" value={identifier} onChange={(e) => setIdentifier(e.target.value)} />
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <Button type="submit" className="cursor-pointer">
        Sign in
      </Button>
    </form>
  )
}

export default SigninForm
