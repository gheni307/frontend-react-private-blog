import React from 'react';
import posts from "../data/posts.json";
import {NavLink} from "react-router-dom";


function Blogposts() {

    return (
        <>
            <h1>Blogposts page</h1>
            <ul>
                {posts.map((post) => {
                    return <li key={post.id}>
                        <NavLink to={`blogposts/${post.id}`}>
                            {post.title}
                        </NavLink>
                    </li>
                })}
            </ul>
        </>
    );
}

export default Blogposts;