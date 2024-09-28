import React from "react";
import Button from "@/constants/atoms/button";
import LogoIcon from "@/constants/icons/Logo";
import Twitter from "/public/assests/Frame 3527.png";
import Instagram from "/public/assests/Group 3459.png";
import Linkedin from "/public/assests/Frame 3528.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<div className="bg-primary px-[14px] py-[45px] lg:px-[168px]">
			<div className="flex w-full items-center justify-between text-white">
				<h1 className="font-space_grotesk text-[20px] font-[400] lg:text-[60px]">
					Ready to get started?
				</h1>
				<Button
					text="Hire me"
					variant="primary"
					withArrow
					className="px-[23.69px] py-[7px] font-dm_sans text-[10px] font-medium lg:text-[16px]"
				/>
			</div>
			<div className="mt-[37.66px] flex items-center justify-between lg:items-baseline">
				<div className="space-y-[13.65px]">
					<LogoIcon />
					<p className="font-dm_sans text-[12px] font-normal text-white lg:text-[16px]">
						Where Creativity meets Innovation
					</p>
				</div>
				<div>
					<h2
						className="mt-[46px] hidden text-center font-dm_sans text-[12px] font-normal text-white
							lg:block"
					>
						© 2024 Jeko Design Studio. All Rights Reserved.{" "}
					</h2>
				</div>
				<div className="flex items-center gap-[12px]">
					<Link
						href="https://www.instagram.com/jeko_designstudio?igsh=MXhwYWZhZWp0ZGhzaw=="
						target="_blank"
					>
						<Image src={Instagram} alt="twitter icon" />
					</Link>
					<Link href="https://x.com/jeko_designs?t=j63Nu8PSIP5ADpxdz8Kfiw&s=09" target="_blank">
						<Image src={Twitter} alt="twitter icon" />
					</Link>
					<Link href="https://www.linkedin.com/in/jeffery-nwankwo-53418323a/" target="_blank">
						<Image src={Linkedin} alt="twitter icon" />
					</Link>
				</div>
			</div>
			<h2
				className="mt-[46px] block text-center font-dm_sans text-[12px] font-normal text-white
					lg:hidden"
			>
				© 2024 Jeko Design Studio. All Rights Reserved.{" "}
			</h2>
		</div>
	);
};

export default Footer;
