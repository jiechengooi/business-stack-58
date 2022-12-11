import React from "react";
import Feature from "./feature/Feature.component";
import { FeatureProp } from "./types/IFeature";

const Features = () => {
	const feature = () => {
		const data: FeatureProp[] = [
			{
				number: "01- Refundable condition ",
				title: "Valid within 14 days upon your purchased arrival",
				desc: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
			},
			{
				number: "02- Late delivery",
				title: "Eligable to 10% discount for next purchase",
				desc: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
			},
			{
				number: "03- Voucher and reward",
				title: "Valid to claim full amount within a year",
				desc: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
			},
		];

		return data;
	};

	return (
		<div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
			<div className="flex flex-col space-y-12 md:w-1/2">
				<h2 className="max-w-md text-4xl font-bold text-center md:text-left">
					Our Business Policy
				</h2>
				{/* <p className="max-w-sm text-center md:text-left"> */}
				<p className="max-w-sm text-center md:text-center">
					We cares about our customer satisfaction Upon every purchased.Please refer to our stated term and policy below.
				</p>
			</div>
			<div className="flex flex-col space-y-8 md:w-1/2">
				{feature().map((feature: FeatureProp, index: number) => (
					<Feature
						key={index}
						number={feature.number}
						title={feature.title}
						desc={feature.desc}
					/>
				))}
			</div>
		</div>
	);
};

export default Features;
