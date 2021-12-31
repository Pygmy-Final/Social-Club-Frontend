import React from 'react'
import Image from 'next/image'
import sport from './images/sport.jpg'
import avatar from "./images/avatar.png"

function Profile(props) {
    return (
        <div>
            <div className='relative inline-block'>
                <div className=' xsm:w-[20rem] sm:w-[25rem] md:w-[30rem] lg:w-[40rem]'>
                    <Image src={sport} className='rounded-[1.5rem]' />
                </div>
                <div className='inline-block absolute xsm:top-[2.7rem] sm:top-[4.5rem] md:top-[5.4rem] lg:top-[7.4rem] xsm:left-[0.3rem] sm:left-[0.5rem] md:left-[0.7rem] lg:left-[1rem] xsm:w-[5rem] sm:w-[5rem] md:w-[6rem] lg:w-[8rem]'>
                    <Image src={avatar} height={150} width={150} className='rounded-full' />
                </div>
                <h3 className='absolute font-bold xsm:top-[5rem] xsm:left-[6rem] sm:top-[6.6rem] md:top-[8rem] lg:top-[11rem] sm:left-[6rem] md:left-[8rem] lg:left-[10rem] xsm:text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] text-white ...'>
                    Qamar Alkhatib</h3>
                <h3 className='absolute xsm:top-[6rem] xsm:left-[6rem] sm:top-[7.7rem] sm:left-[6.5rem] md:top-[9.5rem] md:left-[8.5rem]  lg:top-[13rem] lg:left-[10.5rem] '>🏊🏻‍♀️⛷🐱‍👤⚽🛶</h3>
            </div>
            <div >
                <p className='xsm:w-[20rem] sm:w-[24rem] md:w-[28rem] lg:w-[38rem] xsm:text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1.1rem] mx-5'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque saepe, odit fugiat officia suscipit delectus molestiae iusto tempora laboriosam aut impedit esse quis ipsa at eius illum? Illo, recusandae iusto.
                    Ipsa ab voluptatibus tenetur ex corporis explicabo? Animi molestiae illum illo natus, nesciunt quisquam tempore modi numquam nobis est sit sint! Doloribus, incidunt impedit deserunt totam nemo blanditiis eaque fuga.
                </p>
            </div>
        </div>
    )
}
export default Profile