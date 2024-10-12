import Image from "next/image";
import { GrDocumentDownload } from "react-icons/gr";

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
                

                <div className="space-y-2 md:space-y-0 md:space-x-5 mt-14 mb-5">
                    <button className="px-4 hover:bg-primaryHover  w-full md:w-auto    btn btn-md 2xl:btn-lg btn-outline text-primary "><GrDocumentDownload />
                    <span className="text-3xl">
                    </span>  Create New Announcement</button>
                    <button className="px-8 w-full md:w-auto hover:bg-primaryHover btn btn-md 2xl:btn-lg text-white bg-primary ">Reuse Past Announcement</button>
                </div>
            </div>

          
        </div>
        </div>
   </div>
  );
}
