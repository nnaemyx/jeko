import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import TradeFlex from "/public/assests/20240823_030756 1.svg";
import Veripay from "/public/assests/Frame 3479.svg";
import Ftggadgets from "/public/assests/Frame 3469.svg";
import Mavlaymock from "/public/assests/MAV LAYMOCK 2.svg";
import Lizu from "/public/assests/Frame 3478.svg";
import Kedu from "/public/assests/clientimage.jpg";
import Button from "@/constants/atoms/button";
import Link from "next/link";

// Array of image URLs
const marqueeImages = [
	{ image: TradeFlex },
	{ image: Veripay },
	{ image: Ftggadgets },
	{ image: Mavlaymock },
	{ image: Lizu },
	{ image: Kedu },
];

const ClientScroll = () => {
	return (
		<>
			<div className="w-full overflow-hidden overflow-x-auto">
				<Marquee pauseOnHover={true} speed={50}>
					<div className="flex flex-nowrap gap-[30px]">
						{marqueeImages.map((marqueeImage, index) => (
							<div key={index} className="flex items-center py-[37.43px]">
								<Image
									width={956}
									height={540}
									src={marqueeImage.image}
									alt={`Item ${index + 1}`}
									className="h-[160px] w-[328px] object-contain lg:h-[540px] lg:w-[956px]"
								/>
							</div>
						))}
					</div>
				</Marquee>
			</div>
			<div
				className="flex flex-col justify-center px-[16px] lg:mt-[65px] lg:flex-row lg:items-center
					lg:gap-[220px] lg:px-0"
			>
				<div>
					<p className="font-dm_sans text-[12px] text-primary lg:text-[20px]">
						Trusted by industry leaders and innovative brands.
					</p>
				</div>
				<div className="mt-[11px] flex items-center gap-[13.47px] lg:mt-0">
					<Button
						text="Interested in joining this list?"
						variant="secondary"
						className="px-[42.5px] py-[7px] font-dm_sans text-[10px] font-medium lg:px-[22px]
							lg:py-[10.5px] lg:text-[20px]"
					/>
					<Link href="https://wa.me/2347069917630" target="_blank">
						<Button
							withArrow
							variant="primary"
							text="Contact me"
							className="px-[14.9px] py-[7px] text-[10px] lg:px-[14.03px] lg:py-[13.5px]
								lg:text-[16px]"
						/>
					</Link>
				</div>
			</div>
		</>
	);
};

export default ClientScroll;
