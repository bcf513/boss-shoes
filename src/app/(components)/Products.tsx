import products_data from "@/db/shoes";
import { useCart } from "@/providers/Cart";
import Image from "next/image";

import React from "react";

function Products() {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col justify-center w-full">
      <h1 className="flex justify-center font-bold text-3xl">Our Products</h1>
      <div className="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products_data.map((product) => (
          <div
            className="flex flex-col items-center gap-2 rounded-b-3xl p-6 bg-gradient-to-b from-transparent to-white/30 backdrop-blur-sm"
            key={product.id}
          >
            <Image
              alt={product.model}
              src={product.photo}
              width={500}
              height={500}
              className="w-auto h-auto drop-shadow-xl "
              style={{ color: "transparent" }}
            />
            <h3 className="font-bold text-4xl w-fit text-center">
              {product.model}
            </h3>
            <p className="text-center text-xs font-bold">
              {product.description}
            </p>
            <div className="flex justify-between w-full items-center">
              <h3>R$ {product.price}</h3>
              <button
                type="button"
                className="border-spacing-4 border-solid border-white rounded-lg border-2 p-2"
                onClick={() => addToCart(product)}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16zm80 0v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
