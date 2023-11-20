"use client";
import React, { useState } from "react";
import MenuBlocks from "./MenuBlocks";
import Image from "next/image";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import PhoneIcon from "@mui/icons-material/Phone";
export const menuBlockData = [
	{
		title: "Become a member",
		sunbTitle: "Additional 10% of on stays",
		icon: <PersonIcon />,
	},
	{
		title: "Oyo for business",
		sunbTitle: "trusted by 5000 corporate",
		icon: <WorkIcon />,
	},
	{
		title: "list your propery",
		sunbTitle: "start earning in 30 mins",
		icon: <CorporateFareIcon />,
	},
	{
		title: "0124-6201611",
		sunbTitle: "call us to book now",
		icon: <PhoneIcon />,
	},
];

const HeaderOne = () => {
	return (
		<>
			<div className="flex justify-between px-10 ">
				<div className="w-[10%] ">
					<Image
						src="./images/oyo_logo.svg"
						width={200}
						height={200}
						alt="logo"
					/>
				</div>
				<div className="w-[85%] flex items-center justify-between">
					{menuBlockData?.length > 0 &&
						menuBlockData.map((item, index) => {
							return (
								<>
									<MenuBlocks
										title={item.title}
										subTitle={item.sunbTitle}
										icon={item.icon}
									/>
								</>
							);
						})}
					<div className="font-[600] text-[20px] ">English</div>
					<div className="flex font-[400] text-[18px] ">
						<PersonIcon />
						<div>Login /</div>
						<div>Signup</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeaderOne;
