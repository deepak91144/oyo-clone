"use client";
import { citiesInHeader } from "@/app/constants";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SelectBoxDataCon from "./SelectBoxDataCon";
const HeaderTwo = () => {
	const [showSelectBoxData, setshowSelectBoxData] = useState(false);
	return (
		<>
			<div className="flex px-20 justify-between  ">
				{citiesInHeader?.length > 0 &&
					citiesInHeader.map((ele, ind) => {
						return (
							<>
								<div className="flex cursor-pointer ">
									<div className="capitalize">{ele.name}</div>
									<div
										className={`${
											ind === citiesInHeader.length - 1 ? "hidden" : ""
										} `}
									>
										<KeyboardArrowDownIcon
											className="arrowIcon"
											onMouseEnter={() => {
												setshowSelectBoxData(true);
											}}
										/>
									</div>
								</div>
							</>
						);
					})}
				{showSelectBoxData && <SelectBoxDataCon />}
			</div>
		</>
	);
};

export default HeaderTwo;
