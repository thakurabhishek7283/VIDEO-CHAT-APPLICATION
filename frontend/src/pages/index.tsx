import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='min-h-screen bg-home-gre'>
      <Navbar/>
      <h1 className='text-3xl'>Hello World</h1>
    </div>
  )
}
