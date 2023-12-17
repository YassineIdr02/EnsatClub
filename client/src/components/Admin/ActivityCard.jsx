import React from 'react'

const ActivityCard = ({clubId}) => {

    const activities = [
        {
            id: 1,
            image: null,
            title: "Running",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime fuga similique omnis "
        },
        {
            id: 2,
            image: null,
            title: "charity",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime fuga similique omnis "
        },
        {
            id: 3,
            image: null,
            title: "picnic",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime fuga similique omnis "
        },
    ]

    const cardChunk = (arr) => {
        const chunckedCards = []
        for (let i = 0; i < 3; i++) {
            if (arr[i])
                chunckedCards.push(arr[i])
        }
        return chunckedCards
    }

    const renderCards = cardChunk(activities).map(activity => (
        <div className="card w-[30%] glass" key={activity.id}>
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{activity.title}</h2>
                <p>{activity.content}...</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View more</button>
                </div>
            </div>
        </div>
    ));

    return (
        <section className='flex flex-row justify-between'>
            {renderCards}
        </section>
    )
}

export default ActivityCard
