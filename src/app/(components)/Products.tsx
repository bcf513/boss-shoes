import React from "react";

function Products() {
  return (
    <div className="flex flex-col justify-center w-full">
      <h1 className="flex justify-center font-bold text-3xl">Our Products</h1>
      <div className="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center gap-2 rounded-b-3xl p-6 bg-gradient-to-b from-transparent to-white/30 backdrop-blur-sm">
          <img
            alt="1"
            loading="lazy"
            width="500"
            height="500"
            decoding="async"
            data-nimg="1"
            className="w-auto h-auto drop-shadow-xl "
            style={{ color: "transparent" }}
            srcSet="/_next/image?url=%2Fimages%2FGreenAiroo1.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fimages%2FGreenAiroo1.png&amp;w=1080&amp;q=75 2x"
            src="/_next/image?url=%2Fimages%2FGreenAiroo1.png&amp;w=1080&amp;q=75"
          />
          <h3 className="font-bold text-4xl w-fit text-center">Green Airoo </h3>
          <p className="text-center text-xs font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <div className="flex justify-between w-full items-center">
            <h3>R$ 350</h3>
            <button
              type="button"
              className="border-spacing-4 border-solid border-white rounded-lg border-2 p-2"
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
      </div>
    </div>
  );
}

export default Products;
