'use client'
import React from 'react'
import { Button } from './ui/button'

const Test = () => {
  const sendCookie = async () => {
    const response = await fetch('/api/user/test', {
      method: 'POST',
      credentials: 'include',
    })

    const data = await response.json()

    console.log(data)
  }

  return (
    <Button onClick={sendCookie} className="mt-10">
      Send req
    </Button>
  )
}

export default Test
