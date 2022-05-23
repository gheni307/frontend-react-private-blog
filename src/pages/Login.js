import React from 'react';
import Blogposts from "./Blogposts";


function Login({goTo, children}) {
    return (
        <>
            {goTo === true ? <Blogposts/> : <div>
                <h1>Login page</h1>
                {children}
            </div>}
        </>
    );
}

export default Login;