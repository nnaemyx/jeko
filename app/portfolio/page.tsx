"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../_components/Navbar";
import Button from "@/constants/atoms/button";
import Image from "next/image";

import DesktopManverickimage from "/public/assests/maverickdesktop.svg";
import Manverickimage from "/public/assests/MAV LAYMOCK 2.svg";
import DesktopInstagram from "/public/assests/Instagram Post Mockup Mosaic UV 1.svg";
import Instagram from "/public/assests/Instagram Post Mockup Mosaic UV 1 (1).svg";
import Flyers from "/public/assests/Frame 3500.svg";
import Website1 from "/public/assests/website2.svg";
import Website2 from "/public/assests/OWINKS1 copy 1.svg";
import Packaging from "/public/assests/Frame 3505.svg";
import Music from "../../components/portfolio/Music";
import Business from "../../components/portfolio/Business";

const scrollAnimation = {
	hidden: { opacity: 0, y: 100 },
	visible: { opacity: 1, y: 0 },
};

const Page = () => {
	return (
		<div>
			<motion.div
				initial="hidden"
				whileInView="visible"
				transition={{ duration: 0.8 }}
				variants={scrollAnimation}
				className="relative mx-auto min-h-[228px] rounded-b-[16px] bg-primary lg:min-h-[290px]
					lg:rounded-b-[32px]"
			>
				<div className="px-[38px] pt-[59px] text-center">
					<div
						className="mx-auto max-w-[875px] rounded-[6px] border border-solid border-white/[12%]
							bg-white/[1%] lg:rounded-[16px] lg:py-[17px]"
					>
						<h2
							className="font-dm_sans text-[8px] font-[300] leading-[16px] tracking-[5px] text-white
								lg:text-[16px] lg:tracking-[19px]"
						>
							WELCOME TO JEKO DESIGN STUDIO
						</h2>
					</div>
				</div>
				<p
					className="mt-[34px] w-[351px] pl-[37px] pr-[72px] text-left font-space_grotesk text-[40px]
						font-[700] leading-[40px] text-white lg:mt-[43px] lg:w-auto lg:pl-0 lg:pr-0
						lg:text-center lg:text-[64px]"
				>
					Welcome to my Portfolio
				</p>
			</motion.div>
			<Navbar />
			<motion.div
				initial="hidden"
				whileInView="visible"
				transition={{ duration: 0.8 }}
				variants={scrollAnimation}
				className="mt-[29px] pl-[16px] pr-[16px] lg:mt-[80px] lg:pl-[159px] lg:pr-[131px]"
			>
				<h1 className="font-dm_sans text-[18px] font-medium lg:text-[32px]">
					Below is a selection of my most impactful projects, showcasing my versatility and creativity
					across different design disciplines. Ranging from...
				</h1>
				<div className="mt-[21px] space-y-[9px] lg:mt-[59px]">
					<div className="flex gap-[10px]">
						<Button
							text="Branding and Identity"
							variant="secondary"
							className="h-[50px] rounded-r-[16px] px-[12.5px] py-[16px] text-[14px] lg:px-[24.5px]
								lg:text-[20px]"
						/>
						<Button
							text="Graphic Design"
							variant="secondary"
							className="h-[50px] rounded-r-[16px] px-[12.5px] py-[16px] text-[14px] lg:px-[24.5px]
								lg:text-[20px]"
						/>
						<Button
							text="Music Cover Art"
							variant="secondary"
							className="hidden h-[50px] rounded-r-[16px] px-[12.5px] py-[16px] text-[14px] lg:flex
								lg:px-[24.5px] lg:text-[20px]"
						/>
					</div>
					<div className="flex gap-[10px]">
						<Button
							text="Web Design and Development"
							variant="secondary"
							className="h-[50px] w-full max-w-[214px] rounded-r-[16px] px-[7.5px] py-[16px]
								text-[14px] lg:max-w-[317px] lg:px-[16.5px] lg:text-[20px]"
						/>
						<Button
							text="UI/UX Design"
							variant="secondary"
							className="h-[50px] rounded-r-[16px] px-[7px] py-[16px] text-[14px] lg:px-[29px]
								lg:text-[20px]"
						/>
						<Button
							text="Product design and packaging"
							variant="secondary"
							className="hidden h-[50px] w-full max-w-[214px] rounded-r-[16px] px-[7.5px] py-[16px]
								text-[14px] lg:flex lg:max-w-[317px] lg:px-[7px] lg:text-[20px]"
						/>
					</div>
					<div className="flex gap-[10px] lg:hidden">
						<Button
							text="Music Cover Art"
							variant="secondary"
							className="h-[50px] rounded-r-[16px] px-[6.5px] py-[14px] text-[14px]"
						/>
						<Button
							text="Product design and packaging"
							variant="secondary"
							className="h-[50px] w-full max-w-[214px] rounded-r-[16px] px-[3.5px] py-[16px]
								text-[14px]"
						/>
					</div>
				</div>
			</motion.div>
			<motion.div
				initial="hidden"
				whileInView="visible"
				transition={{ duration: 0.8 }}
				variants={scrollAnimation}
				className="mt-[42px] px-[16px] lg:mt-[116px] lg:pl-[159px] lg:pr-0"
			>
				<h2
					className="font-space_grotesk text-[40px] font-[700] leading-[40px] lg:text-[64px]
						lg:leading-[64px]"
				>
					Logo and branding
				</h2>
				<div className="mt-[25px] space-y-[25px] lg:mt-[21px] lg:space-y-[70px]">
					<div
						className="flex flex-col-reverse gap-[15px] lg:flex-row lg:items-center
							lg:justify-between lg:gap-[28px]"
					>
						<div className="lg:w-full lg:max-w-[533px]">
							<div
								className="font-dm_sans text-[20px] font-medium leading-[26.04px] text-primary
									lg:text-[32px] lg:leading-[41.66px]"
							>
								<h2>Client: Maverick</h2>
								<p>Industry: Crypto and Web3</p>
							</div>
							<h3
								className="mt-[7px] font-dm_sans text-[16px] font-medium lg:mt-[35px]
									lg:text-[24px]"
							>
								Job done: Logo and brand Identity design{" "}
							</h3>
							<p
								className="mt-[9px] font-dm_sans text-[14px] font-normal lg:mt-[35px]
									lg:text-[16px]"
							>
								The Maverick Xchange logo embodies the bold and dynamic nature of the crypto
								industry. The prominent ‘M’ is designed with sharp, modern lines, representing
								strength and stability, while the green arrows cutting through symbolize growth,
								forward momentum, and the exchange of currency. This design was crafted to stand
								out in a competitive market, reflecting Maverick Xchange’s commitment to
								innovation. The logo’s strategic use of color and form, positions the brand as a
								leader among its competitors, ready to navigate the fast paced world of digital
								currencies with confidence and clarity.
							</p>
							<Button
								withArrow
								text="See case study"
								className="mt-[9px] px-[13.19px] py-[7px] font-dm_sans text-[10px] font-medium
									lg:mt-[35px] lg:px-[26.03px] lg:py-[13.5px] lg:text-[16px]"
							/>
						</div>
						<div className="w-full">
							<Image src={DesktopManverickimage} alt="maverick logo" className="hidden lg:flex" />
							<Image src={Manverickimage} alt="maverick logo" className="flex lg:hidden" />
						</div>
					</div>
					<div
						className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between
							lg:gap-[28px]"
					>
						<div className="lg:w-full lg:max-w-[533px]">
							<div
								className="font-dm_sans text-[20px] font-medium leading-[26.04px] text-primary
									lg:text-[32px] lg:leading-[41.66px]"
							>
								<h2>Client: Prestige</h2>
								<p>Industry: Food and catering</p>
							</div>
							<h3
								className="mt-[7px] font-dm_sans text-[16px] font-medium lg:mt-[35px]
									lg:text-[24px]"
							>
								Job done: Logo and brand Identity design{" "}
							</h3>
							<p
								className="mt-[9px] font-dm_sans text-[14px] font-normal lg:mt-[35px]
									lg:text-[16px]"
							>
								The Prestige Catering Services logo captures the essence of quality dining and
								hospitality. The minimalist design features a plate with a fork and spoon,
								symbolizing the core of the catering business—delicious food and attentive service.
								The circular shape of the logo, combined with the tagline "We Cook • We Serve,"
								emphasizes the full-circle service provided by Prestige Catering. The clean lines
								and modern typography convey a sense of professionalism and reliability, making
								this logo a perfect representation of a catering service that prides itself on
								excellence and customer satisfaction.
							</p>
							<Button
								withArrow
								text="See case study"
								className="mt-[9px] px-[13.19px] py-[7px] font-dm_sans text-[10px] font-medium
									lg:mt-[35px] lg:px-[26.03px] lg:py-[13.5px] lg:text-[16px]"
							/>
						</div>
						<div className="w-full">
							<Image src={DesktopInstagram} alt="maverick logo" className="hidden lg:flex" />
							<Image src={Instagram} alt="maverick logo" className="flex lg:hidden" />
						</div>
					</div>
				</div>
				<div className="mt-[23px] lg:mt-[35px]">
					<Button
						withArrow
						text="See more logo and branding"
						className="mx-auto px-[13.19px] py-[7px] font-dm_sans text-[10px] font-medium
							lg:px-[26.03px] lg:py-[13.5px] lg:text-[16px]"
					/>
				</div>
			</motion.div>
			<motion.div
				initial="hidden"
				whileInView="visible"
				transition={{ duration: 0.8 }}
				variants={scrollAnimation}
				className="mt-[55px] lg:mt-[81px]"
			>
				<h2
					className="px-[16px] font-space_grotesk text-[40px] font-[700] lg:pl-[158px] lg:pr-0
						lg:text-[64px]"
				>
					Flyers
				</h2>
				<div className="px-[16px] lg:px-0">
					<Image src={Flyers} alt="flyers" />
				</div>
				<div className="mt-[26px] lg:mt-[62px]">
					<Button
						withArrow
						text="See more Flyers"
						className="mx-auto px-[13.19px] py-[7px] font-dm_sans text-[10px] font-medium
							lg:px-[26.03px] lg:py-[13.5px] lg:text-[16px]"
					/>
				</div>
			</motion.div>
			<motion.div
				initial="hidden"
				whileInView="visible"
				transition={{ duration: 0.8 }}
				variants={scrollAnimation}
				className="mt-[52px] lg:mt-[86px]"
			>
				<h2 className="pl-[16px] font-space_grotesk text-[40px] font-bold lg:pl-[158px] lg:text-[64px]">
					Websites
				</h2>
				<div className="flex flex-col space-y-[44px]">
					<div>
						<div className="lg:px-[160px]">
							<Image src={Website1} alt="Website 1" />
						</div>
						<div
							className="-mt-12 hidden w-full flex-col font-dm_sans lg:flex lg:flex-row
								lg:items-center lg:justify-center lg:gap-[113px] lg:pl-[160px] lg:pr-[135px]"
						>
							<div className="lg:text-[24px]">
								<p>Client: VeriPay Fx </p>
								<p>Industry: FinTech</p>
							</div>
							<div className="lg:text-[24px]">
								<p>Job done: Fully functional and responsive </p>
								<p>website design and development</p>
							</div>
							<Button
								className="px-[43.5px] py-[13.5px]"
								withArrow
								text="View live site"
								variant="primary"
							/>
						</div>
						<div className="block px-[16px] lg:hidden">
							<div className="flex justify-between">
								<div>
									<p>Client: VeriPay Fx </p>
									<p>Industry: FinTech</p>
								</div>
								<Button
									className="px-[18.69px] py-[7px] text-[10px]"
									withArrow
									text="View live site"
									variant="primary"
								/>
							</div>
							<div className="mt-[16px]">
								<p>Job done: Fully functional and responsive </p>
								<p>website design and development</p>
							</div>
						</div>
					</div>

					<div>
						<div className="lg:px-[160px]">
							<Image src={Website2} alt="Website 1" />
						</div>
						<div
							className="-mt-12 hidden w-full flex-col items-center justify-center gap-[113px]
								font-dm_sans lg:flex lg:flex-row lg:pl-[160px] lg:pr-[135px]"
						>
							<div className="lg:text-[24px]">
								<p>Client: VeriPay Fx </p>
								<p>Industry: FinTech</p>
							</div>
							<div className="lg:text-[24px]">
								<p>Job done: Fully functional and responsive </p>
								<p>website design and development</p>
							</div>
							<Button
								className="px-[43.5px] py-[13.5px]"
								withArrow
								text="View live site"
								variant="primary"
							/>
						</div>
						<div className="block px-[16px] lg:hidden">
							<div className="flex justify-between">
								<div>
									<p>Client: VeriPay Fx </p>
									<p>Industry: FinTech</p>
								</div>
								<Button
									className="px-[18.69px] py-[7px] text-[10px]"
									withArrow
									text="View live site"
									variant="primary"
								/>
							</div>
							<div className="mt-[16px]">
								<p>Job done: Fully functional and responsive </p>
								<p>website design and development</p>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
			<motion.div
				initial="hidden"
				whileInView="visible"
				transition={{ duration: 0.8 }}
				variants={scrollAnimation}
				className="mt-[54px] lg:mt-[86px]"
			>
				<h2
					className="pl-[16px] font-space_grotesk text-[40px] font-bold leading-[40px] lg:pl-[158px]
						lg:text-[64px] lg:leading-none"
				>
					Product design and packaging
				</h2>
				<div className="mt-[20px] lg:mt-[58px]">
					<Image src={Packaging} alt="packaging image" />
				</div>
				<div className="mt-[23px] lg:mt-[62px]">
					<Button
						withArrow
						text="See more Packaging designs"
						className="mx-auto px-[13.19px] py-[7px] font-dm_sans text-[10px] font-medium
							lg:px-[26.03px] lg:py-[13.5px] lg:text-[16px]"
					/>
				</div>
			</motion.div>
			<motion.div
				initial="hidden"
				whileInView="visible"
				transition={{ duration: 0.8 }}
				variants={scrollAnimation}
				className="lg:mt-[86px] mt-[54px]"
			>
				<Music />
			</motion.div>
			<motion.div
				initial="hidden"
				whileInView="visible"
				transition={{ duration: 0.8 }}
				variants={scrollAnimation}
				className="lg:mt-[86px] mt-[54px]"
			>
				<Business />
			</motion.div>
		</div>
	);
};

export default Page;
