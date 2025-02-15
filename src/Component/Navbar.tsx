import React, { useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";

import { Button } from "../components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog"
interface NavbarProps{
  Username:string
}
const Navbar:React.FC <NavbarProps>= ({Username}) => {
  const [value,setvalue]=useState<string>('')
  return (
    <div className="fixed top-0 bg-white z-10 flex w-[80%] px-[24px] py-[6px] left-[20%] items-center justify-between  ">
      <p className="text-[#727983] font-medium font-montserrat text-[12px] sm:hidden lg:block">
        School Management System V 1.0
      </p>
      <div className="flex items-center gap-4">
      <div className="flex relative ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="42"
          viewBox="0 0 53 52"
          fill="none"
          className="relative bottom-[1px] sm:hidden lg:block"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.5 1H49.5H51.5H52.5V0H51.5H26.5C12.1406 0 0.5 11.6406 0.5 26C0.5 40.3594 12.1406 52 26.5 52C40.8594 52 52.5 40.3594 52.5 26V11H51.5V26C51.5 39.8071 40.3071 51 26.5 51C12.6929 51 1.5 39.8071 1.5 26C1.5 12.1929 12.6929 1 26.5 1Z"
            fill="#1A55A5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          className="absolute top-2 left-2 sm:hidden lg:block"
        >
          <path
            d="M10.5 17C14.366 17 17.5 13.866 17.5 10C17.5 6.13401 14.366 3 10.5 3C6.63401 3 3.5 6.13401 3.5 10C3.5 13.866 6.63401 17 10.5 17Z"
            stroke="#1A55A5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.5 15L21.5 21"
            stroke="#1A55A5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <input
          type="text"
          placeholder="Search..."
          value={value}
          className="w-[180px] relative text-[#CACEDC] text-[15px] px-2  focus:outline-none  h-[41px] border-r-[1.33px] border-[#1A55A5] rounded-r-[100px] border-t-[1.33px] border-b-[1.33px] top-[0.9px] sm:hidden lg:block"
          onChange={(e)=>{setvalue(e.target.value)}}
        />
       
      </div>
      <p className="text-[#727983] text-[12px] font-montserrat font-[500] lg:block sm:hidden">Last Login:19:00:00 12/02/2024</p>
      <div className="flex gap-3"><IoIosNotifications size={18} className="hidden lg:block" />
      <IoSettings size={18} className="hidden lg:block" />
      </div>
      <div className="flex items-center gap-2">
       
       
      <Dialog >
      <DialogTrigger asChild>
        <Button variant={"left"}><img src='https://i.pinimg.com/474x/8d/62/f5/8d62f5e9a33ced9f615da03f989c9d11.jpg' width={'30px'} height={'10px'} className="rounded-[50%] sm:absolute sm:right-3 lg:relative"/>
         <p className="text-[12px] sm:hidden lg:block">{Username}</p>
         <IoIosArrowDown/></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex flex-col justify-center items-center">
        <img src='https://i.pinimg.com/474x/8d/62/f5/8d62f5e9a33ced9f615da03f989c9d11.jpg' width={'90px'} height={'10px'} className="rounded-[50%]"/>
          <DialogTitle>{Username}</DialogTitle>
          <DialogDescription className="text-blue-600 cursor-pointer">
           View/Edit Profile
          </DialogDescription>
        </DialogHeader>
       
        <DialogFooter className="border-t-[1px] py-2">
          <Button className="w-[50%]" type="submit" variant={'outline'}>Login</Button>
          <Button className="w-[50%]"type="submit" variant={'outline'}><IoExitOutline size={24} className="text-red-600"/>Logout</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
      </div>
      </div>
     
     
    </div>
   
  );
};

export default Navbar;
