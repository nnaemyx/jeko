import Button from "@/constants/atoms/button";
import MessageIcon from "@/constants/icons/MessageIcon";
import PhoneIcon from "@/constants/icons/PhoneIcon";
import React from "react";

const Contact = () => {
	return (
		<div className="mt-[39px] px-[17px] lg:pb-[71px] lg:px-[115px]">
			<div className="flex flex-col lg:flex-row lg:justify-between">
				<div>
					<h2 className="font-dm_sans text-[20px] font-medium lg:text-[32px]">
						Have an awesome Project Idea/Startup?
					</h2>
					<h2 className="mt-[8px] font-space_grotesk text-[32px] font-bold lg:text-[64px]">
						Reach out to me.
					</h2>
					<div className="space-y-[10px] font-dm_sans text-[16px] font-medium lg:text-[24px]">
						<div className="flex items-center gap-[7px]">
							<MessageIcon />
							<p>: cd.jeko.co@gmail.com</p>
						</div>
						<div className="flex items-center gap-[7px]">
							<PhoneIcon />
							<p>: +234 70-6991-7630</p>
						</div>
					</div>
					<div
						className="mt-[14px] flex gap-[20px] font-dm_sans text-[16px] font-medium text-secondary
							lg:text-[24px]"
					>
						<p>Instagram</p>
						<p>Twitter</p>
						<p>WhatsApp</p>
						<p>LinkedIn</p>
					</div>
				</div>
				<div className="mt-[10px] lg:mt-0">
					<form className="h-[278px] lg:px-[47px] px-[23px] py-[24px] lg:pt-[21px] lg:pb-[32px] rounded-[32px] bg-[#68686833]/20 lg:h-[374px] lg:max-w-[475px] font-dm_sans lg:space-y-[31px] space-y-[28.55px] w-full text-[#09444A]">
					<div className="w-full">
						<p>Name</p>
						<input type="text" className="w-full border-b focus:outline-none bg-transparent border-[#09444A] border-solid" />
					</div>
					<div className="flex items-center gap-[12px]">
						<div>
							<p>Email</p>
							<input type="email" name="" id="" className="w-full border-b focus:outline-none bg-transparent border-[#09444A] border-solid" />
						</div>
						<div>
							<p>Phone</p>
							<input type="number" className=" border-b focus:outline-none bg-transparent border-[#09444A] border-solid" />
						</div>
					</div>
					<div>
						<p>Message</p>
						<textarea name="" id="" className="w-full border-b focus:outline-none bg-transparent border-[#09444A] border-solid"/>
					</div>
					<div className="hidden mt-[38px] pb-[32px] w-full lg:flex items-center gap-[13.47px]">
						<Button
							text="See you on the other side"
							variant="secondary"
							className="px-[42.5px] py-[7px] font-dm_sans text-[10px] font-medium lg:px-[22px]
								lg:py-[12px] lg:text-[16px]"
						/>
						<Button
							variant="primary"
							text="Submit"
							className="px-[34.5px] py-[7px] text-[10px] lg:px-[31.03px] lg:py-[14.5px]
								lg:text-[16px]"
						/>
					</div>
					</form>
					<div className="mb-[25px] lg:hidden mt-[28px] w-full justify-center flex items-center gap-[13.47px] lg:mt-0">
						<Button
							text="See you on the other side"
							variant="secondary"
							className="px-[42.5px] py-[7px] font-dm_sans text-[10px] max-w-[220px] w-full text-center font-medium lg:px-[22px]
								lg:py-[10.5px] lg:text-[20px]"
						/>
						<Button
							variant="primary"
							text="Submit"
							className="px-[34.5px] py-[7px] text-[10px] lg:px-[14.03px] max-w-[103px] w-full lg:py-[13.5px]
								lg:text-[16px]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
