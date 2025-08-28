// Modal
"use client";

import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export interface ModalProps {
  children: React.ReactNode;
  show: boolean;
  onClose: () => void;
}

export default function Modal({ show, children, onClose }: ModalProps) {
  return (
    <Transition show={show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 flex items-center"
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
        </Transition.Child>
        <Dialog.Panel className="relative transform overflo-hidden rounded-lg bg-green shadow-xl transition-all p-7 mx-auto sm:my-10 sm:w-full sm:max-w-2xl sm:h-80 sm:max-h-80">
          {children}
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
}
