'use client'
import React from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

const Theme = () => {
  const { setTheme, systemTheme } = useTheme()
  const [themMode, setThemeMode] = React.useState<'light' | 'dark' >(systemTheme || 'dark')

  const clickHandler = (): void => {
    if (themMode === 'light') {
      setThemeMode('dark')
    } else {
      setThemeMode('light')
    }
  }

  React.useEffect(() => {
    setTheme(themMode)
    // eslint-disable-next-line
  }, [themMode])

  return (
    <div onClick={clickHandler} className="size-9 rounded-full flex justify-center items-center dark:border-white cursor-pointer">
      {themMode === 'light' ? <Moon className='text-blue-500'/> : <Sun className='text-yellow-300'/>}
    </div>
  )
}

export default Theme
