import React, { Component } from "react";
// import { HashLink as Link } from 'react-router-hash-link';
import "./style.css";

function Job(props) {
    return (
        <div className="jobApp container">
            {/* <p>props.title</p> */}
            <a className="container grey-text text-darken-2">
                <h5>{props.PositionTitle}</h5>
                <h10>{props.Location}</h10>
                <p>Date: {props.PublicationDate}</p>
                <h6>{props.OrganizationName}</h6>
                <h10>{props.JobSummary}<br></br></h10>
                <a href={props.PositionURI} class="waves-effect waves-light btn applyBtn">More Info</a>
                <a href={props.Apply} class="waves-effect waves-light btn applyBtn">Apply</a>
                {/* <h6>{props.PositionURI}</h6> */}
            </a>
        </div>
    );


}

export default Job;
