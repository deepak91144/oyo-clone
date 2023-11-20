import { menuBlockType } from "@/app/types";
import React from "react";

const MenuBlocks = ({ title, subTitle, icon }: menuBlockType) => {
	return (
		<div className="flex ">
			<div>{icon}</div>
			<div className="ml-5">
				<div className="font-[400] text-[18px] capitalize ">{title}</div>
				<div className="font-[300] text-gray-400  text-[16px]">{subTitle}</div>
			</div>
		</div>
	);
};

export default MenuBlocks;
