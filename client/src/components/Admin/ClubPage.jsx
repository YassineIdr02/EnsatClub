import React from 'react'
import ClubPoster from './ClubPoster'
import ActivityPreview from './ActivityPreview'
import AboutClub from './AboutClub'
import JoinClub from './JoinClub'
import { useParams } from 'react-router-dom'

const ClubPage = () => {
    const {clubId} = useParams()

    return (
        <>
            <ClubPoster clubId={clubId} />
            <ActivityPreview clubId={clubId} />
            <AboutClub clubId={clubId} />
            <JoinClub clubId={clubId} />
        </>
    )
}

export default ClubPage
