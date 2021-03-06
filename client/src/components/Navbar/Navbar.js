import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <div className="navTop">
            <nav>
                <div class="nav-wrapper light-blue darken-3">
                    <a href="#" class="brand-logo center ">Kraven's Last "Job" Hunt</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
