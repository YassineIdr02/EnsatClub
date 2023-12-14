import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


const AddPost = () => {
    const [caption, setCaption] = useState('')

    const captionInput = e => setCaption(e.target.value)

    const canAdd = Boolean(caption.trim())
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
                    placeholder="What's on your mind?"
                    className="input input-lg w-full h-full min-h-16 max-h-40"
                    value={caption}
                    onChange={captionInput}
                ></textarea>
            </div>
            <div className="flex flex-row items-center justify-between m-2" >
                <div className="flex flex-row gap-3 justify-start">
                    <input type="file" className="file-input file-input-ghost w-full max-w-xs" />
                </div>
                <button className="btn btn-circle btn-ghost btn-outline" disabled={!canAdd} > 
                    <FontAwesomeIcon icon={faPlus} className="text-2xl"/>
                </button>
            </div>

        </div>
    )
}

export default AddPost
