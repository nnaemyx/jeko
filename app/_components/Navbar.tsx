"use client";

import Image from "next/image";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Logo from "/public/assests/JEKO LOGO2.png";
import Button from "@/constants/atoms/button";
import HamburgerIcon from "@/constants/icons/Hamburger";
import CloseIcon from "@/constants/icons/CloseIcon"; // You can add a close icon

const Navbar = () => {
	const router = useRouter();
	const pathname = usePathname();
	const [activeNav, setActiveNav] = useState(pathname);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const navItems = [
		{ label: "Home", path: "/" },
		{ label: "About Us", path: "/about" },
		{ label: "Contact Us", path: "/contact" },
	];

	const handleNavClick = (path: string) => {
		setActiveNav(path);
		router.push(path);
		setIsMobileMenuOpen(false);
	};

	const toggleMobileMenu = () => {
		console.log("Hamburger clicked"); // Debugging log
		setIsMobileMenuOpen((prev) => !prev);
	};

	return (
		<div className="mt-[36px] px-[16px] lg:mt-[60.5px] xl:px-[160px]">
			<div className="flex items-center justify-between">
				{/* Logo and Title */}
				<div className="flex items-center gap-[13px]">
					<Image
						src={Logo}
						alt="logo"
						className="h-[20px] w-[28.7px] lg:h-[27.51px] lg:w-[39.57px]"
					/>
					<h1 className="font-space_grotesk text-[12px] font-medium text-secondaryLight lg:text-[24px]">
						Jeffery Nwankwo .K.
					</h1>
				</div>

				{/* Desktop Navigation */}
				<div className="hidden items-center gap-[19px] lg:flex">
					<nav>
						<ul className="flex gap-[40px] font-dm_sans text-[20px] font-[400] text-primary">
							{navItems.map((item) => (
								<li
									key={item.label}
									className={`cursor-pointer ${
									activeNav === item.path ? "border-b-2 border-secondary" : "" }`}
									onClick={() => handleNavClick(item.path)}
								>
									{item.label}
								</li>
							))}
						</ul>
					</nav>
					<Button className="px-[21.03px]" text="View Portfolio" withArrow variant="primary" />
				</div>

				{/* Mobile Menu Button */}
				<div className="flex lg:hidden" onClick={toggleMobileMenu}>
					{isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
				</div>
			</div>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className="fixed inset-0 z-50 top-0 right-0 w-[212px] h-[305px] px-[29px] flex flex-col bg-white shadow-md">
					{/* Logo */}
					<div className="mt-[17px]">
						<Image
							src={Logo}
							alt="logo"
							className="h-[20px] w-[28.7px] lg:h-[27.51px] lg:w-[39.57px]"
						/>
					</div>

					{/* Navigation Links */}
					<nav
						className="mt-[29px] flex flex-col items-start gap-[36px] font-dm_sans text-[12px]
							font-[500] text-primary"
					>
						{navItems.map((item) => (
							<li
								key={item.label}
								className={`cursor-pointer list-none ${
								activeNav === item.path ? "border-b-2 border-secondary" : "" }`}
								onClick={() => handleNavClick(item.path)}
							>
								{item.label}
							</li>
						))}
					</nav>

					{/* View Portfolio Button */}
					<div className="mt-[26px]">
						<Button className="px-[21.03px] text-[10px]" text="View Portfolio" withArrow variant="primary" />
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
