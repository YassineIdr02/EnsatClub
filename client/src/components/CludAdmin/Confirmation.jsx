import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { useRef, useEffect } from 'react';

const Confirmation = ({ onClose }) => {
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
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-sm z-20   ">
            <div ref={modalRef} className="p-4 border border-gray-300 shadow-md rounded-2xl h-[30%] bg-[#DEF2F1] w-1/3 flex flex-col justify-between">
                <h1 className='text-center text-5xl font-bold my-auto '>Are you sure you want to delete!!</h1>
                {/* Buttons */}
                <div className="flex flex-row gap-5 items-center justify-end">
                    <button className="btn btn-error" onClick={onClose}>Close</button>
                    <button className="btn btn-success" onClick={onClose}>Kick</button>
                </div>
            </div>
        </div>
    );
};

export default Confirmation;
