import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Introduction from '../components/Introduction'

const Home: NextPage = () => {
  return (
    <div className='bg-black min-h-screen w-screen px-20 py-20 text-white'>

      <Head>
        <title>Hi! I'm Manish</title>
      </Head>

      {/* <Nav /> */}
      <Introduction />
    </div>
  )
}

export default Home