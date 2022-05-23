import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

function TopMenu({toBlogposts}) {
    const [outLog, toggleOutLog] = useState(false);

    function goBlog() {
        toggleOutLog(!outLog);
        console.log(outLog)
    }

    return (
        <div id="topMenu">
            <NavLink id="toNav" to="/">Home</NavLink>
            {outLog === true ? (toBlogposts === true && (<NavLink id="toNav1" to="/blogposts">Blogposts</NavLink>)) :
                (toBlogposts === false ? <NavLink id="toNav2" to="/login">Login</NavLink> : <button
                    type="button"
                    id="outLog"
                    name="outLog"
                    onClick={goBlog}
                >outLog</button>)}
        </div>
    );
}

export default TopMenu;