"use client";

import { useCart } from "@/providers/Cart";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { cart, toggleModal } = useCart();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mouseup", handleClickOutside);
    } else {
      document.removeEventListener("mouseup", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [isOpen]);

  const cartTotalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  function openModal() {
    setIsOpen(false);
    toggleModal();
  }

  return (
    <header className="absolute flex justify-between items-center w-full p-4 z-20">
      <img
        alt="Logo"
        loading="lazy"
        width="50"
        height="50"
        decoding="async"
        data-nimg="1"
        className="h-24 w-24"
        style={{ color: "transparent" }}
        src="/BossShoesLogo.svg"
      />
      <div className="absolute right-0">
        <div className="hidden lg:flex items-center gap-5 rounded-l-3xl p-4 backdrop-blur-sm bg-white/30 ">
          <Link href="">
            <h1>HOME</h1>
          </Link>
          <h1>OUR PRODUCTS</h1>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
          </svg>
          <div className="relative" onClick={openModal}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 256 256"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M243.86,197.65l-14.25-120A20.06,20.06,0,0,0,209.67,60H179.83A52,52,0,0,0,76.17,60H46.33A20.06,20.06,0,0,0,26.39,77.65l-14.25,120A20,20,0,0,0,32.08,220H223.92a20,20,0,0,0,19.94-22.35ZM128,36a28,28,0,0,1,27.71,24H100.29A28,28,0,0,1,128,36ZM36.5,196,49.81,84H206.19L219.5,196Z"></path>
            </svg>
            {cartTotalItems > 0 && (
              <h1 className="absolute -right-3 -bottom-4  w-5 h-5 rounded-full bg-red-500 text-xs flex items-center justify-center text-white">
                {cartTotalItems}
              </h1>
            )}
          </div>
        </div>
      </div>
      <div className="relative h-full">
        <div className="p-4 lg:hidden" onClick={() => setIsOpen(true)}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
          </svg>
        </div>
        {isOpen && (
          <div
            className="absolute top-0 right-0 z-10 bg-white shadow-lg rounded-lg p-6 flex flex-col items-start lg:hidden text-black  whitespace-nowrap"
            ref={menuRef}
          >
            <a className="py-2 w-full" href="">
              HOME
            </a>
            <h1 className="py-2 w-full">OUR PRODUCTS</h1>
            <div className="flex w-full justify-evenly items-center">
              <div className="p-4">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                </svg>
              </div>
              <div className="relative p-4" onClick={openModal}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 256 256"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M243.86,197.65l-14.25-120A20.06,20.06,0,0,0,209.67,60H179.83A52,52,0,0,0,76.17,60H46.33A20.06,20.06,0,0,0,26.39,77.65l-14.25,120A20,20,0,0,0,32.08,220H223.92a20,20,0,0,0,19.94-22.35ZM128,36a28,28,0,0,1,27.71,24H100.29A28,28,0,0,1,128,36ZM36.5,196,49.81,84H206.19L219.5,196Z"></path>
                </svg>
                {cartTotalItems > 0 && (
                  <h1 className="absolute -right-0 -bottom-0 w-5 h-5 rounded-full bg-red-500 text-xs flex items-center justify-center text-white">
                    {cartTotalItems}
                  </h1>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
