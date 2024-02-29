import HomeHeader from '@/components/HomeHeader'
import React from 'react'
import Image from 'next/image'
import HomeSearch from '@/components/HomeSearch'

const Home = () => {
  return (
    <>
      <HomeHeader/>
      <div className='flex flex-col items-center mt-24'>
        <Image src="https://logos-world.net/wp-content/uploads/2020/09/Google-Logo-2015-present.jpg" alt='logo' style={{width:'auto'}} width={250} height={100}/>
        <HomeSearch/>
      </div>
    </>
  )
}

export default Home