import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

// Dummy review data
const reviews = [
  {
    image: "/path/to/reviewer1.jpg", // Replace with actual image path
    name: "Mr Elvis Alakija",
    title: "CEO, July Drama Logistics",
    review:
      "Jeff's ability to create compelling designs with minimal information is truly impressive. He has a knack for understanding the essence of a brand and translating it into visually appealing materials. The flyers he designed for our company were not only eye-catching but also effective in conveying our message. I highly recommend Jeff to anyone in need of a talented and efficient digital designer",
  },
  {
    image: "/path/to/reviewer2.jpg",
    name: "Charles-Mary .C.",
    title: "CEO PrinceWisdom MC services",
    review:
      "Working with Jeff was a transformative experience for my brand. From the very beginning, He took the time to understand our unique needs and goals, and his creativity brought our vision to life in ways I couldn’t have imagined. The design process was collaborative and smooth, and the final product was stunning.",
  },
  {
    image: "/path/to/reviewer2.jpg",
    name: "Angela Queen",
    title: "CEO New Era Groceries Store",
    review:
      "As a busy CEO, I don't have time to micromanage every detail of a project. That's why I was so impressed with Jeko Design Studio. They not only understood my vision but also took the initiative to ensure that every aspect of the design was executed flawlessly. Their attention to detail and commitment to quality were truly exceptional. I'm so grateful for their work.",
  },
];

const Reviews = () => {
  return (
    <div className="h-full max-h-[566px] rounded-[32px] bg-primary py-8">
      <div className="flex lg:flex-row flex-col lg:items-center justify-between px-[17px] text-white lg:px-[160px]">
        <h2 className="font-space_grotesk text-[32px] font-bold lg:text-[64px]">Reviews.</h2>
        <p className="font-dm_sans font-medium text-[18px] lg:text-[32px]">
          Testimonials that speak to my results
        </p>
      </div>

      <div className="lg:mb-[120px] lg:mt-[56px] mt-[9px]">
        {/* Marquee Slider */}
        <Marquee
          pauseOnHover={true}
          speed={50}
          delay={50}
        >
          <div className="flex gap-[30px]">
            {reviews.map((review, index) => (
              <div className="flex gap-[20px]" key={index}>
                <div
                  className="flex lg:w-[550px] w-[328px]  flex-col rounded-[32px] border-2
                    border-solid bg-[#68686833] mr-3 lg:px-[33px] px-[21.3px] py-[21px] text-white"
                >
                  <div className="flex gap-[12.98px]">
                    <div className="border border-solid rounded-full size-[47px]"></div>
                    <div>
                      <p className="font-dm_sans text-[12px] lg:text-[16px] font-medium">
                        {review.title}
                      </p>
                      <h3 className="font-dm_sans text-[16px] lg:text-[24px] font-bold">
                        {review.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex gap-[21.12px] lg:mt-[16px]">
                    <p className="font-space_grotesk text-[96px] text-secondary">
                      "
                    </p>
                    <p className="font-dm_sans text-[12px] lg:text-[16px] font-light">
                      “{review.review}”
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Reviews;
