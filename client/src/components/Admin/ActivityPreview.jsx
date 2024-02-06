import React from 'react';
import ActivityCard from './ActivityCard.jsx';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllActivities } from '../../features/Activities/activitySlice'; 

const ActivityPreview = () => {
  const activities = useSelector(getAllActivities);

  const hasActivities = activities.length > 0;

  return (
    <section className="h-[65%] p-5 flex flex-col items-center">
      <h2 className="text-5xl text-center font-bold mb-4">Activity Preview</h2>
      <ActivityCard />
      <Link to="">
        <button className='btn btn-accent w-[110%] h-[60%] my-5' disabled={!hasActivities}>
          Check out more activities
        </button>
      </Link>
      <hr className="my-8 border-0 h-0.5 w-[60%] bg-slate-300 mx-auto" />
    </section>
  );
};

export default ActivityPreview;
