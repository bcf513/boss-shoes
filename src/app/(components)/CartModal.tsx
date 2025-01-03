import { useCart } from "@/providers/Cart";
import React from "react";
import Image from "next/image";
import Modal from "@/components/Modal";

function CartModal() {
  const { cart, isCartModalOpen, toggleModal, addToCart, removeFromCart } =
    useCart();

  if (!isCartModalOpen) {
    return null;
  }

  return (
    <Modal isOpen={isCartModalOpen} closeModal={toggleModal}>
      <div className="w-fit text-black">
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
            {cart.map((productInCart) => (
              <tr key={productInCart.id}>
                <td className="flex flex-col items-center gap-4 p-2 md:flex-row lg:flex-row align-middle">
                  <div className="p-2 flex items-center justify-center gap-2 my-auto align-middle">
                    <Image
                      alt={productInCart.model}
                      src={productInCart.photo}
                      width={50}
                      height={50}
                      className="h-10 w-10 drop-shadow-xl rounded-md bg-gray-200"
                    />
                    {productInCart.model}
                  </div>
                </td>
                <td className=" p-2 whitespace-nowrap align-middle">
                  <p className="w-fit h-fit">R$ {productInCart.price}</p>
                </td>
                <td>
                  <div className="p-2 h-full flex items-center justify-center gap-2 my-auto ">
                    <button
                      className="w-6 h-6 rounded-full bg-gray-200 hover:bg-red-400 flex justify-center items-center"
                      onClick={() => removeFromCart(productInCart.id)}
                    >
                      -
                    </button>
                    <span className="text-center">
                      {productInCart.quantity}
                    </span>
                    <button
                      className="w-6 h-6 rounded-full bg-gray-200 hover:bg-green-400 flex justify-center items-center"
                      onClick={() => addToCart(productInCart)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className=" p-2 whitespace-nowrap">
                  R$ {productInCart.quantity * productInCart.price}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} className=" p-2 text-right font-bold">
                Total:
              </td>
              <td className=" p-2 whitespace-nowrap">
                R$
                {cart.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                )}
              </td>
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
    </Modal>
  );
}

export default CartModal;
