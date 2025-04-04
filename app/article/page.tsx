import React from 'react'
import { redirect, RedirectType } from 'next/navigation'

const ArticlePage = async () => {
  redirect('/', RedirectType.replace)

  return <></>
}

export default ArticlePage
