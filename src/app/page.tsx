import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Home = () => {
  return (
<main className='flex flex-col max-w-5xl mx-auto'>
  <h1 className='text-5xl font-bold'>Invoiceapia </h1>
  <p>
 
    <Button asChild>
    <Link href="/dashboard">
    Sign In!!
    </Link>
    </Button>
  </p>
</main>
  )
}

export default Home
