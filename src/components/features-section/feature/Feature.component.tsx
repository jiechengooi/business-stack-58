import React from "react";
import { FeatureProp } from "../types/IFeature";

const Feature: React.FC<FeatureProp> = ({ number, title, desc }) => {
	return (
		<div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
			<div className="rounded-l-full bg-primary md:bg-transparent">
				<div className="flex items-center content-center space-x-2">
					<div className="px-4 py-2 text-white rounded-full md:py-1 bg-primary">
						{number}
					</div>
					<h3 className="text-base font-bold md:mb-4 md:hidden">{title}</h3>
				</div>
			</div>

			<div>
				<p className="">{desc}</p>
			</div>
		</div>
	);
};

export default Feature;
