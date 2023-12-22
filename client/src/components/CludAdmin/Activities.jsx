import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { getActivities, getAllActivities } from '../../features/Activities/activitySlice';
import TimeAgo from './TimeAgo';

const Activities = () => {
    const dispatch = useDispatch();
    const activities = useSelector(getAllActivities);
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        dispatch(getActivities({ clubId: "1" }));
    }, [dispatch]);

    const sortedActivities = activities.slice().sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
    });

    const post = {
        id: 1,
        image: '../../public/asyncGetWeatherData.png'
    }


    return (
        <>
            {sortedActivities.map((activity) => (
                <div key={activity.id}>
                    <hr className="w-full" />
                    <div className="flex flex-col gap-4 w-full my-2 p-3">
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-row gap-4 items-center">
                                <div className="avatar cursor-pointer">
                                    <div className="w-14 rounded-full">
                                        <img src="../assets/Profile.jpg" alt="Profile" />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-xl">{activity.clubName}</p>
                                    <div className="flex flex-row items-center">
                                        <p className="text-sm text-slate-300">{activity.descrption}</p>
                                        <TimeAgo date={activity.createdAt} />
                                    </div>
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
                        <div className='flex flex-col'>
                            <p>{activity.content}</p>
                            <img src={`${activity.photo}`} alt="" />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Activities;
