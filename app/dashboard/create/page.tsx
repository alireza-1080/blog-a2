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

  const [title, setTitle] = React.useState<string>("")
  const [content, setContent] = React.useState<string>("")
  const [image, setImage] = React.useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = React.useState<string>('/png/image.png')

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

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const {success, data, error} = articleSchema.safeParse({title, content})

    if (!success) {
        toast.error(error.errors[0].message)
        return
    }

    
    if (!image) {
        toast.error('Post image is required')
        return
    }
    
    toast.success("PASSED")
    console.log(data)
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
    <div>
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
          <CardDescription>Create a post to share it with the world 🌍</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" value={title} onChange={e => setTitle(e.target.value)}/>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="content">Content</Label>
              <Textarea id="content" value={content} onChange={e => setContent(e.target.value)}></Textarea>
            </div>
            <div className="flex flex-col justify-between items-center gap-4">
              <Label htmlFor="picture" className="self-start">
                Image
              </Label>
              <div className="flex gap-2 order-2">
                <Button type='button' className="w-fit" onClick={handleButtonClick}>
                  Select
                </Button>
                <Button type='button' className="w-fit" variant={'outline'} onClick={handleRemove}>
                  <h3 className='text-red-500'>Remove</h3>
                </Button>
                <Input
                  ref={fileInputElement}
                  id="picture"
                  type="file"
                  accept="image/jpeg, image/jpg, image/png"
                  className="hidden"
                  onChange={handleFileChange}
                ></Input>
              </div>
              <div className="w-2/3 order-1">
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-xl flex justify-center items-center">
                {
                    image ? 
                    <Image src={image ? previewUrl : ""} alt="image-preview" fill className="rounded-xl"></Image>
                    :
                    <Image src={previewUrl} alt="image-preview" width={160} height={90} className="rounded-xl w-1/3"></Image>
                }
                </AspectRatio>
              </div>
            </div>

            <Button type="submit">Create Post</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default CreateBlog
