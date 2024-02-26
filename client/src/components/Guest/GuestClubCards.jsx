import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllClubs, getClubStatus } from '../../features/Clubs/ClubSlice';
import { useEffect } from 'react';
import { getClubs } from '../../features/Clubs/ClubSlice';
import Loading from '../Loading';
import Cookies from 'js-cookie';
import sampleImage from '../../assets/c.jpg';

const GuestClubCards = () => {
    const dispatch = useDispatch()
    const clubs = useSelector(getAllClubs);
    const clubStatus = useSelector(getClubStatus)
    const token = Cookies.get("token")

    useEffect(() => {
        dispatch(getClubs());
    }, [dispatch]);

    let content = null;

    const renderedClubs = clubs?.map(club => (
        <div className="card w-[83%] bg-base-100 shadow-xl mx-auto my-4" key={club.id}>
            <figure><img src={sampleImage} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {club.name}
                    {(club.president_id == null) && (
                        <div className="badge badge-warning">No president</div>
                    )}
                </h2>
                <p>{club.description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline hover:cursor-pointer">Activités</div>
                    <Link to={`clubs/${club.id}/members`} className="flex items-center"><div className="badge badge-outline hover:cursor-pointer">Bureau</div></Link>
                    <Link to={"clubs/" + club.id.toString()} key={club.id} className="flex items-center"><div className="badge badge-outline hover:cursor-pointer">More details</div></Link>
                </div>
            </div>
        </div>
    ));


    switch (clubStatus) {
        case "loading":
            content = 
                <Loading />
            break;

        case "success":
            content = <div className="container mx-auto">
                <div className="grid grid-cols-3">
                    {renderedClubs}
                </div>
            </div>
            break;

        case "idle":
            
            break;

        default:
            break;
    }

    return (
        <div className='flex justify-center items-center'>
            {content}
        </div>
    );
};



export default GuestClubCards;
