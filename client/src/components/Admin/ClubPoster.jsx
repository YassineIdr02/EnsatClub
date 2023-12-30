import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getClubById } from "../../features/Clubs/ClubSlice";

const ClubPoster = ({ clubId }) => {
    const club = useSelector(state => getClubById(state, clubId));

    return (
        <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply shadow-lg">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">{club.name}</h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">{club.description}</p>
                <div className="flex flex-col space-y-4 justify-center sm:flex-row sm:justify-center sm:space-y-0">
                    <Link to="/activities" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        View activities
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                    <Link to={`members`} className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        View members
                    </Link>
                </div>
                <Link to="/join" className="inline-flex justify-center mt-3 hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-green-300  focus:ring-4 focus:ring-gray-400">
                    Join now!
                </Link>
            </div>
        </section>
    );
};

export default ClubPoster;
