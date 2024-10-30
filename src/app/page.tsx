import React from 'react'
import { Button } from '@/components/ui/button'

const Home = () => {
  return (
<main className='max-w-5xl mx-auto'>
  <h1 className='text-5xl font-bold'>Invoiceapia </h1>
  <p>
 
    <Button asChild>
    <a href="/dashboard">
    Sign In!!
    </a>
    </Button>
  </p>
</main>
  )
}

export default Home
