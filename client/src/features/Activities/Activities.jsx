import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const Posts = () => {
    const posts = [
        // Replace this with your actual data for posts
        {
            id: 1,
            author: 'Elon Musk',
            time: 'Some time ago',
            content: 'This is a post content.',
            isLiked: false,
        },
        {
            id: 2,
            author: 'Elon Musk',
            time: 'Some time ago',
            content: 'This is a post content.',
            isLiked: false,
        },
        // Add more post objects as needed
    ];

    return (
        <>
            {posts.map((post, index) => (
                <div key={index}>
                    <hr className="w-full" />
                    <div className="flex flex-col gap-4 w-full my-2 p-3">
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-row gap-4">
                                <div className="avatar cursor-pointer">
                                    <div className="w-14 rounded-full">
                                        <img src="../assets/Profile.jpg" alt="Profile" />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-xl">{post.author}</p>
                                    <p className="text-sm text-slate-300">{post.time}</p>
                                </div>
                            </div>
                            <div className="dropdown dropdown-bottom hover:cursor-pointer">
                                <label tabIndex="0">
                                    <FontAwesomeIcon icon={faEllipsisVertical} className="hover:cursor-pointer" />
                                </label>
                                <ul tabIndex="0" className="dropdown-content z-[1] menu shadow bg-base-200 rounded-box w-56">
                                    <li>
                                        <a>Edit</a>
                                    </li>
                                    <li>
                                        <a>Delete post</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {post.content ? (<p>{post.content}</p>) : (
                            <textarea
                                type="text"
                                className="input input-lg w-full h-full min-h-16 max-h-40"
                                value={post.content}
                            ></textarea>
                        )}
                        
                    </div>
                </div>
            ))}
        </>
    );
};

export default Posts;
