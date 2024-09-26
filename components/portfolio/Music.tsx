import Image from 'next/image'
import React from 'react'

import Roadboy from "/public/assests/The_Road_Boy_Music_Cover[1] 1.svg"
import Moatez from "/public/assests/Untitled Project (2) 1.svg"
import Jamaciangirl from "/public/assests/Jamaican girl music cover-Recovered copy 3.png"
import Button from '@/constants/atoms/button'

const Music = () => {
  return (
    <div className='px-[16px] lg:px-0'>
        <div>
            <h1 className='font-space_grotesk text-[40px] font-bold lg:pl-[158px] lg:text-[64px]'>Music covers</h1>
            <div className='flex flex-col lg:flex-row items-center lg:gap-[20px] mt-[17px] space-y-[8px]'>
                <div className='bg-[#CFD9DD] rounded-[16px] w-full lg:max-w-[480px]  h-full lg:max-h-[540px]  lg:pt-[56px] lg:pb-[29px] lg:px-[60px]  px-[24px] py-[19px] '>
                    <Image src={Roadboy} className='lg:size-[360px]'  alt='Roadboy music cover'/>
                    <div className='mt-[15px] leading-[20.83px] lg:text-[24px] lg:leading-[31.25px] text-[#09444A] font-dm_sans font-medium'>
                        <p>Artist: Kyrian C</p>
                        <p>Music name: The Road Boy</p>
                    </div>
                </div>

                <div className='bg-[#CFD9DD] rounded-[16px] lg:pt-[56px] lg:pb-[29px] lg:px-[60px] w-full lg:max-w-[480px]  h-full lg:max-h-[540px]   px-[24px] py-[19px] '>
                    <Image src={Moatez} className='lg:size-[360px]'  alt='Roadboy music cover'/>
                    <div className='mt-[15px] leading-[20.83px] lg:text-[24px] lg:leading-[31.25px] text-[#09444A] font-dm_sans font-medium'>
                        <p>Artist: Moatez</p>
                        <p>Music name: 10 Over 10</p>
                    </div>
                </div>

                <div className='bg-[#CFD9DD] rounded-[16px] lg:pt-[56px] lg:pb-[29px] lg:px-[60px] w-full lg:max-w-[480px] h-full lg:max-h-[540px]  px-[24px] py-[19px] '>
                    <Image src={Jamaciangirl} className='lg:size-[360px]' alt='Roadboy music cover'/>
                    <div className='mt-[15px] leading-[20.83px] lg:text-[24px] lg:leading-[31.25px] text-[#09444A] font-dm_sans font-medium'>
                        <p>Artist: Moatez</p>
                        <p>Music name: Jamaican girl</p>
                    </div>
                </div>
            </div>
            <div className="mt-[23px] lg:mt-[62px]">
					<Button
						withArrow
						text="See more Music covers"
						className="mx-auto px-[13.19px] py-[7px] font-dm_sans text-[10px] font-medium
							lg:px-[26.03px] lg:py-[13.5px] lg:text-[16px]"
					/>
				</div>
        </div>
    </div>
  )
}

export default Music