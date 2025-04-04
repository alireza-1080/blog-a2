'use client'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import articleSchema from '@/schemas/articleSchema'
import Image from 'next/image'
import React from 'react'
import toast from 'react-hot-toast'

const CreateBlog = () => {
  const fileInputElement = React.useRef<HTMLInputElement | null>(null)

  const [title, setTitle] = React.useState<string>('')
  const [content, setContent] = React.useState<string>('')
  const [image, setImage] = React.useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = React.useState<string>('/png/image.png')
  const [isPending, setIsPending] = React.useState<boolean>(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleButtonClick = () => {
    fileInputElement.current?.click()
  }

  const handleRemove = () => {
    setImage(null)

    if (fileInputElement.current) {
      fileInputElement.current.value = ''
    }
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsPending(true)

    const { success, data, error } = articleSchema.safeParse({ title, content })

    if (!success) {
      toast.error(error.errors[0].message)
      setIsPending(false)
      return
    }

    if (!image) {
      toast.error('Post image is required')
      setIsPending(false)
      return
    }

    const formData = new FormData()
    formData.append('image', image)
    formData.append('title', data.title)
    formData.append('content', data.content)

    try {
      const response = await fetch('/api/article/create', {
        method: 'POST',
        credentials: 'include',
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error)
      }

      toast.success(data.message)
      setTitle('')
      setContent('')
      setImage(null)
      setPreviewUrl('/png/image.png')
      if (fileInputElement.current) {
        fileInputElement.current.value = ''
      }
      setIsPending(false)
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      }
      console.log(error)
      setIsPending(false)
    }
  }

  React.useEffect(() => {
    if (image) {
      const imageUrl = URL.createObjectURL(image)
      setPreviewUrl(imageUrl)
      return
    }

    setPreviewUrl('/png/image.png')
  }, [image])

  return (
    <div className="py-8">
      <Card className="max-w-lg mx-auto bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-xl shadow-md pt-0 overflow-hidden">
        <CardHeader className="bg-gray-50 dark:bg-gray-800/50 border-b-2 border-gray-300 dark:border-gray-700 p-6">
          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">Create Post</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Create a post to share it with the world 🌍
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <form className="flex flex-col gap-6" onSubmit={handleFormSubmit}>
            <div className="flex flex-col gap-2">
              <Label htmlFor="title" className="text-gray-900 dark:text-gray-100 font-medium">
                Title
              </Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="content" className="text-gray-900 dark:text-gray-100 font-medium">
                Content
              </Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="h-72 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-col gap-4">
              <Label htmlFor="picture" className="text-gray-900 dark:text-gray-100 font-medium">
                Image
              </Label>
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="w-full sm:w-2/3 order-1">
                  <AspectRatio
                    ratio={16 / 9}
                    className="bg-muted rounded-xl flex justify-center items-center border-2 border-gray-300 dark:border-gray-700 shadow-sm overflow-hidden"
                  >
                    {image ? (
                      <Image src={previewUrl} alt="image-preview" fill className="rounded-xl object-cover" />
                    ) : (
                      <Image
                        src={previewUrl}
                        alt="image-preview"
                        width={160}
                        height={90}
                        className="rounded-xl w-1/3 object-cover"
                      />
                    )}
                  </AspectRatio>
                </div>
                <div className="flex gap-2 order-2">
                  <Button
                    type="button"
                    className="w-fit bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white border-2 border-blue-600 dark:border-blue-500 rounded-lg transition-colors"
                    onClick={handleButtonClick}
                  >
                    Select
                  </Button>
                  <Button
                    type="button"
                    className="w-fit bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 text-red-500 border-2 border-gray-300 dark:border-gray-700 rounded-lg transition-colors"
                    onClick={handleRemove}
                  >
                    Remove
                  </Button>
                  <Input
                    ref={fileInputElement}
                    id="picture"
                    type="file"
                    accept="image/jpeg, image/jpg, image/png"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="cursor-pointer bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white border-2 border-blue-600 dark:border-blue-500 rounded-lg transition-colors"
              disabled={isPending}
            >
              Create Post
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default CreateBlog
