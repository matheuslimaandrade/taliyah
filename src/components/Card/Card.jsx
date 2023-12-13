import React from "react";
import { Separator } from "../Separator/Separator";

export function Card() {
  return (
    <>
      <div className="py-12 px-96">
        <div className="border-box border-2 rounded-xl py-2 w-2/4">
          <div>
            <p className="px-8 text-xl py-4">
              Blogs <br />
              <span className="text-sm">My latest blogs</span>
            </p>
            <hr className="w-full" />
          </div>

          <p className="flex px-8">
            <img src="./src/assets/images/github.svg" alt="" width={24} />
            <p className="m-4">How to setup a git repository in a project</p>
          </p>
          <Separator />
          <p className="flex px-8">
            <img src="./src/assets/images/github.svg" alt="" width={24} />
            <p className="m-4">How to setup a git repository in a project</p>
          </p>
          <Separator />
          <div className="flex justify-center items-center py-4">
            View all posts...
          </div>
        </div>
      </div>
    </>
  );
}
