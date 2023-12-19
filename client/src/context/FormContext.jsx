import React, { createContext, useState } from 'react';

export const FormContext = createContext({});

export const FormProvider = ({ children }) => {
    const title = {
        0: 'Create a new Club',
        1: 'Add a president'
    };

    const [page, setPage] = useState(0);

    const [data, setData] = useState({
        clubId: '',
        clubName: '',
        clubDescription: '',
        firstName: '',
        lastName: '',
        email: '',
        tel: '',
        school: '',
    });

    const handleChange = e => {
        const { name, value } = e.target;
    
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const  {
        clubName,
        clubDescription
    } = data

    const canSubmit = Object.values(clubName,clubDescription).every(Boolean) && page === Object.keys(title).length - 1;

    const canNext = Object.keys(data)
    .filter(key => key.startsWith('club') && key !== 'clubId')
    .every(key => data[key]);

    const disablePrev = page === 0;
    const disableNext = page === Object.keys(title).length - 1 || (page === 0 && !canNext);

    const prevHide = page === 0 ;
    const nextHide = page === Object.keys(title).length - 1 ;
    const submitHide = page !== Object.keys(title).length - 1 ;

    return (
        <FormContext.Provider value={{
            title,
            page,
            setPage,
            data,
            setData,
            canSubmit,
            handleChange,
            canNext,
            disableNext,
            disablePrev,
            prevHide,
            nextHide,
            submitHide
        }}>
            {children}
        </FormContext.Provider>
    );
};
export default FormProvider