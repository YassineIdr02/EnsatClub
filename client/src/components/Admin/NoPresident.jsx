import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import AssocPres from './AssocPres';

const NoPresident = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };
    return (
        <>
            <div className="container mx-auto my-auto h-screen">
                <section className="flex items-center h-full p-16  dark:text-gray-600">
                    <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                        <div className="max-w-md text-center">
                            <h2 className="mb-8 font-extrabold text-5xl dark:text-gray-600">
                                This club has no president
                            </h2>
                            {
                                token ?
                                    <p className="text-lg font-semibold md:text-lg">To preform any further action a president must be associated</p>
                                    : <p className="text-lg font-semibold md:text-lg">Np fruther actions can be preformed</p>
                            }
                            <div className='flex flex-row gap-4'>
                                {token &&
                                    <button className="btn btn-accent w-[50%]" onClick={togglePopup}>Associate a president</button>
                                }
                                <Link to="/admin" className='w-[50%]' ><button className="btn btn-error w-[100%] ">Go back</button></Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {showPopup && <AssocPres onClose={handleClosePopup} />}
        </>
    )
}

export default NoPresident