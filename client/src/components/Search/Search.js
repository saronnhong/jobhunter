import React from "react";
// import { HashLink as Link } from 'react-router-hash-link';
import "./style.css";

function Navbar(props) {
    return (
        <div className="navTop">
            
                <div class="nav-wrapper container ">
                    <form>
                        <div class="input-field searchBar">
                            <input id="search" type="search" required />
                            <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                            <i class="material-icons">close</i>
                        </div>
                    </form>
                    <button class="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                </div>
                
            
        </div>



    );
}

export default Navbar;
