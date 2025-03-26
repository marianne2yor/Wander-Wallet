import { useEffect } from 'react';
import { createPortal } from 'react-dom';

function BasicDialog({ children, isOpen, onClose, title = null }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <>
      <div
        onClick={onClose}
        className="fixed top-0 left-0 w-svw h-full bg-gray-500/50 flex place-content-center z-50"
      ></div>
      <div
        onClick={(e) => e.stopPropagation()}
        className="p-6 gap-4 max-w-[500px] max-h-screen overflow-auto grid w-full fixed z-50 bg-white rounded-lg shadow-md top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <header className="flex justify-between">
          <span className="text-xl font-bold">{title}</span>
          <button onClick={onClose} className="w-6 h-6">&times;</button>
        </header>
        <div>{children}</div>
      </div>
    </>,
    document.body
  );
}

export default BasicDialog;
