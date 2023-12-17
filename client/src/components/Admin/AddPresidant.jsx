import React from 'react'

const AddPresidant = () => {

    const {clubId} = useParams()
    const [member, setMember] = useState({
        clubId,
        firstName: "",
        lastName: "",
        email: "",
        tel: "",
        school: "",
        motivation: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMember(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <>
            <div className='w-[70%] h-[50%] item-center flex flex-col mx-auto z-50'>
                <h1 className="text-5xl text-center font-bold mt-5">Add a presidant</h1>
                <form class="mx-auto w-[90%] items-center">
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="email"
                            name="email"
                            value={member.email}
                            onChange={handleChange}
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required />
                        <label for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Email address
                        </label>
                    </div>

                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-5 group">
                            <input type="text"
                                name="firstName"
                                value={member.firstName}
                                onChange={handleChange}
                                id="floating_phone"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required />
                            <label for="floating_phone"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Fisrt name<span className='text-red'>*</span>
                            </label>
                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <input type="tel"
                                name="lastName"
                                value={member.lastName}
                                onChange={handleChange}
                                id="floating_phone"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required />
                            <label for="floating_phone"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Last name <span className='text-red'>*</span>
                            </label>
                        </div>
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-5 group">
                            <input type="tel"
                                name="tel"
                                value={member.tel}
                                onChange={handleChange}
                                id="floating_phone"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required />
                            <label for="floating_phone"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Phone number (123-456-7890) <span className='text-red'>*</span>
                            </label>
                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <input type="text"
                                name="floating_phone"
                                value={member.school}
                                onChange={handleChange}
                                id="floating_phone"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required />
                            <label for="floating_phone"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                School <span className='text-red'>*</span>
                            </label>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 mb-5'>
                        <label htmlFor="motivation" className='text-lg'>Motivation</label>
                        <textarea placeholder="motivation"
                            value={member.motivation}
                            onChange={handleChange}
                            id='motivation'
                            className="textarea textarea-bordered textarea-lg w-full max-w-xs" />
                    </div>
                    <button type="submit" class="btn btn-accent text-black w-[20%]">Submit</button>
                </form>
            </div>
        </>
  )
}

export default AddPresidant
