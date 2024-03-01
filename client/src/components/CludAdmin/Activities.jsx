import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { getActivities, getAllActivities } from '../../features/Activities/activitySlice';
import TimeAgo from './TimeAgo';
import sampleImage from '../../assets/profile.png';
import { useParams } from 'react-router-dom';

const Activities = () => {
    const dispatch = useDispatch();
    const activities = useSelector(getAllActivities);
    const clubId = useParams()

    useEffect(() => {
        dispatch(getActivities(clubId));
    }, [dispatch]);

    const sortedActivities = activities.slice().sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return (
        <>
            {
                sortedActivities.length == 0 ? (
                    <div className='flex flex-col gap-10 my-[30%] opacity-30 z-0'>
                        <FontAwesomeIcon icon={faTriangleExclamation} className="text-9xl " />
                        <h1 className="text-4xl text-gray-600 text-center">
                            Aucune activité pour le moment !
                        </h1>
                    </div>
                ) : (
                    sortedActivities.map((activity) => (
                        <div key={activity.id}>
                            <hr className="w-full border-t border-gray-300 z-0 " />
                            <div className="flex flex-col gap-4 w-full my-2 p-3">
                                <div className="flex flex-row items-center justify-between">
                                    <div className="flex flex-row gap-4 items-center">
                                        <div className="avatar cursor-pointer">
                                            <div className="w-14 rounded-full z-0">
                                                <img src={sampleImage} alt="Profile" />
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
                                        <ul tabIndex="0" className="dropdown-content z-[0] menu shadow bg-base-200 rounded-box w-56">
                                            <li>
                                                <a>Edit</a>
                                            </li>
                                            <li>
                                                <a>Delete post</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='flex flex-col border-s-gray-400'>
                                    <p>{activity.content}</p>
                                    {activity.photo && <img src={`${activity.photo}`} className="h-96 w-full object-contain  " />}
                                </div>
                            </div>

                        </div>
                    )
                    ))}
        </>
    );
};

export default Activities;
