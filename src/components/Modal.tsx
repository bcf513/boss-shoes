"use client";

import { ReactNode, useEffect, useRef } from "react";

function Modal({
  isOpen,
  closeModal,
  children,
}: Readonly<{
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
}>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        containerRef.current?.contains(event.target as Node)
      ) {
        closeModal();
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
  }, [isOpen, containerRef, modalRef, closeModal]);

  if (!isOpen) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-10"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <dialog
        ref={modalRef}
        open
        className="modal-box bg-white p-6 rounded-lg shadow-lg w-fit"
        style={{ maxWidth: "95vw", maxHeight: "95vh" }}
      >
        {children}
      </dialog>
    </div>
  );
}

export default Modal;
