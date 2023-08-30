import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <div className="h-48 md:h-24 p-4 lg:p20 xl:p-40 text-red-500 flex items-center justify-between">
            <Link href={"/"}>
                <Image
                    src="/warkopCakraLogo.png"
                    alt="warkop logo"
                    width={250}
                    height={200}
                />
            </Link>
            <p>ALL RIGHTS RESERVED.</p>
        </div>
    );
};

export default Footer;
