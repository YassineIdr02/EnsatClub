import React from 'react'
import logo from '../../assets/EnsatClub.png'

const ClubPageFooter = () => {
    return (
        <div>
            <div className='flex flex-row gap-5 mt-[2%] items-center'>
                <div className="w-72 h-48 avatar  rounded-full overflow-hidden mr-4">
                    <img src={logo} alt="" className="object-cover w-full h-full" />
                </div>
                <div className='flex flex-col gap-[2%]'>
                <h2 class="text-4xl font-extrabold dark:text-white">Ayman Benamri</h2>
                <p class="my-4 text-lg text-gray-500">Club presidant</p>

                </div>
                
            </div>
        </div>
    )
}

export default ClubPageFooter
