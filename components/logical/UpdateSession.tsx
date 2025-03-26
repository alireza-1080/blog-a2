'use client'
import React from 'react'

const UpdateSession = () => {
  const updateSession = async () => {
    try {
      await fetch('https://blog-a2.vercel.app/api', {
        cache: 'no-store',
        credentials: 'include',
      })
    } catch (error) {
      console.error('Failed to update session:', error)
    }
  }

  React.useEffect(() => {
    updateSession()
  }, [])

  return <></>
}

export default UpdateSession
