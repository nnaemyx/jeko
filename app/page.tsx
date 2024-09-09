"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Logo from "/public/assests/JEKO LOGO.png";
import ScrollImage from "/public/assests/scroll.png";
import DesktopScrollImage from "/public/assests/Frame 3521.png";
import Calories from "/public/assests/Calories.svg";
import Pen from "/public/assests/Pen.svg";
import Subtask from "/public/assests/Subttasks_alt_fill.svg";
import JeffImage from "/public/assests/jeff pics.png";
import Twitter from "/public/assests/Frame 3527.png";
import Instagram from "/public/assests/Group 3459.png";
import Linkedin from "/public/assests/Frame 3528.png";
import UI from "/public/assests/Group 3435.svg";
import ArrowImage from "/public/assests/Group 3484.svg";
import Connect from "/public/assests/Group 3497.svg";
import Desktopconnect from "/public/assests/Group 3495.svg";
import Navbar from "./_components/Navbar";
import Button from "@/constants/atoms/button";
import Marquee from "react-fast-marquee";
import StarIcon from "@/constants/icons/StarIcon";
import { ReactTyped } from "react-typed";

const services = [
	{ title: "UI/UX Design", image: UI, arrowImage: ArrowImage },
	{ title: "Web Development", image: UI, arrowImage: ArrowImage },
	{ title: "App Development", image: UI, arrowImage: ArrowImage },
];

const marqueeItems = [
	"Flyers",
	"Logo",
	"Music Covers",
	"Mobile app/web Design",
	"Business card",
	"Product Design",
	"Book cover",
	"Framer",
];

const scrollAnimation = {
	hidden: { opacity: 0, y: 100 },
	visible: { opacity: 1, y: 0 },
};

export default function Home() {
	return (
		<div>
			<motion.div
				className="relative mx-auto min-h-[250px] rounded-b-[32px] bg-primary text-center
					lg:min-h-[522px]"
				initial="hidden"
				whileInView="visible"
				
				transition={{ duration: 0.8 }}
				variants={scrollAnimation}
			>
				<div className="px-[38px] pt-[59px]">
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
				<div className="mt-[26.31px] px-[44px] lg:mt-[43px]">
					<Image src={Logo} alt="logo" className="mx-auto" />
				</div>
				<p
					className="mt-[16.69px] font-dm_sans leading-[20px] text-white lg:mt-[38.43px]
						lg:text-[32px]"
				>
					Where Creativity meets Innovation
				</p>
				<div className="absolute left-0 right-0 top-[14rem] mx-auto block size-[54px] lg:hidden">
					<Image src={ScrollImage} alt="scroll" />
				</div>
				<div className="absolute left-0 right-0 top-[31rem] mx-auto hidden size-[54px] lg:block">
					<Image src={DesktopScrollImage} alt="scroll" />
				</div>
			</motion.div>
			<Navbar />
			<motion.div initial="hidden"
				whileInView="visible"
				
				transition={{ duration: 0.8 }}
				variants={scrollAnimation} className="">
				<div className="flex flex-col items-start lg:flex-row">
					<div className="mt-[18px] px-[16px] lg:mt-[36.5px] xl:px-0 xl:pl-[160px]">
						<div className="leading-[40px] lg:leading-[72px]">
							<h2 className="max-w-[457px] font-space_grotesk text-[40px] font-[700] lg:text-[64px]">
								Hello,
							</h2>
							<ReactTyped
								strings={["I’m Jeffery!"]}
								typeSpeed={120}
								backSpeed={140}
								loop
								className="max-w-[457px] font-space_grotesk text-[40px] font-[700] lg:text-[64px]"
							/>
						</div>
						<p
							className="mt-[11px] font-dm_sans text-[20px] font-medium lg:mt-[26px] lg:text-[32px]
								xl:leading-[20px]"
						>
							Creative Director and Founder
						</p>
						<p
							className="mt-[12px] max-w-[581px] font-dm_sans text-[14px] font-light leading-[22px]
								lg:mt-[32px] lg:text-[16px]"
						>
							With a passion for blending creativity and strategy, I founded JEKO DESIGN STUDIO to
							help brands tell their stories through compelling design. With every project, I bring
							a unique vision and meticulous attention to detail, ensuring that each design is not
							only visually stunning but also perfectly aligned with the client’s goals. My mission
							is to transform ideas into impactful digital experiences that resonate with audiences
							and elevate brands to new heights.
						</p>
						<div className="mt-[20px] flex items-center gap-[5px]">
							<Button
								className="px-[7px] py-[9px] text-[10px] lg:text-[16px] xl:px-[13.5px]"
								text="Let’s create something extraordinary  together."
								type="button"
								variant="secondary"
							/>
							<Button
								className="px-[8px] py-[7px] text-[10px] lg:text-[16px] xl:px-[14.03px]"
								variant="primary"
								withArrow
								type="button"
								text="Contact me"
							/>
						</div>
						<div className="mt-[12px] flex items-center gap-[7px] lg:mt-[29px]">
							<h2 className="text-[12px] lg:font-medium">Check out my socials</h2>
							<hr className="w-[92px] border-2 border-solid border-primary" />
							<div className="flex items-center gap-[12px]">
								<Image src={Instagram} alt="twitter icon" />
								<Image src={Twitter} alt="twitter icon" />
								<Image src={Linkedin} alt="twitter icon" />
							</div>
						</div>
					</div>
					<div className="-mt-[5rem] max-w-[704px] lg:-mt-[10rem]">
						<Image src={JeffImage} alt="Jeff picture" />
					</div>
				</div>
			</motion.div>

			<motion.div
			initial="hidden"
			whileInView="visible"
			
			transition={{ duration: 0.8 }}
			variants={scrollAnimation}
				className="min-h-[1354px] rounded-[16px] bg-secondaryLight px-[16px] py-[24px] lg:min-h-[785px]
					lg:rounded-[32px] lg:px-[160px] lg:py-[92px]"
			>
				<div className="flex flex-col lg:flex-row lg:items-center lg:gap-[128px]">
					<h2 className="font-space_grotesk text-[32px] font-bold text-white lg:text-[64px]">
						My <span className="text-secondary">Services.</span>
					</h2>
					<p
						className="max-w-[592px] flex-1 font-dm_sans text-[14px] font-normal text-white
							lg:text-[20px]"
					>
						Customized design solutions crafted to elevate your brand’s presence, engage your
						audience, and drive lasting success
					</p>
				</div>

				<div
					className="mt-[6px] flex flex-col items-center gap-[28.01px] lg:mt-[64px] lg:flex-row
						lg:gap-[54px]"
				>
					{services.map((service, index) => (
						<div
							key={index}
							className="h-full min-h-[351.99px] w-full max-w-[287.91px] rounded-[16px] border-2
								border-solid border-white/50 bg-white/20 backdrop-blur-md lg:min-h-[412px]
								lg:max-w-[337px]"
						>
							<div>
								<h2 className="px-[35.1px] py-[32px] font-space_grotesk font-medium text-white">
									{service.title}
								</h2>
								<hr className="w-full border-2 border-solid border-white/50" />
							</div>
							<div className="relative z-10 mt-[31.95px] h-[252.87px] w-full lg:h-[295.99px]">
								<Image
									src={service.image}
									alt={service.title}
									className="absolute mt-2 h-full w-full object-cover"
								/>
								<Image
									src={service.arrowImage}
									alt="arrow"
									className="absolute -bottom-2 -right-5"
								/>
							</div>
						</div>
					))}
				</div>
			</motion.div>

			<motion.div initial="hidden"
				whileInView="visible"
				
				transition={{ duration: 0.8 }}
				variants={scrollAnimation} className="px-[18px] py-[41px] lg:px-[168px]">
				<div className="flex flex-col gap-[11.98px] lg:flex-row">
					<div>
						<p className="font-dm_sans text-[20px] font-medium text-primary lg:text-[32px]">
							My Work Experience
						</p>
						<div className="relative mt-[19px]">
							<h2
								className="font-space_grotesk text-[40px] font-[700] leading-[40px] lg:w-[625px]
									lg:text-[64px] lg:leading-[72px]"
							>
								Up to <span className="text-secondary">4</span> Years of experience as a Digital
								Designer.
							</h2>
							<Image
								src={Calories}
								alt="calories icon"
								className="absolute -top-4 right-[6.5rem]"
							/>
						</div>
						<p className="mt-[32px] font-dm_sans text-[16px] font-normal lg:text-[20px]">
							Core Skills Acquired
						</p>
						<div className="mt-[17px] space-y-[9px]">
							<div className="flex gap-[10px]">
								<Button
									text="Branding and Identity"
									variant="secondary"
									className="h-[50px] rounded-r-[16px] px-[12.5px] py-[16px] text-[14px]
										lg:px-[24.5px] lg:text-[20px]"
								/>
								<Button
									text="Graphic Design"
									variant="secondary"
									className="h-[50px] rounded-r-[16px] px-[12.5px] py-[16px] text-[14px]
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
							</div>
						</div>
						<Image src={Pen} alt="pen" className="mt-[24.07px]" />
					</div>
					<div>
						<h2 className="font-dm_sans text-[14px] font-normal lg:w-[369px] lg:text-[20px]">
							A timeline of my growth, achievements, and the skills I've honed along the way.
						</h2>
						<div className="mt-[36px] flex">
							<div className="mt-[5px] block lg:hidden">
								<Image src={Connect} alt="djd" />
							</div>
							<div className="mt-[5px] hidden lg:block">
								<Image src={Desktopconnect} alt="djd" />
							</div>
							<div className="relative space-y-[16px] px-[19px] font-dm_sans lg:space-y-[29px]">
								<div>
									<p className="text-[12px] lg:text-[16px]">2020 - Present</p>
									<h2 className="text-[16px] font-medium lg:text-[24px]">
										Senior Graphic Designer
									</h2>
									<p className="text-[12px] lg:text-[16px]">Freelance</p>
								</div>
								<div>
									<p className="text-[12px] lg:text-[16px]">2022 - Present</p>
									<h2 className="text-[16px] font-medium lg:text-[24px]">UI/UX Designer</h2>
									<p className="text-[12px] lg:text-[16px]">Tezon tech company</p>
								</div>
								<div>
									<p className="text-[12px] lg:text-[16px]">2023 - Present</p>
									<h2 className="text-[16px] font-medium lg:text-[24px]">Web3 Designer</h2>
									<p className="text-[12px] lg:text-[16px]">Edit By Denzel Web3 group</p>
								</div>
								<div>
									<p className="text-[12px] lg:text-[16px]">2024 - Present</p>
									<h2 className="text-[16px] font-medium lg:text-[24px]">Junior Designer</h2>
									<p className="text-[12px] lg:text-[16px]">Nigerian Ports Authourity</p>
								</div>
								<Image src={Subtask} alt="subtask" className="absolute right-0 top-[12rem]" />
							</div>
						</div>
					</div>
				</div>
			</motion.div>

			<section className="w-full overflow-hidden">
				<div
					className="my-[40.87px] -ml-9 h-[101.07px] w-[150vw] rotate-[-4deg] bg-secondaryLight
						font-dm_sans text-[10.454px] text-white lg:mb-[124.87px] lg:h-[103.99px] lg:w-[250vw]"
				>
					<Marquee>
						<div className="flex w-max gap-[10.22px]">
							{marqueeItems.map((item, index) => (
								<div key={index} className="mr-6 flex items-center gap-[10.22px] py-[37.43px]">
									<StarIcon />
									<p className="text-[24px] font-medium">{item}</p>
								</div>
							))}
						</div>
					</Marquee>
				</div>
			</section>
			<section>
				<h2>Past Clients/Featured Works</h2>
			</section>
		</div>
	);
}
