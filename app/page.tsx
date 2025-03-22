import React from 'react'

const Home = async () => {

const testResponse = await fetch('https://blog-a2-server.up.railway.app/api')

const data = await testResponse.json()

  return (
    <div>
      <h1>{data}</h1>
    </div>
  )
}

export default Home