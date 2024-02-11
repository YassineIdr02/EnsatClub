import React from 'react';
import ActivityCard from './ActivityCard.jsx';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllActivities } from '../../features/Activities/activitySlice'; 

const ActivityPreview = ({fromSingle}) => {
  const activities = useSelector(getAllActivities);

  const hasActivities = activities.length > 0;

  return (
    <section className="h-[65%] p-5 flex flex-col items-center">
      {
        fromSingle == true ? 
        <h2 className="text-5xl text-center font-bold mb-4">See more</h2> 
        :
        <h2 className="text-5xl text-center font-bold mb-[3%]  ">Activity Preview</h2>
      }
      
      <ActivityCard className="mb-[3%]" />
      

    </section>
  );
};

export default ActivityPreview;
