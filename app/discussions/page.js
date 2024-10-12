"use client"
import React from 'react';
import { GrDocumentDownload } from "react-icons/gr";
import { FiExternalLink } from "react-icons/fi";
import { GoKebabHorizontal } from "react-icons/go";
import Pagination from '../Components/Pagination';

const discussions = () => {

    return (

        <div className="">
            <div>
                <div className="m-5  border">
                    <div className="flex border items-center justify-between p-4" >
                        <h1 className="text-lg md:text-xl 2xl:text-2xl font-medium ">Discussion Topics
                        </h1>

                    </div>


                    <div className="p-5  ">
                        <h1 className="text-lg md:text-xl 2xl:text-2xl font-medium "> You can add discussion topics below to allow your attendees to participate and engage on the Orbit App Community Board.

                        </h1>

                        <h1 className="text-lg my-10 md:text-2xl 2xl:text-[28px] 2xl:leading-8 font-semibold "> Need ideas? Create new discussion topics, reuse from previous events, or create from examples from the community of
                            Orbit Organizers.

                        </h1>


                        <div className="space-y-2 mx-5 md:space-y-0 md:space-x-5  mb-5">
                            <button className="px-8 w-full md:w-auto hover:bg-primaryHover btn btn-md 2xl:btn-lg text-white bg-primary "><GrDocumentDownload />
                                <span className="text-3xl">
                                </span>  Create Topic</button>
                            <button className="px-4 hover:bg-primaryHover  w-full md:w-auto    btn btn-md 2xl:btn-lg btn-outline text-primary "><FiExternalLink />
                                <span className="text-3xl">
                                </span> Reuse Past Topic</button>

                        </div>
                    </div>
                    <div className="overflow-x-auto md:overflow-hidden">
                        <div className="border  mx-5 md:mx-0 m-5 min-w-[500px] text-sm md:text-base my-5">

                            {/* Table header */}
                            <div className="grid pl-4 w-full bg-base-200 text-md 2xl:text-xl font-medium grid-cols-7 py-5">
                                <h1 className="p-2 md:col-span-6  col-span-5 border-r-4">Topic</h1>
                                <h1 className="p-2 md:col-span-1 col-span-2 text-center">Action</h1>
                            </div>

                            {/* Table body */}
                            <div className="grid pl-4 font-medium border text-md 2xl:text-xl grid-cols-7 py-5">
                                <h1 className="p-2 col-span-5 md:col-span-6 text-primary font-medium">
                                    Delay in Plenary Session - 8th March
                                </h1>
                                <h1 className="p-2 col-span-2 md:col-span-1 space-x-4 text-primary text-center">
                                    <span className="cursor-pointer hover:underline">Edit</span>
                                    <span className="cursor-pointer hover:underline">Delete</span>
                                </h1>
                            </div>

                            {/* Pagination and entries info */}
                            <div className="flex flex-col gap-4 justify-between items-center p-5 lg:flex-row font-medium text-base text-black/60">
                                <p className="mb-2 md:mb-0">Showing 1 to 10 of 100 entries</p>
                                <Pagination />
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>

    );
};

export default discussions;