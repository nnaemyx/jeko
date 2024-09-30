import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "@/constants/atoms/button";
import MessageIcon from "@/constants/icons/MessageIcon";
import PhoneIcon from "@/constants/icons/PhoneIcon";

const Contact = () => {
	const form = useRef<HTMLFormElement | null>(null);

	// Function to send email
	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (form.current) {
			emailjs.sendForm("service_oso5i4l", "template_c3mv4z5", form.current, "0dSSTegr7n52Zy_k8").then(
				(result) => {
					console.log(result.text);
					alert("Message sent successfully!");
				},
				(error) => {
					console.log(error.text);
					alert("Failed to send message. Please try again.");
				}
			);

			e.currentTarget.reset();
		}
	};

	return (
		<div className="mt-[39px] px-[17px] lg:px-[115px] lg:pb-[71px]">
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
					<form
						ref={form}
						onSubmit={sendEmail}
						className="h-[278px] w-full space-y-[28.55px] rounded-[32px] bg-[#68686833]/20 px-[23px]
							py-[24px] font-dm_sans text-[#09444A] lg:h-[374px] lg:max-w-[475px] lg:space-y-[31px]
							lg:px-[47px] lg:pb-[32px] lg:pt-[21px]"
					>
						<div className="w-full">
							<p>Name</p>
							<input
								type="text"
								name="user_name"
								required
								className="w-full border-b border-solid border-[#09444A] bg-transparent
									focus:outline-none"
							/>
						</div>
						<div className="flex items-center gap-[12px]">
							<div>
								<p>Email</p>
								<input
									type="email"
									name="user_email"
									required
									className="w-full border-b border-solid border-[#09444A] bg-transparent
										focus:outline-none"
								/>
							</div>
							<div>
								<p>Phone</p>
								<input
									type="number"
									name="user_phone"
									className="w-full border-b border-solid border-[#09444A] bg-transparent
										focus:outline-none"
								/>
							</div>
						</div>
						<div>
							<p>Message</p>
							<textarea
								name="message"
								required
								className="w-full border-b border-solid border-[#09444A] bg-transparent
									focus:outline-none"
							/>
						</div>
						<div className="mt-[38px] hidden w-full items-center gap-[13.47px] pb-[32px] lg:flex">
							<Button
								text="See you on the other side"
								variant="secondary"
								className="px-[42.5px] py-[7px] font-dm_sans text-[10px] font-medium lg:px-[22px]
									lg:py-[12px] lg:text-[16px]"
							/>
							<Button
								variant="primary"
								text="Submit"
								type="submit"
								className="px-[34.5px] py-[7px] text-[10px] lg:px-[31.03px] lg:py-[14.5px]
									lg:text-[16px]"
							/>
						</div>
					</form>
					<div
						className="mb-[25px] mt-[28px] flex w-full items-center justify-center gap-[13.47px]
							lg:mt-0 lg:hidden"
					>
						<Button
							text="See you on the other side"
							variant="secondary"
							className="w-full max-w-[220px] px-[42.5px] py-[7px] text-center font-dm_sans
								text-[10px] font-medium lg:px-[22px] lg:py-[10.5px] lg:text-[20px]"
						/>
						<Button
							variant="primary"
							text="Submit"
							type="submit"
							className="w-full max-w-[103px] px-[34.5px] py-[7px] text-[10px] lg:px-[14.03px]
								lg:py-[13.5px] lg:text-[16px]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
