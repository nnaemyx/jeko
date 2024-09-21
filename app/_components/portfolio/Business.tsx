import React from 'react'
import Businesscards from "/public/assests/Frame 3511.svg"
import Image from 'next/image'
import Button from '@/constants/atoms/button'
const Business = () => {
  return (
    <div>
        <div>
            <h2 className='font-space_grotesk text-[40px] font-bold lg:pl-[158px] lg:text-[64px]'>Business Cards</h2>
            <div className='mx-auto text-center flex justify-center'>
                <Image src={Businesscards} alt='business cards'/>
            </div>
            <div className="mt-[23px] lg:mt-[62px] lg:mb-[67px]">
					<Button
						withArrow
						text="See more Business Cards"
						className="mx-auto px-[13.19px] py-[7px] font-dm_sans text-[10px] font-medium
							lg:px-[26.03px] lg:py-[13.5px] lg:text-[16px]"
					/>
				</div>
        </div>
    </div>
  )
}

export default Business