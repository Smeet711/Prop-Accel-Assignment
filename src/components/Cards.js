import React from 'react'
import CardUI from './CardUI'


const Cards = () => {
  return (
    <>
    <div className='w-full py-[1rem] px-4 bg-white'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
    <CardUI  user="Single User"/>
    <CardUI  user="Double User"/>
    <CardUI  user="Triple User"/>
    </div>
    </div>

    </>
  )
}

export default Cards