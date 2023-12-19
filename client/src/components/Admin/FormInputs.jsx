import useFormContext from "../../hooks/useFormContext"
import AddClub from "./AddClub"
import AddPresidant from "./AddPresidant"

const FormInputs = () => {
    const { page } = useFormContext()

    const display = {
        0: <AddClub />,
        1: <AddPresidant />
    }

    const content = <div>
        {display[page]}
    </div>

    return content

}

export default FormInputs