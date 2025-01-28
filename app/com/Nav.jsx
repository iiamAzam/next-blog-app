"use client"
import React, { use, useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import LoadingBar from 'react-top-loading-bar';
import { usePathname } from 'next/navigation';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from './Thmbts';


const Navbar = () => {
  const [progress, setProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [sidebar, setsidebar] = useState(false)
  const pathname  = usePathname()
  React.useEffect(()=>{
      setProgress(30)
      setTimeout(() => {
        setProgress(70)
      }, 100);

      setTimeout(() => {
        setProgress(100)
      }, 400);
  },[pathname])

  useEffect(()=>{
      setTimeout(()=>{
          setProgress(0)
      },500)
  })

  return (
    <nav className=" bg-background/10 sticky top-0 backdrop-blur border-b   w-full">
         <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}

          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold ">
              BLOGFORYOU
            </Link>
          </div>

          {/* Mobile Menu Button */}
          {
            <div>
              <div className="md:hidden">

                {/* <button 
              onClick={() => {setIsOpen(!isOpen)
                              setsidebar(!sidebar)
                              }}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            > */}
                <Sheet>
                  <ModeToggle  />
                  <SheetTrigger>

                    {/* <button
                className=" hover:text-gray-600 focus:outline-none"> */}
                    <svg
                      className="h-6 w-6 mx-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {isOpen ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      )}
                    </svg>
                   
                    {/* </button> */}
                  </SheetTrigger>
                 

                  <SheetContent
                    className="md:hidden">
                   
                    <SheetHeader>
                      <SheetTitle>Menu</SheetTitle>

                      <SheetDescription>

                        <div className="md:hidden">
                          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link href="/" className=" dark:hover:bg-secondary/90 hover:bg-gray-100 block px-3 py-2 rounded-md">
                              Home
                            </Link>
                            <Link href="/about" className="dark:hover:bg-secondary/90 hover:bg-gray-100 block px-3 py-2 rounded-md">
                              About
                            </Link>
                            <Link href="/contact" className="dark:hover:bg-secondary/90 hover:bg-gray-100 block px-3 py-2 rounded-md">
                              Contact
                            </Link>
                            <Link href="/Blog" className="dark:hover:bg-secondary/90 hover:bg-gray-100 block px-3 py-2 rounded-md">
                              BLOG
                            </Link>
                            <Button className="mx-1" size="sm" variant="outline">Signin</Button>
                            <Button className="mx-1" size="sm" variant="outline">Signup</Button>
                          </div>

                        </div>
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </div>
            </div>}

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 ">
            <Link href="/" className=" dark:hover:bg-secondary/90 hover:bg-gray-100 transition-all duration-200  px-3 py-2 rounded-md">
              Home
            </Link>
            <Link href="/about" className="dark:hover:bg-secondary/90 hover:bg-gray-100   px-3 py-2 rounded-md">
              About
            </Link>
            <Link href="/contact" className="dark:hover:bg-secondary/90 hover:bg-gray-100  px-3 py-2 rounded-md">
              Contact
            </Link>
            <Link href="/Blog" className="dark:hover:bg-secondary/90 hover:bg-gray-100  px-3 py-2 rounded-md">
              BLOG
            </Link>

            <Button className="mx-1" variant="outline">Signin</Button>
            <Button className="mx-1" variant="outline">Signup</Button>
            <ModeToggle />
          </div>

        </div>

        {/* Mobile Menu Dropdown */}


      </div>

    </nav>
  );
};

export default Navbar;