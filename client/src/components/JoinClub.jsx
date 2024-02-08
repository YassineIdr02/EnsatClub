import React from 'react';
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllClubs } from '../features/Clubs/ClubSlice';
import { useState } from 'react';
import { getClubs } from '../features/Clubs/ClubSlice';

const JoinClubPop = ({ onClose }) => {
    const dispatch = useDispatch()
    const modalRef = useRef(null);
    const clubs = useSelector(getAllClubs)
    const [Info, setInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        etablissement: '',
        tel: '',
        club: '',
        motivation: ''
    })

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

    const [selectedClub, setSelectedClub] = useState('');

    useEffect(() => {
        dispatch(getClubs());
    }, [dispatch]);


    const handleSend = () => {

    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setInfo((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const canSave = [Info.club, Info.email, Info.etablissement, Info.firstName, Info.lastName, Info.motivation, Info.tel].every(Boolean)

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-sm">
            <div ref={modalRef} className="p-4 border border-gray-300 shadow-md rounded-2xl h-[70%] bg-[#DEF2F1] w-3/6 flex flex-col justify-between z-40">
                <div>
                    <div className='flex justify-between mb-2'>
                        <div></div>
                        <button className="btn btn-sm btn-circle btn-ghost text-center text-lg" onClick={onClose}>✕</button>
                    </div>
                    <h2 className="text-center font-bold text-5xl">Join a club</h2>
                </div>

                <div className="mx-auto w-[90%] items-center justify-center">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text"
                            name="firstName"
                            value={Info.firstName}
                            onChange={handleChange}
                            id="firstName"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required />
                        <label htmlFor="firstName"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Prénom*
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text"
                            name="lastName"
                            value={Info.lastName}
                            onChange={handleChange}
                            id="lastName"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required />
                        <label htmlFor="lastName"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Nom*
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="number"
                            name="tel"
                            value={Info.tel}
                            onChange={handleChange}
                            id="tel"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required />
                        <label htmlFor="tel"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Téléphone*
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="email"
                            name="email"
                            value={Info.email}
                            onChange={handleChange}
                            id="email"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required />
                        <label htmlFor="email"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Email*
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text"
                            name="etablissement"
                            value={Info.etablissement}
                            onChange={handleChange}
                            id="etablissement"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required />
                        <label htmlFor="etablissement"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Etablissement*
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">

                        <select
                            id="club"
                            name="club"
                            value={Info.club}
                            onChange={handleChange}
                            className="block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            required
                        >
                            <option value="" disabled>Select a club</option>
                            {clubs.map((club) => (
                                <option key={club.id} value={club.name}>
                                    {club.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <textarea type="text"
                            name="motivation"
                            value={Info.motivation}
                            onChange={handleChange}
                            id="motivation"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required > </textarea>
                        <label htmlFor="motivation"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Motivation*
                        </label>
                    </div>
                </div>
                {/* Buttons */}
                <div className="flex flex-row gap-5 items-center justify-end">
                    <button className="btn btn-error" onClick={onClose} >Cancel</button>
                    <button className="btn btn-success" onClick={onClose} disabled={!canSave}>Join now</button>
                </div>
            </div>
        </div>
    );
};

export default JoinClubPop;
