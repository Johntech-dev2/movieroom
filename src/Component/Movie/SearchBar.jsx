import React from 'react'
import BsSearch from 'react-icons/bs'
function SearchBar() {
  return (
    <div className='mt-5'>
      <input  type='text' placeholder='What do you want to watch?' className='w-[450px] p-2 rounded-md bg-transparent ring-2 outline-white text-white'/>
    </div>
  )
}

export default SearchBar
