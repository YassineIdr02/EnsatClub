import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addActivity } from '../../features/Activities/activitySlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddPost = () => {
    const dispatch = useDispatch()
    const [content, setContent] = useState('')
    const [file, setFile] = useState(null)

    const handleContent = e => setContent(e.target.value)
    const handleFile = e => {
        if (e.target.files.length > 0) {
            // Assuming you only want to store the first selected file
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
        }
    };

    const canAdd = Boolean(content.trim())

    const submitAdd = () => {
        if(canAdd) {
            // add post to database here
            console.log("adding post: ", content);
            dispatch(addActivity({ clubId: "1" , content, file }))
            setContent('')
            setFile(null)
            toast.success("Activity added succesfully")

        }
    }
    return (
        <div>
            <hr className="w-full" />

            <div className="flex flex-row p-5">
                <div className="avatar w-1/6 flex justify-center items-center">
                    <div className="w-14 rounded-full ">
                        <img src="../assets/Profile.jpg" />
                    </div>
                </div>
                <textarea type="text"
                    placeholder="Entrez la description de l'activité"
                    className="input input-lg w-full h-full min-h-16 max-h-40"
                    value={content}
                    onChange={handleContent}
                ></textarea>
            </div>

            <div className="flex flex-row items-center justify-between m-2" >
                <div className="flex flex-row gap-3 justify-start">
                    <input type="file" className="file-input file-input-ghost w-full max-w-xs" onChange={handleFile} />
                </div>
                <button className="btn btn-circle btn-ghost btn-outline" disabled={!canAdd} onClick= {submitAdd} >
                    <FontAwesomeIcon icon={faPlus} className="text-2xl" />
                </button>
            </div>

            <ToastContainer theme='colored' />

        </div>
    )
}

export default AddPost
