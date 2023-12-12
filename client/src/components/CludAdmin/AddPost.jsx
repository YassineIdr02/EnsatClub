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
            <hr class="w-full" />
            <div class="flex flex-row p-5">
                <div class="avatar w-1/6 flex justify-center items-center">
                    <div class="w-14 rounded-full ">
                        <img src="../assets/Profile.jpg" />
                    </div>
                </div>
                <textarea type="text"
                    placeholder="What's on your mind?"
                    class="input input-lg w-full h-full min-h-16 max-h-40"
                    value={caption}
                    onChange={captionInput}
                ></textarea>
            </div>
            <div class="flex flex-row items-center justify-between m-2" >
                <div class="flex flex-row gap-3 justify-start">
                    <input type="file" class="file-input file-input-ghost w-full max-w-xs" />
                </div>
                <button class="btn btn-circle btn-ghost btn-outline" disabled={!canAdd} > 
                    <FontAwesomeIcon icon={faPlus} className="text-2xl"/>
                </button>
            </div>

        </div>
    )
}

export default AddPost
