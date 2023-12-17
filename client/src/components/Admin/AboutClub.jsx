import React from 'react'
import logo from '../../assets/EnsatClub.png'

const AboutClub = () => {
  return (
    <section className=' h-[40%] p-10'>
      <h2 className="text-5xl text-center font-bold mb-4">About CDH</h2>
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
          <h2 class="text-3xl font-extrabold ">Ayman Benamri</h2> 
          {/* Photo */}
          <div className="w-72 h-48 avatar rounded-full overflow-hidden mr-4">
            <img src={logo} alt="" className="object-cover w-full h-full" />
          </div>
          <p class="my-4 text-lg text-gray-500">Club presidant</p>
        </div>
      </div>
    </section>
  )
}

export default AboutClub
