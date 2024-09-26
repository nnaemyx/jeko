import Button from "@/constants/atoms/button";
import MessageIcon from "@/constants/icons/MessageIcon";
import PhoneIcon from "@/constants/icons/PhoneIcon";
import React from "react";

const Contact = () => {
	return (
		<div className="mt-[39px] px-[17px]">
			<div className="flex lg:flex-row flex-col">
				<div>
					<h2 className="font-dm_sans text-[20px] font-medium">
						Have an awesome Project Idea/Startup?
					</h2>
					<h2 className="mt-[8px] text-[32px] font-bold font-space_grotesk">Reach out to me.</h2>
					<div className="font-dm_sans text-[16px] font-medium space-y-[10px]">
						<div className="flex items-center gap-[7px]">
							<MessageIcon />
							<p>: cd.jeko.co@gmail.com</p>
						</div>
						<div className="flex items-center gap-[7px]">
							<PhoneIcon />
							<p>: +234 70-6991-7630</p>
						</div>
					</div>
                    <div className="mt-[14px] flex gap-[20px] font-dm_sans font-medium text-[16px] text-secondary">
                        <p>Instagram</p>
                        <p>Twitter</p>
                        <p>WhatsApp</p>
                        <p>LinkedIn</p>
                    </div>
				</div>
				<div className="mt-[10px]">
					<form className="bg-[#68686833]/20 h-[238px] rounded-[32px]" >

					</form>
					<div className="flex items-center gap-[13.47px] mt-[28px] mb-[25px] lg:mt-0">
                    <Button text="See you on the other side" variant="secondary" className="px-[42.5px] py-[7px] text-[10px] lg:px-[22px] lg:py-[10.5px] lg:text-[20px] font-dm_sans font-medium"/>
                    <Button  variant="primary" text="Submit" className="lg:py-[13.5px] lg:px-[14.03px] px-[34.5px] py-[7px] text-[10px] lg:text-[16px]"/>
                </div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
