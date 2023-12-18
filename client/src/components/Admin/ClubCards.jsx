import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllClubs } from '../../features/Clubs/ClubSlice';
import { useEffect } from 'react';
import { getClubs } from '../../features/Clubs/ClubSlice';

const ClubCard = () => {
    const dispatch = useDispatch()
    const clubs = useSelector(getAllClubs);

    useEffect(() => {
        dispatch(getClubs());
    }, [dispatch]);
    
    const renderedClubs = clubs?.map(club => (
        <div className="card w-[83%] bg-base-100 shadow-xl mx-auto my-4" key={club.id}>
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"/></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {club.name}
                    {  (club.president_id == null) && (
                        <div className="badge badge-warning">No presidant</div>
                    )}
                </h2>
                <p>{club.description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline hover:cursor-pointer">Activités</div>
                    <div className="badge badge-outline hover:cursor-pointer">Bureau</div>
                    <Link to={"clubs/"+club.id.toString()} key={club.id}><div className="badge badge-outline hover:cursor-pointer">More details</div></Link>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-3">
                {renderedClubs}
            </div>
        </div>
    );
};



export default ClubCard;
