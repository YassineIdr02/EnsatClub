import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { useRef, useEffect } from 'react';

const AddClubPopup = ({ onClose }) => {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      handleClickOutside(event);
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div ref={modalRef} className="p-4 border border-gray-300 shadow-md rounded-2xl h-2/4  h-  bg-[#DEF2F1] w-3/6 flex flex-col justify-between">
        <div>
          <div className='flex justify-between mb-2'>
            <div></div>
            <button className="btn btn-sm btn-circle btn-ghost text-center text-lg" onClick={onClose}>✕</button>
          </div>
          <h2 className="text-center font-bold text-2xl">Details du demande</h2>
        </div>

        {/* Alert */}
        <div role="alert" className="alert alert-warning mb-4 flex items-center">
          <FontAwesomeIcon icon={faTriangleExclamation} className="text-2xl" />
          <span className="ml-2">Cet email est externe</span>
        </div>

        {/* Information Details */}
        <div className="flex-grow overflow-auto">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:col-gap-6 xl:grid-cols-4">
            <div className="text-base font-medium text-gray-900">
              <dt>Nom complet :</dt>
              <dd className="mt-1 text-gray-500">John Doe</dd>
            </div>
            <div className="text-base font-medium text-gray-900">
              <dt>Email :</dt>
              <dd className="mt-1 text-gray-500 break-words">john.doe@gmail.com</dd>
            </div>
            <div className="text-base font-medium text-gray-900">
              <dt>Etablissement :</dt>
              <dd className="mt-1 text-gray-500 break-words">EMSI RABAT</dd>
            </div>
            <div className="text-base font-medium text-gray-900">
              <dt>Telephone :</dt>
              <dd className="mt-1 text-gray-500 break-words">06.10.09.88.17</dd>
            </div>
            <div className="text-base font-medium text-gray-900 col-start-1 col-end-3 mt-2">
              <dt>Motivation :</dt>
              <dd className="mt-1 text-gray-500 break-words">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. ...
              </dd>
            </div>
          </dl>
        </div>

        {/* Buttons */}
        <div className="flex flex-row gap-5 items-center justify-end">
          <button className="btn btn-error" onClick={onClose}>Decline</button>
          <button className="btn btn-success" onClick={onClose}>Approuve</button>
        </div>
      </div>
    </div>
  );
};

export default AddClubPopup;
