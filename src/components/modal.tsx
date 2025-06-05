// components/Modal.tsx
import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  showCloseIcon?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  showCloseIcon = true,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg w-[100%] max-w-md relative p-6">
        
        {showCloseIcon && (
          <button
            onClick={onClose}
            className="absolute top-5 right-3 text-gray-500 hover:text-black text-xl cursor-pointer"
          >
            ×
          </button>
        )}

        {title && (
          <div className="mb-4">
            <h2 className="text-[14px]  text-center text-gray-800 underline">
              {title}
            </h2>
          </div>
        )}

        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
