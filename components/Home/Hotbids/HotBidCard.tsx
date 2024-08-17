"use client";
import Image from "next/image";
import React from "react";
import { BiHeart } from "react-icons/bi";
import Tilt from "react-parallax-tilt";

type Props = {
  data: {
    id: number;
    image: string;
    name: string;
    eth: number;
    currentBid: number;
    love: number;
  };
};

const HotBidCard = ({ data }: Props) => {
  return (
    <Tilt>
      <div className="rounded-lg border-2 cursor-pointer border-gray-300 border-opacity-30 p-6">
        <div className="w-full h-[180px]">
          <Image src={data.image} alt={data.name} width={300} height={200} className="w-full h-full object-cover" />
        </div>
        <div>
            <div className="flex mt-6 items-center justify-between">
                <h1 className="text-blue-950 hover:text-blue-700 traansition-all duration-200 text-base font-bold">
                    {data.name}
                </h1>
                <span className="px-2 py-1 border-[1px] rounded-md border-gray-500 text-xs text-green-700 font-bold">
                    {data.eth} ETH
                </span>
            </div>
            <p className="my-2 text-gray-700">
                Current Bids <span className="text-yellow-500">{data.currentBid}</span> ETH
            </p>
            <div className="flex items-center justify-between mt-4">
                <h1 className="text-indigo-900 text-sm font-bold">Please Bid</h1>
                <div className="flex items-center text-gray-500 space-x-2">
                    <BiHeart />
                    <span className="text-sm">{data.love}</span>
                </div>
            </div>
        </div>
      </div>
    </Tilt>
  );
};

export default HotBidCard;
