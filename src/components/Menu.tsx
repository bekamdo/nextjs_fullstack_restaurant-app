"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = false;
  return (
    <div>
      <div>
        {!open ? (
          <Image
            src="/open.png"
            alt=""
            width={20}
            height={20}
            onClick={() => setOpen(true)}
          />
        ) : (
          <Image
            src="/close.png"
            alt=""
            width={20}
            height={20}
            onClick={() => setOpen(false)}
          />
        )}
      </div>
      {open && (
        <div className="bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] w-full flex flex-col items-center justify-center gap-8 z-10 text-3xl">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/user" onClick={() => setOpen(false)}>
              Order
            </Link>
          )}
          <Link href="/cart" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
