import React from 'react';
import posts from '../data/posts.json'
import {useParams} from "react-router-dom";

function BlogpostsId() {
    const {id} = useParams();
    const fetchData = posts.find((post) => {
        return post.id === id;
    })
    return (
        <div>
            <h1>{fetchData.title}</h1>
            <br/>
            <h2>{fetchData.date}</h2>
            <br/>
            <p>{fetchData.content}</p>

        </div>
    );
}

export default BlogpostsId;