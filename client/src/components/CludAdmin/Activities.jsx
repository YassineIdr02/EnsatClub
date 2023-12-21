import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { getActivities, getAllActivities } from '../../features/Activities/activitySlice';
import { useEffect } from 'react';

const Activities = () => {
    const dispatch = useDispatch()
    const posts = [
        // Replace this with your actual data for posts
        {
            id: 1,
            author: 'Elon Musk',
            time: 'Some time ago',
            content: 'This is a post content.',
            isLiked: false,
        },
        {
            id: 2,
            author: 'Elon Musk',
            time: 'Some time ago',
            content: 'This is a post content.',
            isLiked: false,
        },
        // Add more post objects as needed
    ];

    const Activities = useSelector(getAllActivities);

    useEffect(()=>{
        dispatch(getActivities({clubId: "1"}))
    }, [dispatch])

    return (
        <>
            {Activities.map((activity) => (
                <div key={activity.id}>
                    <hr className="w-full" />
                    <div className="flex flex-col gap-4 w-full my-2 p-3">
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-row gap-4">
                                <div className="avatar cursor-pointer">
                                    <div className="w-14 rounded-full">
                                        <img src="../assets/Profile.jpg" alt="Profile" />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-xl">{activity.clubName}</p>
                                    <p className="text-sm text-slate-300">{activity.descrption}</p>
                                </div>
                            </div>
                            <div className="dropdown dropdown-bottom hover:cursor-pointer">
                                <label tabIndex="0">
                                    <FontAwesomeIcon icon={faEllipsisVertical} className="hover:cursor-pointer" />
                                </label>
                                <ul tabIndex="0" className="dropdown-content z-[1] menu shadow bg-base-200 rounded-box w-56">
                                    <li>
                                        <a>Edit</a>
                                    </li>
                                    <li>
                                        <a>Delete post</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p>{activity.content}</p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Activities;
