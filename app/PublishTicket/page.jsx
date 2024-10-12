import Image from 'next/image';
import React from 'react';
// import token from ""

const PublishTicket = () => {
    return (
        <div >
            <div className="m-5  border">
                <div className="flex border items-center justify-between p-6" >
                    <h1 className="text-lg md:text-xl 2xl:text-2xl font-medium ">Contact List Management </h1>
                </div>
                <h1 className="text-lg  p-6 py-10 md:text-xl 2xl:text-2xl font-medium "> Publish your tickets and registration pages specifically for your attendees, exhibitors and sponsors.
                </h1>

                <div className='grid p-5 md:p-10 grid-cols-1 lg:grid-cols-3 gap-5 2xl:gap-10'>
                    <div className="border text-center p-5 md:p-10 rounded-lg space-y-5">
                       
                        <div className='w-full h-[300px] flex justify-center items-center'>
                            <div className='w-32 h-32 bg-base-200 rounded-full flex justify-center items-center'>
                                <Image width={100} height={50} src="/Images/token.png" ></Image>
                            </div>
                        </div>

                        <h1 className="text-lg md:text-xl 2xl:text-2xl font-medium ">Attendee Registration </h1>
                        <p className='text-lg  2xl:text-xl font-medium text-black/60'>This will publish all your attendee ticket and attendee registration page</p>
                        <button className='btn btn-lg btn-outline w-full text-primary'>Manage</button>

                    </div>
                    <div className="border text-center p-5 md:p-10 rounded-lg space-y-5">
                       
                        <div className='w-full h-[300px] flex justify-center items-center'>
                            <div className='w-32 h-32 bg-base-200 rounded-full flex justify-center items-center'>
                                <Image width={100} height={50} src="/Images/Exhibitor.png" ></Image>
                            </div>
                        </div>

                        <h1 className="text-lg md:text-xl 2xl:text-2xl font-medium "> Exhibitor registration                        </h1>
                        <p className='text-lg  2xl:text-xl font-medium text-black/60'>This will publish all your exhibitor ticket and exhibitor registration page</p>
                        <button className='btn btn-outline btn-lg w-full text-primary'>Manage</button>

                    </div>
                    <div className="border text-center p-5 md:p-10 rounded-lg space-y-5">
                       
                        <div className='w-full h-[300px] flex justify-center items-center'>
                            <div className='w-32 h-32 bg-base-200 rounded-full flex justify-center items-center'>
                                <Image width={100} height={50} src="/Images/Sponsor.png" ></Image>
                            </div>
                        </div>

                        <h1 className="text-lg md:text-xl 2xl:text-2xl font-medium "> Sponsor Registration </h1>
                        <p className='text-lg  2xl:text-xl font-medium text-black/60'>This will publish all your sponsor ticket and sponsor registration page</p>
                        <button className='btn btn-outline btn-lg w-full text-primary'>Manage</button>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default PublishTicket;