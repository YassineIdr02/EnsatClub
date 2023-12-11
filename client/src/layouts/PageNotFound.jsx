import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <>
            <div class="container mx-auto my-auto">
                <section class="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
                    <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                        <div class="max-w-md text-center">
                            <h2 class="mb-8 font-extrabold text-9xl dark:text-gray-600">
                                <span class="sr-only ">Error</span>404
                            </h2>
                            <p class="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                            <p class="mt-4 mb-8 dark:text-red">But don't worry, you can find plenty of other things on our homepage.</p>
                            <Link path="/" ><button className="btn btn-accent">Go back to the home page</button></Link>
                        </div>
                    </div>
                </section>
            </div>
        </>

    )
}