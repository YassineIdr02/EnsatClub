import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Unauthorized = () => {
    const navigate = useNavigate()
    const goBack = () => navigate(-2);
    return (
        <>
            <div className="container mx-auto my-auto h-screen">
                <section className="flex items-center h-full p-16  dark:text-gray-600">
                    <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                        <div className="max-w-md text-center">
                            <h2 className="mb-8 font-extrabold text-5xl dark:text-gray-600">
                                Access denied
                            </h2>
                            <p className="text-lg font-semibold md:text-lg">You do not have access to this page</p>

                                <button className="btn btn-error w-[50%] " onClick={goBack}>Go back</button>

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Unauthorized