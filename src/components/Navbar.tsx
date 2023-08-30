import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
    const user = true;

    return (
        <div className="h-24 text-red-800 p-4 flex items-center justify-between border-b-2 border-red-800 uppercase md:h-24 lg:px-20 xl:px-40">
            {/* LEFT LINKS */}
            <div className="hidden md:flex gap-4 flex-1">
                <Link href={"/"}>Homepage</Link>
                <Link href={"/menu"}>Menu</Link>
                <Link href={"/"}>Contact</Link>
            </div>
            {/* LOGO */}
            <div className="">
                <Link href={"/"}>
                    <Image
                        src="/warkopCakraLogo.png"
                        alt="warkop logo"
                        width={140}
                        height={100}
                    />
                </Link>
            </div>
            {/* MOBIL MENU */}
            <div className="md:hidden">
                <Menu />
            </div>
            {/* RIGHT LINKS */}
            <div className="hidden md:flex gap-4 items-center justify-end flex-1">
                <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 bg-orange-300 px-1 rounded-md cursor-pointer">
                    <Image src="/phone.png" alt="" width={20} height={20} />
                    <span>0852255546</span>
                </div>
                {!user ? (
                    <Link href={"/login"}>Login</Link>
                ) : (
                    <Link href={"/orders"}>Orders</Link>
                )}
                <CartIcon />
            </div>
        </div>
    );
};

export default Navbar;
