import React from 'react'
import SearchBar from '../Movie/SearchBar'

function Nav() {
    return (
        <div style={{
            backgroundImage: 'url("Poster.png")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '',
            height: '600px',
        }}>
            <div className='flex justify-between ml-8 mr-8'>
                <img src='Logo.png' className='mt-5' />
                <div>
                    <SearchBar />
                </div>
                <div className=''>
                    <img src='Menu.png' className='mt-5' />
                </div>
            </div>
            <div className='mt-24 ml-8'>
                <h2 className='font-semibold font-sans text-[60px] text-white'>John Wick 3 :<br /> Parabellum</h2>
                <div className='flex gap-9 mt-3'>
                    <img src='imbd.png' />
                    <p className='text-white'>86.0/100</p>
                    <div className='flex gap-3 '>
                        <img src='fruit.png' className='' />
                        <p className='text-white'>97%</p>
                    </div>
                </div>
            </div>
            <div className='ml-8 mt-4'>
                <p className='w-[330px] text-white'>
                    John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
                </p>
            </div>
            <div className='ml-8 mt-5'>
                <button className='bg-red-600 p-2  gap-3 flex rounded-md text-white items-center'><img src='play.png' /><h3>Watch trailer</h3></button>
            </div>
        </div>
    )
}

export default Nav
