import React, { useRef, useEffect } from "react";
import { ITestimonial } from "../types/ITestimonial";

function Testimonial({
	testimonialData,
	index,
}: {
	testimonialData: ITestimonial;
	index: number;
}) {
	const ref: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const element = ref.current;

		if (index !== 0) {
			element!.className += " hidden md:flex ";
		} else {
			element!.className += " flex md:flex ";
		}
	}, []);

	return (
		<div
			ref={ref}
			className="flex-col items-center p-6 space-y-6 rounded-lg bg-base-200 md:w-1/3"
		>
			<img
				src={testimonialData.imgUrl}
				className="w-16 -mt-14"
				alt="profile-picture"
			/>
			<h5 className="text-lg font-bold">{testimonialData.name}</h5>
			<p className="text-sm">{testimonialData.description}</p>
		</div>
	);
}

export default Testimonial;
