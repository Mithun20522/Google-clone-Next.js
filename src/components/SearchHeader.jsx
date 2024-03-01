import React from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBox from "./SearchBox";
import {RiSettings3Line} from 'react-icons/ri'
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";

const SearchHeader = () => {
  return (
    <header className="stikcy top-0 bg-white">
      <div className="flex w-full p-6 items-center justify-between">
        <Link href={"/"}>
          <Image
            src="https://logos-world.net/wp-content/uploads/2020/09/Google-Logo-2015-present.jpg"
            alt="logo"
            style={{ width: "auto" }}
            width={120}
            height={40}
          />
        </Link>
        <div className='flex-1'>
          <SearchBox/>
        </div>
        <div className='hidden md:inline-flex space-x-2'>
            <RiSettings3Line className="bg=transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer"/>
            <TbGridDots className="bg=transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer"/>
        </div>
        <button className="ml-2 px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow bg-blue-500 text-sm text-white">Sign in</button>
      </div>
      <SearchHeaderOptions/>
    </header>
  );
};

export default SearchHeader;
