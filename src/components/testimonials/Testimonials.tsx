import React from "react";
import Testimonial from "./testimonial/testimonial.component";
import { ITestimonial } from "./types/ITestimonial";

const Testimonials = () => {
	const getTestimonials = (): ITestimonial[] => {
		const testimonials: ITestimonial[] = [
			{
				id: 1,
				name: "Rachel Kirkman",
				description:
					"“Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
				imgUrl:
					"https://github.com/bradtraversy/tailwind-landing-page/blob/main/img/avatar-anisha.png?raw=true",
			},
			{
				id: 2,
				name: "Ellie Kirkman",
				description:
					"“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
				imgUrl:
					"https://github.com/bradtraversy/tailwind-landing-page/blob/main/img/avatar-shanai.png?raw=true",
			},
			{
				id: 3,
				name: "Dhian Bains",
				description:
					"“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
				imgUrl:
					"https://github.com/bradtraversy/tailwind-landing-page/blob/main/img/avatar-richard.png?raw=true",
			},
		];

		return testimonials;
	};

	return (
		<div className="max-w-6xl px-5 mx-auto mt-32 text-center">
			<h2 className="text-4xl font-bold text-center">
				Client Testimonials
			</h2>
			<div className="flex flex-col mt-24 md:flex-row md:space-x-6">
				{getTestimonials().map((testimonial: ITestimonial, index: number) => (
					<Testimonial
						key={index}
						testimonialData={testimonial}
						index={index}
					/>
				))}
			</div>
		</div>
	);
};

export default Testimonials;
