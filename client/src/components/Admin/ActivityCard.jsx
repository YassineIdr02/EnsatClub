import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getActivities, getAllActivities } from '../../features/Activities/activitySlice';

const ActivityCard = () => {
    const dispatch = useDispatch();
    const activities = useSelector(getAllActivities);
    const { clubId } = useParams()

    useEffect(() => {
        dispatch(getActivities({ clubId }));
    }, [dispatch, clubId]);

    const renderCards = () => {
        const sortedActivities = activities
            .slice()
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        if (sortedActivities.length === 0) {
            return <h1 className='text-5xl font-bold'>No activities available</h1>;
        }

        const limitedActivities = sortedActivities.slice(0, 3);

        return limitedActivities.map(activity => (
            <div className="card w-[30%] glass " key={activity.id}>
                <figure><img src={activity.photo} alt="activity photo" /></figure>
                <div className="card-body">
                    <h2 className="card-title">...</h2>
                    <p>{activity.content.substring(0, 20)}...</p>
                    <div className="card-actions justify-end">
                        <Link to={`${activity.id}`}>
                            <button className="btn btn-primary">View more</button>
                        </Link>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <section className='flex flex-row justify-between h-[70%] items-center'>
            {renderCards()}
        </section>
    );
};

export default ActivityCard;
