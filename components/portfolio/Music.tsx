import Image from "next/image";
import React from "react";

import Roadboy from "/public/assests/The_Road_Boy_Music_Cover[1] 1.svg";
import Moatez from "/public/assests/Untitled Project (2) 1.svg";
import Jamaciangirl from "/public/assests/Jamaican girl music cover-Recovered copy 3.png";
import Button from "@/constants/atoms/button";
import Link from "next/link";

const Music = () => {
	return (
		<div className="px-[16px] lg:px-0">
			<div>
				<h1 className="font-space_grotesk text-[40px] font-bold lg:pl-[158px] lg:text-[64px]">
					Music covers
				</h1>
				<div className="mt-[17px] flex flex-col items-center space-y-[8px] lg:flex-row lg:gap-[20px]">
					<div
						className="h-full w-full rounded-[16px] bg-[#CFD9DD] px-[24px] py-[19px] lg:max-h-[540px]
							lg:max-w-[480px] lg:px-[60px] lg:pb-[29px] lg:pt-[56px]"
					>
						<Image src={Roadboy} className="lg:size-[360px]" alt="Roadboy music cover" />
						<div
							className="mt-[15px] font-dm_sans font-medium leading-[20.83px] text-[#09444A]
								lg:text-[24px] lg:leading-[31.25px]"
						>
							<p>Artist: Kyrian C</p>
							<p>Music name: The Road Boy</p>
						</div>
					</div>

					<div
						className="h-full w-full rounded-[16px] bg-[#CFD9DD] px-[24px] py-[19px] lg:max-h-[540px]
							lg:max-w-[480px] lg:px-[60px] lg:pb-[29px] lg:pt-[56px]"
					>
						<Image src={Moatez} className="lg:size-[360px]" alt="Roadboy music cover" />
						<div
							className="mt-[15px] font-dm_sans font-medium leading-[20.83px] text-[#09444A]
								lg:text-[24px] lg:leading-[31.25px]"
						>
							<p>Artist: Moatez</p>
							<p>Music name: 10 Over 10</p>
						</div>
					</div>

					<div
						className="h-full w-full rounded-[16px] bg-[#CFD9DD] px-[24px] py-[19px] lg:max-h-[540px]
							lg:max-w-[480px] lg:px-[60px] lg:pb-[29px] lg:pt-[56px]"
					>
						<Image src={Jamaciangirl} className="lg:size-[360px]" alt="Roadboy music cover" />
						<div
							className="mt-[15px] font-dm_sans font-medium leading-[20.83px] text-[#09444A]
								lg:text-[24px] lg:leading-[31.25px]"
						>
							<p>Artist: Moatez</p>
							<p>Music name: Jamaican girl</p>
						</div>
					</div>
				</div>
				<div className="mt-[23px] lg:mt-[62px]">
					<Link href="https://dribbble.com/Jeff3ry">
						<Button
							withArrow
							text="See more Music covers"
							className="mx-auto px-[13.19px] py-[7px] font-dm_sans text-[10px] font-medium
								lg:px-[26.03px] lg:py-[13.5px] lg:text-[16px]"
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Music;
