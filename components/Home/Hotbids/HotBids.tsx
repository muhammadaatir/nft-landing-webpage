import React from "react";
import HotBidCard from "./HotBidCard";
import { HotBidData } from "@/data/data";

const HotBids = () => {
  return (
    <div className="pt-16 pb-12">
      <h1 className="text-center font-bold text-3xl p-2 md:text-4xl text-blue-950 ">
        Hot Bids
      </h1>
      <div className="w-4/5 mt-0 md:mt-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {HotBidData.map((data, i) => {
          return (
            <div
              key={data.id}
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 200}`}
            >
              <HotBidCard data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HotBids;
