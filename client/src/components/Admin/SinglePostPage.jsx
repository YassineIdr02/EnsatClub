import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import TimeAgo from '../CludAdmin/TimeAgo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { getActivities, getActivityById } from '../../features/Activities/activitySlice';
import ActivityPreview from './ActivityPreview';
import { getAllMembers } from '../../features/Clubs/ClubSlice';


const SinglePostPage = () => {
  const dispatch = useDispatch()
  const { clubId } = useParams();
  const { postId } = useParams()
  const activity = useSelector(state => getActivityById(state, clubId, postId))

  useEffect(()=> {
    dispatch(getActivities({clubId}))
  },[])

  console.log(activity)

  return (
    <>
      {
        activity == null ? (
          <h1 className='text-5xl text-gray-600 text-center'>Something went wrong </h1>
        ) : (
            <div key={activity.id}>
              <div className="flex flex-col gap-4 w-[80%] mx-auto my-2 p-3">
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

                <div className='flex flex-col border-s-gray-400'>
                  <p>{activity.content}</p>
                  {activity.photo && <img src={`${activity.photo}`} className="h-96 w-full object-contain  " />}
                </div>
              </div>
            </div>
          
        )
      }

      <ActivityPreview fromSingle={true}/>
    </>
  )
}

export default SinglePostPage
