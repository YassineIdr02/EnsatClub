import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

import { addClub } from "../../features/Clubs/ClubSlice";
const AddClub = ({ onClose }) => {
    const modalRef = useRef(null);
    const dispatch = useDispatch()
    const [Club, setClub] = useState({
        clubName: '',
        description: '',

    });

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

    const handleChange = (e) => {
        const { name, value } = e.target;

        setClub((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addClub(Club));
        setClub({ clubName: "", description: "" })
        onClose();
    }


    const canSave = [Club.clubName, Club.description].every(Boolean);
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-sm">
                <div ref={modalRef} className="p-4 border border-gray-300 shadow-md rounded-2xl h-[70%] bg-[#DEF2F1] w-3/6 flex flex-col justify-between">
                    <div className='w-fit h-fit item-center flex flex-col mx-auto'>
                        <h1 className="text-5xl text-center font-bold mt-5">Create a new club</h1>
                        <div className="mx-auto w-[90%] items-center mt-10 justify-center">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text"
                                    name="clubName"
                                    value={Club.clubName}
                                    onChange={handleChange}
                                    id="name"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required />
                                <label htmlFor="name"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Nom
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text"
                                    name="description"
                                    value={Club.description}
                                    onChange={handleChange}
                                    id="description"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required />
                                <label htmlFor="description"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Desciption
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-row gap-5 items-center justify-end">
                            <button type='submit' className="btn btn-success" disabled={!canSave} onClick={handleSubmit}>Submit</button>
                            <button type='button' className="btn btn-error" onClick={onClose}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AddClub
