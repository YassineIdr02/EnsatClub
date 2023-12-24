import React, { useRef, useEffect } from 'react';

import useFormContext from '../../hooks/useFormContext';
import FormInputs from './FormInputs';
import { useDispatch } from "react-redux"
import { addClub, assocPresident } from '../../features/Clubs/ClubSlice'; // Corrected action name

const ClubForm = ({ onClose }) => {
    const modalRef = useRef(null);
    const dispatch = useDispatch();

    const {
        setPage,
        data,
        canSubmit,
        disableNext,
        disablePrev,
        prevHide,
        nextHide,
        submitHide,
    } = useFormContext();

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

    const handlePrev = () => setPage(prev => prev - 1);
    const handleNext = () => setPage(prev => prev + 1);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addClub(data));
        // Assuming assocPresident action creator expects 'data' as a payload
        dispatch(assocPresident(data)); // Fixed action creator name
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-shrink-0'>
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-sm">
                <div ref={modalRef} className="p-4 border border-gray-300 shadow-md rounded-2xl h-[70%] bg-[#DEF2F1] w-3/6 flex flex-col justify-between">
                    <section>
                        <FormInputs />
                    </section>
                    <div className="flex flex-row gap-5 items-center justify-end">
                        {!prevHide &&
                            <button type='button' className="btn btn-warning" onClick={handlePrev} disabled={disablePrev}>Previous</button>
                        }
                        {!nextHide &&
                            <button type='button' className="btn btn-success" onClick={handleNext} disabled={disableNext}>Next</button>
                        }
                        {!submitHide &&
                            <button type='submit' className="btn btn-success" disabled={!canSubmit}>Submit</button>
                        }
                        <button type='button' className="btn btn-error" onClick={onClose}>Cancel</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ClubForm;
