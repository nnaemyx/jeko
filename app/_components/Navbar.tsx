"use client"

import Image from "next/image";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Logo from "/public/assests/JEKO LOGO2.png";
import Button from "@/constants/atoms/button";
import HamburgerIcon from "@/constants/icons/Hamburger";

const Navbar = () => {
    const router = useRouter()
	const pathname =usePathname();
	const [activeNav, setActiveNav] = useState(pathname); 
	const navItems = [
		{ label: "Home", path: "/" },
		{ label: "About Us", path: "/about" },
		{ label: "Contact Us", path: "/contact" },
	];

	const handleNavClick = (path: string) => {
		setActiveNav(path);
		router.push(path); 
	};

	return (
		<div className="lg:mt-[60.5px] mt-[36px] xl:px-[160px] px-[16px]">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-[13px]">
					<Image src={Logo} alt="logo" className="w-[28.7px] h-[20px] lg:w-[39.57px] lg:h-[27.51px]" />
					<h1 className="text-secondaryLight font-space_grotesk text-[12px] lg:text-[24px] font-medium">
						Jeffery Nwankwo .K.
					</h1>
				</div>
				<div>
					<nav className="lg:flex items-center gap-[19px] hidden">
						<ul className="font-dm_sans text-primary flex gap-[40px] text-[20px] font-[400]">
							{navItems.map((item) => (
								<li
									key={item.label}
									className={`cursor-pointer ${
									activeNav === item.path ? "border-secondary border-b-2" : "" }`}
									onClick={() => handleNavClick(item.path)}
								>
									{item.label}
								</li>
							))}
						</ul>
						<Button className="px-[21.03px]" text="View Portfolio" withArrow variant="primary" />
					</nav>
                    <div className="lg:hidden flex">
                        <HamburgerIcon/>
                    </div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
