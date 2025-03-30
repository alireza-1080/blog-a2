'use client'
import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import toast from 'react-hot-toast'
import signupSchema from '@/schemas/signupSchema'
import z from 'zod'
import axios from 'axios'

const SignupForm = () => {
  const [username, setUsername] = React.useState<string>('')
  const [email, setEmail] = React.useState<string>('')
  const [avatar, setAvatar] = React.useState<File | null>(null)
  const [password, setPassword] = React.useState<string>('')
  const [confirmPassword, setConfirmPassword] = React.useState<string>('')

  const fileInput = React.useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAvatar(e.target.files[0])
    }
  }

  const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const userDataObject: z.infer<typeof signupSchema> = {
      username,
      email,
      password,
      confirmPassword,
    }

    const { success, data, error } = signupSchema.safeParse(userDataObject)

    if (!success) {
      toast(`❌ ${error.errors[0].message}`)
      return
    }

    const formData = new FormData()
    formData.append('username', data.username)
    formData.append('email', data.email)
    formData.append('password', data.password)
    formData.append('confirmPassword', data.confirmPassword)

    if (avatar) {
      formData.append('avatar', avatar)
    }

    const signupResponse = await axios.post('/api/user/create', {
      Credential: true,
    })

    const signupData = signupResponse.data

    console.log(signupData)
  }

  React.useEffect(() => {
    if (avatar && avatar.size > 5 * 1024 * 1024) {
      toast('❌ Avatar size limit is 5MB')
      setAvatar(null)
      if (fileInput.current) {
        fileInput.current.value = ''
      }
    }
  }, [avatar])

  return (
    <form className="w-full flex flex-col items-center gap-5" onSubmit={formSubmitHandler}>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="username">Username</Label>
        <Input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="avatar">Avatar</Label>
        <Input
          ref={fileInput}
          type="file"
          id="avatar"
          accept="image/png, image/jpg, image/jpeg"
          onChange={handleFileChange}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="confirmPassword">Confirm password</Label>
        <Input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <Button type="submit">Sign up</Button>
    </form>
  )
}

export default SignupForm
