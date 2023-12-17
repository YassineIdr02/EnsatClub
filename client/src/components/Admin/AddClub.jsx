import { useEffect } from "react"
import useFormContext from "../../hooks/useFormContext"

const AddClub = () => {
  const {data, handleChange} = useFormContext()
  
  useEffect(()=>{
    console.log("cl",data.clubName);
  },[data.clubName])



  return (
    <>
            <div className='w-fit h-fit item-center flex flex-col mx-auto z-50'>
                <h1 className="text-5xl text-center font-bold mt-5">Create a new club</h1>
                <form class="mx-auto w-[90%] items-center mt-10 justify-center">
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="text"
                            name="clubName"
                            value={data.clubName}
                            onChange={handleChange}
                            id="name"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required />
                        <label for="name"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Nom
                        </label>
                    </div>
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="text"
                            name="clubDescription"
                            value={data.clubDescription}
                            onChange={handleChange}
                            id="description"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required />
                        <label for="description"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Desciption
                        </label>
                    </div>
                </form>
            </div>
        </>
  )
}

export default AddClub
