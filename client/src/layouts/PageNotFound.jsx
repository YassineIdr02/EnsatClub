import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <>
            <div className="container mx-auto my-auto h-screen">
                <section className="flex items-center h-full p-16  dark:text-gray-600">
                    <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                        <div className="max-w-md text-center">
                            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                                <span className="sr-only ">Error</span>404
                            </h2>
                            <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                            <p className="mt-4 mb-8 dark:text-red">But don't worry, you can find plenty of other things on our homepage.</p>
                            <Link path="/" ><button className="btn btn-accent">Go back to the home page</button></Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}