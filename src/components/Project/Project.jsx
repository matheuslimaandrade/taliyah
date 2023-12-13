import React from "react";
import { Separator } from "../Separator/Separator";

export function Project() {
  return (
    <>
        <div className="px-96 py-6">

        <div className="border-box border-2  rounded-xl">
          <div className="">
            <p className=" flex flex-col px-8 text-xl py-4  font-semibold">
              Taliyah <br />
              <span className="text-sm font-light">Portfolio Website</span>
            </p>
            <hr className="w-full" />
          </div>

          <div>
            <img src="./src/assets/images/profilegithub.jpg" alt="" className="w-full h-72"/>
          </div>

          <Separator />
          <div className="flex px-4 justify-center py-2">
            <button className="bg-green-500 rounded-md text-white font-semibold px-6 py-2 m-2 box-border border-2">
              View
            </button>
            <button className="bg-green-200 rounded-md font-semibold px-6 py-1 m-2 box-border border-2">
              Code
            </button>
          </div>
        </div>
        </div>
    </>
  );
}
