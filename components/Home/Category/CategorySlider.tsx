"use client";
import { HotBidData } from "@/data/data";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HotBidCard from "../Hotbids/HotBidCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CategorySlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      responsive={responsive}
      infinite
      itemClass="item"
    >
        {HotBidData.map((data) => {
            return(
                <div key={data.id}>
                    <HotBidCard data={data} />
                </div>
            )
        })}
    </Carousel>
  );
};

export default CategorySlider;
