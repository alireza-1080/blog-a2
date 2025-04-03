'use client'
import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import toast from 'react-hot-toast'
import signupSchema from '@/schemas/signupSchema'
import z from 'zod'
import { useRouter } from 'next/navigation'
import { mutate } from 'swr'
import { AspectRatio } from '../ui/aspect-ratio'
import Image from 'next/image'

const SignupForm = () => {
  const router = useRouter()

  const [username, setUsername] = React.useState<string>('')
  const [email, setEmail] = React.useState<string>('')
  const [avatar, setAvatar] = React.useState<File | null>(null)
  const [password, setPassword] = React.useState<string>('')
  const [confirmPassword, setConfirmPassword] = React.useState<string>('')
  const [previewUrl, setPreviewUrl] = React.useState<string>('/png/user.png')
  const [isPending, setIsPending] = React.useState<boolean>(false)

  const fileInput = React.useRef<HTMLInputElement | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAvatar(e.target.files[0])
    }
  }

  const handleSelectClick = () => {
    if (fileInput) {
      fileInput.current?.click()
    }
  }

  const handleRemoveClick = () => {
    setAvatar(null)
    if (fileInput.current) {
      fileInput.current.value = ""
    }
  }

  const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsPending(true)

    const userDataObject: z.infer<typeof signupSchema> = {
      username,
      email,
      password,
      confirmPassword,
    }

    const { success, data, error } = signupSchema.safeParse(userDataObject)

    if (!success) {
      toast(`❌ ${error.errors[0].message}`)
      setIsPending(false)
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

    try {
      const signupResponse = await fetch('/api/user/create', {
        method: 'POST',
        credentials: 'include',
        body: formData,
      })

      const data = await signupResponse.json()

      mutate('/api/user/is-logged-in')
      mutate('/api/user/get-me')

      if (signupResponse.status >= 400) {
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

  React.useEffect(() => {
    if (avatar && avatar.size > 5 * 1024 * 1024) {
      toast('❌ Avatar size limit is 5MB')
      setAvatar(null)
      if (fileInput.current) {
        fileInput.current.value = ''
      }
      return
    }

    if (avatar) {
      const imageUrl = URL.createObjectURL(avatar)
      setPreviewUrl(imageUrl)
      return
    } else {
      setPreviewUrl('/png/user.png')
      return
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
        <div className="flex justify-start items-center gap-4">
          <div className="flex flex-col gap-2 order-2">
            <Button type="button" className="w-fit" onClick={handleSelectClick} size={'sm'}>
              Select
            </Button>
            <Button type="button" className="w-fit" variant={'outline'} size={'sm'} onClick={handleRemoveClick}>
              <h3 className="text-red-500">Remove</h3>
            </Button>
          </div>
          <div className="w-28 h-28 order-1 rounded-full border-2">
            <AspectRatio ratio={1 / 1}>
              <Image src={previewUrl} width={100} height={100} alt="avatar preview" className='w-full h-full rounded-full'></Image>
            </AspectRatio>
          </div>
        </div>
        <Input
          ref={fileInput}
          type="file"
          id="avatar"
          accept="image/png, image/jpg, image/jpeg"
          onChange={handleFileChange}
          className="hidden"
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
      <Button type="submit" className="cursor-pointer" disabled={isPending}>
        Sign up
      </Button>
    </form>
  )
}

export default SignupForm
