import Image from "next/image";
import Logo from "/public/assests/JEKO LOGO.png";
import ScrollImage from "/public/assests/scroll.png";
import DesktopScrollImage from "/public/assests/Frame 3521.png";
import JeffImage from "/public/assests/jeff pics.png";
import Twitter from "/public/assests/Frame 3527.png";
import Instagram from "/public/assests/Group 3459.png";
import Linkedin from "/public/assests/Frame 3528.png";
import UI from "/public/assests/Group 3435.svg";
import ArrowImage from "/public/assests/Group 3484.svg"
import Navbar from "./_components/Navbar";
import Button from "@/constants/atoms/button";

export default function Home() {
	return (
		<div>
			<div
				className="bg-primary relative mx-auto min-h-[250px] rounded-b-[32px] text-center
					lg:min-h-[522px]"
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
					className="font-dm_sans mt-[16.69px] leading-[20px] text-white lg:mt-[38.43px]
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
			</div>
			<Navbar />
			<section className="">
				<div className="flex flex-col items-start lg:flex-row">
					<div className="mt-[18px] px-[16px] lg:mt-[36.5px] xl:px-0 xl:pl-[160px]">
						<div className="leading-[40px] lg:leading-[72px]">
							<h2 className="font-space_grotesk max-w-[457px] text-[40px] font-[700] lg:text-[64px]">
								Hello,
							</h2>
							<h2 className="font-space_grotesk max-w-[457px] text-[40px] font-[700] lg:text-[64px]">
								I’m Jeffery!
							</h2>
						</div>
						<p
							className="font-dm_sans mt-[11px] text-[20px] font-medium lg:mt-[26px] lg:text-[32px]
								xl:leading-[20px]"
						>
							Creative Director and Founder
						</p>
						<p
							className="font-dm_sans mt-[12px] max-w-[581px] text-[14px] font-light leading-[22px]
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
							<hr className="border-primary w-[92px] border-2 border-solid" />
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
			</section>

			<section
				className="bg-secondaryLight min-h-[1354px] rounded-[16px] px-[16px] py-[24px] lg:min-h-[785px]
					lg:rounded-[32px] lg:px-[160px] lg:py-[92px]"
			>
				<div className="flex flex-col lg:flex-row lg:items-center lg:gap-[128px]">
					<h2 className="font-space_grotesk text-[32px] font-bold text-white lg:text-[64px]">
						My <span className="text-secondary">Services.</span>
					</h2>
					<p
						className="font-dm_sans max-w-[592px] flex-1 text-[14px] font-normal text-white
							lg:text-[20px]"
					>
						Customized design solutions crafted to elevate your brand’s presence, engage your
						audience, and drive lasting success
					</p>
				</div>

				<div className="mt-[6px] lg:mt-[64px] flex flex-col items-center gap-[28.01px] lg:flex-row lg:gap-[54px]">
					<div
						className="h-full min-h-[351.99px] w-full max-w-[287.91px] lg:max-w-[337px] lg:min-h-[412px] rounded-[16px] border-2
							border-solid border-white/50 bg-white/20 backdrop-blur-md"
					>
						<div>
							<h2 className="font-space_grotesk px-[35.1px] py-[32px] font-medium text-white">
								UI/UX Design
							</h2>
							<hr className="w-full border-2 border-solid border-white/50" />
						</div>
						<div className="relative z-10 mt-[31.95px] h-[252.87px] lg:h-[295.99px]  w-full">
							<Image src={UI} alt="Scar" className="h-full mt-2 absolute w-full object-cover" />
              <Image src={ArrowImage} alt="arrow" className="absolute -right-5 -bottom-2"/>
						</div>
					</div>
          <div
						className="h-full min-h-[351.99px] w-full max-w-[287.91px] lg:max-w-[337px] lg:min-h-[412px] rounded-[16px] border-2
							border-solid border-white/50 bg-white/20 backdrop-blur-md"
					>
						<div>
							<h2 className="font-space_grotesk px-[35.1px] py-[32px] font-medium text-white">
								UI/UX Design
							</h2>
							<hr className="w-full border-2 border-solid border-white/50" />
						</div>
						<div className="relative z-10 mt-[31.95px] h-[252.87px] lg:h-[295.99px]   w-full">
							<Image src={UI} alt="Scar" className="h-full mt-2 absolute w-full object-cover" />
              <Image src={ArrowImage} alt="arrow" className="absolute -right-5 -bottom-2"/>
						</div>
					</div>
          	<div
						className="h-full min-h-[351.99px] w-full max-w-[287.91px] lg:max-w-[337px] lg:min-h-[412px] rounded-[16px] border-2
							border-solid border-white/50 bg-white/20 backdrop-blur-md"
					>
						<div>
							<h2 className="font-space_grotesk px-[35.1px] py-[32px] font-medium text-white">
								UI/UX Design
							</h2>
							<hr className="w-full border-2 border-solid border-white/50" />
						</div>
						<div className="relative z-10 mt-[31.95px] h-[252.87px] lg:h-[295.99px]   w-full">
							<Image src={UI} alt="Scar" className="h-full mt-2 absolute w-full object-cover" />
              <Image src={ArrowImage} alt="arrow" className="absolute -right-5 -bottom-2"/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
