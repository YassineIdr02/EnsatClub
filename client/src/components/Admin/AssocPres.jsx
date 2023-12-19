import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { assocPersidant } from '../../features/Clubs/ClubSlice';
import { useNavigate, useParams } from 'react-router-dom';

const AssocPres = ({ onClose }) => {
  const modalRef = useRef(null);
  const dispatch = useDispatch()
  const {clubId} = useParams()
  const navigate = useNavigate()
  const [president, setPresident] = useState({
    clubId,
    firstName: '',
    lastName: '',
    email: '',
    tel: '',
    school: '',
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

  const handleSubmit = e => {

    e.preventDefault()
    
    try {
      dispatch(assocPersidant(president))
      navigate('/admin')
    } catch (error) {
      console.log(error);
    }

  }

  const handleChange = e => {
    const { name, value } = e.target;

    setPresident(prevData => ({
      ...prevData,
      [name]: value
    }));
  };


  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div ref={modalRef} className="p-4 border border-gray-300 shadow-md rounded-2xl h-2/4  h-  bg-[#DEF2F1] w-3/6 flex flex-col justify-between">
        <div className='w-[70%] h-[50%] item-center flex flex-col mx-auto z-50'>
          <div className='flex flex-col gap-4 items-center'>
            <h1 className="text-5xl text-center font-bold mt-5">Add a president</h1>
            <p className='text-gray'>(Optional)</p>

          </div>
          <div className="mx-auto w-[90%] items-center">
            <div className="relative z-0 w-full mb-5 group">
              <input type="email"
                name="email"
                value={president.email}
                onChange={handleChange}
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email address
              </label>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input type="text"
                  name="firstName"
                  value={president.firstName}
                  onChange={handleChange}
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label htmlFor="floating_phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Fisrt name<span className='text-red'>*</span>
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input type="tel"
                  name="lastName"
                  value={president.lastName}
                  onChange={handleChange}
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label htmlFor="floating_phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name <span className='text-red'>*</span>
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input type="tel"
                  name="tel"
                  value={president.tel}
                  onChange={handleChange}
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label htmlFor="floating_phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number (123-456-7890) <span className='text-red'>*</span>
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input type="text"
                  name="school"
                  value={president.school}
                  onChange={handleChange}
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label htmlFor="floating_phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  School <span className='text-red'>*</span>
                </label>
              </div>
            </div>

          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-row gap-5 items-center justify-end">
          <button className="btn btn-error" onClick={onClose}>Cancel</button>
          <button className="btn btn-success" onClick={handleSubmit}>Associer</button>
        </div>
      </div>
    </div>
  );
};

export default AssocPres;
