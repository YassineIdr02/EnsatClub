import React, { useEffect } from 'react';
import ClubPoster from './ClubPoster';
import ActivityPreview from './ActivityPreview';
import AboutClub from './AboutClub';
import JoinClub from './JoinClub';
import { getPresidentByClubId, getClubs, getAllClubs } from '../../features/Clubs/ClubSlice';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NoPresident from './NoPresident';

const ClubPage = () => {
  const dispatch = useDispatch();
  const { clubId } = useParams();
  const clubs = useSelector(getAllClubs);
  const club = useSelector(state => getPresidentByClubId(state, clubId));
  const isDataLoading = !clubs.length; // Checking if clubs data is not yet loaded

  useEffect(() => {
    dispatch(getClubs());
  }, [dispatch]);

  // If data is still loading, display a loading message or spinner
  if (isDataLoading) {
    return <div>Loading...</div>;
  }

  // Once the data is loaded, check if the club president exists or not
  const content = club.president_id ?
    (
      <div className='snap-y snap-mandatory overflow-scroll h-screen '>
        <ClubPoster clubId={clubId} className='snap-start'/>
        <ActivityPreview clubId={clubId} className='snap-start' />
        <AboutClub clubId={clubId} className='snap-start' />
        <JoinClub clubId={clubId} className='snap-start' />
      </div>
    ) :
    (
      <NoPresident />
    );

    return <>{content}</>;
};

export default ClubPage;
