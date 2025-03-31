'use client'
import React from 'react'
import { Button } from './ui/button'

const Test = () => {
  const sendCookie = async () => {
    await fetch('/api/user/test', {
      method: 'POST',
      credentials: 'include',
    })
  }

  return (
    <Button onClick={sendCookie} className="mt-10">
      Send req
    </Button>
  )
}

export default Test
