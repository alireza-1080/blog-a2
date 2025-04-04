'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

const DeleteButton = ({ articleId }: { articleId: string }) => {
  const router = useRouter()

  const [isPending, setIsPending] = React.useState<boolean>(false)

  const handleDelete = async () => {
    setIsPending(true)

    const response = await fetch('https://blog-a2.vercel.app/api/article/delete-article-by-id', {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ articleId }),
    })

    const data = await response.json()
    console.log(data)

    if (!response.ok) {
      toast.error(data.error)
      setIsPending(false)
      return
    }

    toast.success(data.message)
    router.replace('/dashboard')
  }

  return (
    <div className="mx-auto w-1/2 mt-4">
      <Button variant={'destructive'} className="w-full cursor-pointer" onClick={handleDelete} disabled={isPending}>
        Delete Post
      </Button>
    </div>
  )
}

export default DeleteButton
