"use client"
import React, { act, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utility/cn";
import Link from "next/link";
const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-xl max-sm:w-9/10 mx-auto z-50", className)}>
            <Menu  setActive={setActive}  >
                <Link href={'/home'}><MenuItem active={active} setActive={setActive} item="Home"></MenuItem></Link>
                <MenuItem active={active} setActive={setActive} item="Courses">
                <div className="flex flex-col space-y-4">
                 <HoveredLink href="/link">All Courses</HoveredLink>
                 <HoveredLink href="/link">Basic Music Theory </HoveredLink>
                 <HoveredLink href="/link">Advanced Composition </HoveredLink>
                 <HoveredLink href="/link">Music Production </HoveredLink>
                 </div>
                </MenuItem> 
               <Link href={"/contactus"}> <MenuItem active={active} setActive={setActive} item="Contact Us" ></MenuItem></Link>
            </Menu>
          
        </div>
    )
}

export default Navbar
