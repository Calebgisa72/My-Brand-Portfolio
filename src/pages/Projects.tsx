import React from "react";
import projectImage from "../../Images/unsplash_9anj7QWy-2g2.svg";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex w-full items-center justify-between shadow-sm pb-3">
        <p className="text-xl ">My Projects</p>
        <button className="bg-foreground hover:bg-primary hover:text-foreground text-background px-4 py-2 rounded-xl">
          Add New Project
        </button>
      </div>
      <div className="flex flex-col xsm:flex-row xmd:flex-col gap-3 xmd:gap-0 xmd:space-y-5 gap-x-2 xsm:flex-wrap xmd:flex-nowrap pace-y-10 shadow-sm overflow-y-auto h-[calc(100vh-186px)] ">
        <div className="px-2 py-2 gap-5 w-full xsm:w-[48%] lg:gap-10 justify-between items-center flex flex-col xmd:flex-row xmd:w-full border-[1px] border-neutral-400 rounded-2xl shadow-sm">
          <div className="block xmd:flex flex-col items-center m-0 p-0 gap-1">
            <div className="overflow-hidden rounded-xl w-48 xmd:w-40 lg:w-48 h-28">
              <img
                className="w-full h-full object-cover"
                src={projectImage}
                alt=""
              />
            </div>
            <p className="text-gray-500 text-[12px] m-0 p-0">14-03-2025</p>
          </div>
          <div className="flex flex-col gap-2 w-full items-center xmd:items-start text-center xmd:text-start">
            <p className="font-bold text-lg text-wrap">
              Cristiano Ronaldo Wins Ballon d'Or
            </p>
            <p className="text-description text-[14px] text-wrap w-full">
              Football icon Cristiano Ronaldo secures another Ballon d'Or,
              reaffirming his legendary status in the sport.
            </p>
            <p className="text-description text-[14px] w-full text-wrap">
              Tech: React, Node.js, Next.js, Typescript, Tailwindcss
            </p>
            <p className="text-description text-[14px] flex gap-1 text-wrap">
              Link:{" "}
              <Link
                to={"https://web.facebook.com/"}
                className="hover:underline justify-start text-secondary-muted"
              >
                https://web.facebook.com/
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <button className="px-6 py-2 bg-primary hover:bg-blue-400 rounded-[8px]">
              Edit
            </button>
            <button className="px-6 py-2 bg-card hover:bg-destructive rounded-[8px]">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
