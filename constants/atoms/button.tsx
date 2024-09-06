import React from "react";
import ArrowButtonIcon from "../icons/ArrowButton";

interface ButtonProps {
	text: string;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	variant?: "primary" | "secondary";
	disabled?: boolean;
	withArrow?: boolean; 
	className?: string;
}

const Button: React.FC<ButtonProps> = ({
	text,
	onClick,
	type = "button",
	variant = "primary",
	disabled = false,
	withArrow = false, 
	className = "",
}) => {
	const baseStyles =
		"flex items-center font-medium font-dm_sans  focus:outline-none transition duration-200 ease-in-out";

	// Define different styles for primary and secondary variants
	const variantStyles =
		variant === "primary"
			? "bg-secondary text-white hover:bg-primary rounded-r-[16px] h-[36px] lg:h-[47px]"
			: "bg-secondaryLight text-secondary h-[36px] lg:h-[47px]";

	// Add disabled styles
	const disabledStyles = disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer";

	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`${baseStyles} ${variantStyles} ${disabledStyles} ${className}`}
		>
			<span>{text}</span>
			{withArrow && <ArrowButtonIcon className="size-[16px] lg:size-[24px]" />}
		</button>
	);
};

export default Button;
