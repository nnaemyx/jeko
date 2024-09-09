import React from "react";
import Navbar from "../_components/Navbar";
import JeffImage from "/public/assests/jeff pics.png";
import Twitter from "/public/assests/Frame 3527.png";
import Instagram from "/public/assests/Group 3459.png";
import Linkedin from "/public/assests/Frame 3528.png";
import Client from "/public/assests/Group 3468.svg"
import Image from "next/image";

const Page = () => {
	return (
		<div>
			<div
				className="relative mx-auto min-h-[158px] rounded-b-[16px] bg-primary text-center
					lg:min-h-[290px] lg:rounded-b-[32px]"
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
				<p
					className="mt-[16.69px] font-dm_sans leading-[20px] text-white lg:mt-[38.43px]
						lg:text-[32px]"
				>
					Where Creativity meets Innovation
				</p>
			</div>
			<Navbar />
			<div className="mt-[45px] px-[16px] lg:px-[159px]">
				<h1 className="font-space_grotesk text-[40px] font-[700] lg:text-[64px]">About Us.</h1>
				<div
					className="space-y-[47px] font-dm_sans text-[18px] font-[300] lg:space-y-[38px]
						lg:text-[32px]"
				>
					<p>
						At JEKO DESIGN STUDIO, <span className="font-[900] text-secondary">My Mission</span> is
						to deliver tailored, innovative design solutions that resonate with your brand’s unique
						identity. We strive to blend creativity with strategic thinking, ensuring each project
						not only looks exceptional but also achieves its intended impact. Our goal is to help
						businesses communicate their message effectively and stand out in a crowded marketplace.
					</p>
					<p>
						<span className="font-[900] text-secondary">I Envision</span> JEKO DESIGN STUDIO as a
						trailblazer in the design industry, known for pushing creative boundaries and setting new
						standards of excellence. Our future is one where design isn’t just about aesthetics, but
						about crafting experiences that leave a lasting impression. We aim to partner with brands
						across the globe, creating iconic visuals that define the next generation of industry
						leaders.
					</p>
				</div>
			</div>
			<div
				className="mt-[50px] max-h-[772px] rounded-[16px] bg-secondaryLight px-[16px] py-[24px]
					lg:mt-[34px] lg:max-h-[679px] lg:rounded-[32px] lg:px-[160px] lg:py-[92px]"
			>
				<div className="flex flex-col justify-between lg:flex-row lg:items-center">
					<h2 className="font-space_grotesk text-[40px] font-[700] text-white lg:text-[64px]">
						About <span className="text-secondary">me.</span>
					</h2>
					<p className="font-dm_sans text-[20px] font-medium text-white lg:text-[32px]">
						Creative Director and Founder
					</p>
				</div>
				<div className="flex flex-col justify-between lg:flex-row">
					<div>
						<div
							className="mt-[21px] space-y-[17px] font-dm_sans text-[12px] font-normal text-white
								lg:mt-[45px] lg:max-w-[573px] lg:space-y-[28px] lg:text-[16px]"
						>
							<p>
								Born in May 2004, my journey into design began in 2020, a year that sparked my
								passion for creativity and problem-solving. I started as a self-taught graphic
								designer, driven by a deep curiosity and a love for turning ideas into visual
								stories. My dedication led me to earn a certificate in UI/UX Design from Zuri
								Internship, where I honed my skills in crafting intuitive and impactful digital
								experiences.
							</p>
							<p>
								Currently, I’m balancing my design work with my studies in Electronics and Computer
								Engineering at NAU. This unique blend of technical knowledge and creative insight
								allows me to approach design from a holistic perspective, ensuring that each
								project is not only visually compelling but also functionally sound. Every design I
								create is a step in my journey to blend art and technology, bringing innovative
								solutions to life
							</p>
						</div>
						<div className="mt-[27px] flex items-center gap-[7px] lg:mt-[29px]">
							<h2 className="text-[12px] text-white lg:font-medium">Check out my socials</h2>
							<hr className="w-[92px] border-2 border-solid border-white" />
							<div className="flex items-center gap-[12px]">
								<Image src={Instagram} alt="twitter icon" />
								<Image src={Twitter} alt="twitter icon" />
								<Image src={Linkedin} alt="twitter icon" />
							</div>
						</div>
					</div>
					<div>
						<div className="-mt-[4.6rem] max-w-[704px] lg:-mt-[8.4rem]">
							<Image src={JeffImage} alt="Jeff picture" />
						</div>
					</div>
				</div>
			</div>
			<div className="mt-[61px] lg:px-[159px] pl-[15px] pr-[12px] lg:mt-[79px]">
				<p className="font-dm_sans text-[18px] font-normal lg:text-[32px]">
					<span className="font-[900] text-secondary">JEKO DESIGN STUDIO </span> is a creative hub
					where innovative design meets strategic thinking. Founded on the principles of quality,
					creativity, and client satisfaction, My studio is dedicated to crafting visual identities
					that make a lasting impact. I work closely with My clients to understand their brand’s
					essence, ensuring every project reflects their unique personality and goals. Whether it’s
					branding, web design, or custom illustrations, JEKO DESIGN STUDIO is committed to delivering
					exceptional results that elevate brands to new heights.
				</p>
			</div>
			<div
				className="mt-[35px] h-full lg:min-h-[566px] rounded-t-[32px] bg-primary lg:mt-[81px] py-[23px] lg:py-[60px] pl-[16px] pr-[16px]
					lg:pl-[160px] lg:pr-[133px]"
			>
				<div className="flex flex-col justify-between lg:flex-row lg:items-center">
					<h2 className="font-space_grotesk text-[40px] font-[700] text-white lg:text-[64px]">
						Past Clients.
					</h2>
					<p className="font-dm_sans text-[14px]  pr-[100px] font-medium text-white lg:text-[20px]">
						Proudly partnered with brands that trust in the power of design
					</p>
				</div>
        <div className="">
          <Image src={Client} alt="past clients"/>
        </div>
			</div>
		</div>
	);
};

export default Page;
