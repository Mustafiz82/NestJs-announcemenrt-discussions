"use client"
import Image from "next/image";
import { GrDocumentDownload } from "react-icons/gr";
import { FiExternalLink } from "react-icons/fi";
import { GoKebabHorizontal } from "react-icons/go";
import Pagination from "./Components/Pagination";

export default function Home() {

    



    return (
        <div className="">
            <div>
                <div className="m-5  border">
                    <div className="flex border items-center justify-between p-4" >
                        <h1 className="text-lg md:text-xl 2xl:text-2xl font-medium ">Contact List Management </h1>
                        <button className="px-4 btn text-white btn-md 2xl:btn-lg hover:bg-primaryHover bg-primary ">See Example</button>
                    </div>

                    <div className="p-5 md:p-10">


                        <div className="space-y-2 md:space-y-0 md:space-x-5  mb-5">
                            <button className="px-8 w-full md:w-auto hover:bg-primaryHover btn btn-md 2xl:btn-lg text-white bg-primary "><GrDocumentDownload />
                                <span className="text-3xl">
                                </span>  Create New Announcement</button>
                            <button className="px-4 hover:bg-primaryHover  w-full md:w-auto    btn btn-md 2xl:btn-lg btn-outline text-primary "><FiExternalLink />
                                <span className="text-3xl">
                                </span> Reuse Past Announcement</button>

                        </div>
                    </div>

                    <div className="overflow-x-auto md:overflow-hidden">
  <div className="border m-5 min-w-[500px] text-sm md:text-base my-5">

    {/* Table header */}
    <div className="grid w-full bg-base-200 text-md 2xl:text-xl font-medium grid-cols-8 py-5">
      <h1 className="p-2 col-span-2 border-r-4 pl-4">Subject</h1>
      <h1 className="p-2 col-span-2 border-r-4 text-center">Send to</h1>
      <h1 className="p-2 col-span-3 text-center">Time sent</h1>
    </div>

    {/* Table body */}
    <div className="grid font-medium border text-md 2xl:text-xl grid-cols-8 py-5">
      <h1 className="p-2 col-span-2 pl-4 text-primary font-medium">Delay in Plenary Session - 8th March</h1>
      <h1 className="p-2 col-span-2 text-center">All Attendees</h1>
      <h1 className="p-2 col-span-3 text-center">Mar 7, 2022, 9:00 – 10:30 AM</h1>
      <div className="flex justify-end">
        <button className="btn px-2 mr-5">
          <GoKebabHorizontal className="text-xl rotate-90 font-semibold"></GoKebabHorizontal>
        </button>
      </div>
    </div>

    {/* Pagination and entries info */}
    <div className="flex flex-col gap-4 justify-between items-center p-5 lg:flex-row font-medium text-base text-black/60">
      <p className="mb-2 lg:mb-0">Showing 1 out of 100 items</p>
      <Pagination></Pagination>
    </div>
  </div>
</div>



                </div>
            </div>
        </div>
    );
}
