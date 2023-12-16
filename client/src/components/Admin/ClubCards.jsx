import React from 'react';
import userSlice from '../../features/user/userSlice';

const ClubCard = () => {
    const clubs = [
        {
            id: 1,
            name: "CDH",
            desc: "Lorem ipsum dolor sit amet consectetur,"
        },
        {
            id: 2,
            name: "CSC",
            desc: "consectetur adipisicing elit. Quasi, quo."
        },
        {
            id: 3,
            name: "TELNET",
            desc: "Doloribus natus eum voluptatum accusamus"
        },
        {
            id: 4,
            name: "INDUS",
            desc: "Ullam corporis culpa qui officia deserunt mollitia"
        },
        {
            id: 5,
            name: "CYBER",
            desc: "Ullam corporis culpa qui officia deserunt mollitia"
        },
        {
            id: 6,
            name: "ENACTUS",
            desc: "Ullam corporis culpa qui officia deserunt mollitia"
        }
    ];

    const renderedClubs = clubs.map(club => (
        <div className="card w-[83%] bg-base-100 shadow-xl mx-auto my-4">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"/></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {club.name}
                    {  (club.id === 2 || club.id === 4) && (
                        <div className="badge badge-warning">No presidant</div>
                    )}
                </h2>
                <p>{club.desc}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline hover:cursor-pointer">Activités</div>
                    <div className="badge badge-outline hover:cursor-pointer">Bureau</div>
                    <div className="badge badge-outline hover:cursor-pointer">More details</div>
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
