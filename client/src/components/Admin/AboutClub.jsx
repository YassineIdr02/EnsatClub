import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../../assets/EnsatClub.png'
import { getClubById, getClubPresident, getPresident } from '../../features/Clubs/ClubSlice'

const AboutClub = ({clubId}) => {
  const club = useSelector(state => getClubById(state, clubId))
  const dispatch = useDispatch()
  const President = useSelector(getClubPresident)

  useEffect(() => {
    dispatch(getPresident({clubId})); 
  }, [clubId])
  
  return (
    <section className=' h-[40%] p-10 '>
      <h2 className="text-5xl text-center font-bold mb-4">About {club.name}</h2>
      <div className=' flex flex-row justify-between items-center'>
        <div className='w-[75%] flex flex-wrap'>
          <p className='text-lg text-gray-400'>CDH is a club that focuses
            on developing skills in computer science and programming. We provide an environment where students can learn, practice, compete, and collaborate with peers
            on developing the skills of its members in computer science and data analysis. The club was founded by two students, who were passionate about coding and
            on developing skills in competitive programming. We aim to provide an environment where students can learn, grow and showcase their coding abilities. Our
            on developing and showcasing the skills of computer science students. We aim to provide an environment where students can learn, grow, and collaborate
            on developing and showcasing the skills of students in computer science, data analysis,
            software engineering, machine learning, artificial intelligence, web development, and more.
            We aim to provide an environment where members can learn, collaborate, and grow together.
          </p>
        </div>
        <div className='flex flex-col gap-3 items-center'>
          {/* Presidant name */}
          <h2 className="text-3xl font-extrabold ">{President?.name}</h2> 
          {/* Photo */}
          <div className="w-72 h-48 avatar rounded-full overflow-hidden mr-4">
            <img src={logo} alt="" className="object-cover w-full h-full" />
          </div>
          <p className="my-4 text-lg text-gray-500">Club president</p>
        </div>
      </div>
      <hr className="my-8 border-0 h-0.5 w-[60%] bg-slate-300 mx-auto" />
    </section>
  )
}

export default AboutClub
