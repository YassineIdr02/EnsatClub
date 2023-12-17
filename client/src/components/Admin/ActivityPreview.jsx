import ActivityCard from './ActivityCard.jsx'
import {Link} from 'react-router-dom'
const ActivityPreview = () => {
  return (
    <section className=" h-[65%] p-5 flex flex-col items-center">
        <h2 className="text-5xl text-center font-bold mb-4">Activity Preview</h2>
            <ActivityCard/>
            <Link><button className='btn btn-accent w-[110%] h-[60%] my-5'>Check out more activities</button></Link>
    </section>
  )
}

export default ActivityPreview
