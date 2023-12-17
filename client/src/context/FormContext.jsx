import { createContext, useState, useEffect } from "react";

const FormContext = createContext({})

export const FormProvider = ({ children }) => {

    const title = {
        0: 'Create a new Club',
        1: 'Add a presidant'
    }

    const [page, setPage] = useState(0)

    const { clubId } = useParams()
    const [data, setData] = {
        clubId,
        name: '',
        description: '',
        firstName: "",
        lastName: "",
        email: "",
        tel: "",
        school: "",
        motivation: ""
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClub(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const { name, description, optionalInputs } = data

    const canSubmit = [...Object.values(name, description)].every(Boolean) && page === Object.keys(title).length - 1

    return (
        <FormContext.Provider value={{ title, page, setPage, data, setData, canSubmit }}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext;