import React from 'react'


const CardUI = ({user}) => {
  return (
    <>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 hover:bg-[#7A1399] duration-300'>
            
              <h2 className='text-2xl font-bold text-center py-8'>{user}</h2>
              <p className='text-center text-4xl font-bold'>$149</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                  <p className='py-2 border-b mx-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
              </div>
              <button className='bg-[#0d4332] w-[200px] text-cyan-100 rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
    </>
  )
}

export default CardUI