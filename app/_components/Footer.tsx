import React from "react";
import Button from "@/constants/atoms/button";
import LogoIcon from "@/constants/icons/Logo";
import Twitter from "/public/assests/Frame 3527.png";
import Instagram from "/public/assests/Group 3459.png";
import Linkedin from "/public/assests/Frame 3528.png";
import Image from "next/image";

const Footer = () => {
	return (
		<div className="bg-primary px-[14px] lg:px-[168px] py-[45px]">
			<div className="flex w-full items-center justify-between text-white">
				<h1 className="font-space_grotesk font-[400] text-[20px] lg:text-[60px]">Ready to get started?</h1>
				<Button
					text="Hire me"
					variant="primary"
					withArrow
					className="px-[23.69px] py-[7px] font-dm_sans text-[10px] lg:text-[16px] font-medium"
				/>
			</div>
			<div className="mt-[37.66px] flex items-center lg:items-baseline justify-between">
				<div className="space-y-[13.65px]">
					<LogoIcon />
					<p className="font-dm_sans text-[12px] lg:text-[16px] font-normal text-white">
						Where Creativity meets Innovation
					</p>
				</div>
        <div>
        <h2 className="mt-[46px] hidden lg:block text-[12px] font-dm_sans font-normal text-white text-center">© 2024 Jeko Design Studio. All Rights Reserved. </h2>
        </div>
				<div className="flex items-center gap-[12px]">
					<Image src={Instagram} alt="twitter icon" />
					<Image src={Twitter} alt="twitter icon" />
					<Image src={Linkedin} alt="twitter icon" />
				</div>
      
			</div>
      <h2 className="mt-[46px] lg:hidden block text-[12px] font-dm_sans font-normal text-white text-center">© 2024 Jeko Design Studio. All Rights Reserved. </h2>
		</div>
	);
};

export default Footer;
