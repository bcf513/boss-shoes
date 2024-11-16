import { useCart } from "@/providers/Cart";
import React from "react";

function CartModal() {
  const { isCartModalOpen, toggleModal } = useCart();

  if (!isCartModalOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-3 md:p-6 lg:p-6 w-fit  relative text-black">
        <h1 className="text-center font-bold">Your Cart</h1>
        <table className="w-full border-collapse border-gray-200 text-xs md:text-base lg:text-2xl">
          <thead>
            <tr>
              <th className="p-1 md:p-2 lg:p-2 text-left">Product</th>
              <th className="p-1 md:p-2 lg:p-2 text-left">Price</th>
              <th className="p-1 md:p-2 lg:p-2 text-left">Quantity</th>
              <th className="p-1 md:p-2 lg:p-2 text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="flex flex-col items-center gap-4 p-2 md:flex-row lg:flex-row">
                <img
                  alt="Fit"
                  loading="lazy"
                  width="50"
                  height="50"
                  decoding="async"
                  data-nimg="1"
                  className="h-10 w-10 drop-shadow-xl rounded-md bg-gray-200"
                  srcSet="/_next/image?url=%2Fimages%2FGreenAiroo2.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fimages%2FGreenAiroo2.png&amp;w=128&amp;q=75 2x"
                  src="/_next/image?url=%2Fimages%2FGreenAiroo2.png&amp;w=128&amp;q=75"
                />
                Fit
              </td>
              <td className=" p-2 whitespace-nowrap">
                <p className="w-fit h-fit">R$ 250,00</p>
              </td>
              <td className="p-2 flex items-center justify-center gap-2 ">
                <button className="w-6 h-6 rounded-full bg-gray-200 hover:bg-red-400 flex justify-center items-center">
                  -
                </button>
                <span className="text-center">4</span>
                <button className="w-6 h-6 rounded-full bg-gray-200 hover:bg-green-400 flex justify-center items-center">
                  +
                </button>
              </td>
              <td className=" p-2 whitespace-nowrap">R$ 1000,00</td>
            </tr>
            <tr>
              <td className="flex flex-col items-center gap-4 p-2 md:flex-row lg:flex-row">
                <img
                  alt="Air"
                  loading="lazy"
                  width="50"
                  height="50"
                  decoding="async"
                  data-nimg="1"
                  className="h-10 w-10 drop-shadow-xl rounded-md bg-gray-200"
                  srcSet="/_next/image?url=%2Fimages%2FGreenAiroo1.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fimages%2FGreenAiroo1.png&amp;w=128&amp;q=75 2x"
                  src="/_next/image?url=%2Fimages%2FGreenAiroo1.png&amp;w=128&amp;q=75"
                />
                Air
              </td>
              <td className=" p-2 whitespace-nowrap">
                <p className="w-fit h-fit">R$ 350,00</p>
              </td>
              <td className="p-2 flex items-center justify-center gap-2 ">
                <button className="w-6 h-6 rounded-full bg-gray-200 hover:bg-red-400 flex justify-center items-center">
                  -
                </button>
                <span className="text-center">2</span>
                <button className="w-6 h-6 rounded-full bg-gray-200 hover:bg-green-400 flex justify-center items-center">
                  +
                </button>
              </td>
              <td className=" p-2 whitespace-nowrap">R$ 700,00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} className=" p-2 text-right font-bold">
                Total:
              </td>
              <td className=" p-2 whitespace-nowrap">R$ 1700,00</td>
            </tr>
          </tfoot>
        </table>
        <button
          className="absolute top-2 right-2 text-white hover:text-gray-600 rounded-full bg-red-600 w-6"
          onClick={toggleModal}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default CartModal;
