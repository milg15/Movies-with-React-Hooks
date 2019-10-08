import React from "react";

//Components let you split the UI into independent, 
//reusable pieces, and think about each piece in isolation.
const Header = (props) => {
    return (
        <header className = "App-Header">
            <h2>{props.text}</h2>
        </header>
    );
};

export default Header;