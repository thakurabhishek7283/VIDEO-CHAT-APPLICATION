import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Form from '@/components/form'
import WebNavbar from '@/components/navbar'
import WebFooter from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex flex-col max-h-screen'>
      <WebNavbar/>
      <div className='max-w-5xl mx-auto my-20'>
      <Form/>
      </div>
      <WebFooter/>
    
 
    </div>
     )
}
