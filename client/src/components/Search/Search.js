import React, { Component } from "react";
// import { HashLink as Link } from 'react-router-hash-link';
import "./style.css";
import Job from '../Job';
const axios = require('axios');


class Search extends Component {
    state = {
        searchContent: "FBI",
        page: 1,
        resultPages: 0,
        searchResults: []
    }

    searchSubmit = () => {
        var searchWord = this.state.searchContent;
        var page = this.state.page;
        axios.get("https://data.usajobs.gov/api/search?Page=" + page + "&Keyword=" + searchWord, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization-Key": "jayP4YcKYrBRgmQJyKIXOd3JYHOW48+Y3RvmpKkxIdw="
            }
        })
            .then(res => {
                this.setState({ searchResults: res.data.SearchResult.SearchResultItems, resultPages: res.data.SearchResult.UserArea.NumberOfPages })
                console.log(this.state.searchResults);
                console.log(res);
                // alert("number of available pages of search results = " + this.state.resultPages);
                if (this.state.searchResults.length === 0) {
                    alert("No jobs found!");
                    this.setState({ searchResults: [] })
                }
            }).catch(error => {
                console.log(error);
            });

    }

    render() {

        return (
            <div className="searchApp">
                <div class="nav-wrapper container ">
                    <form>
                        <div class="input-field searchBar">
                            <input id="search" type="search" value={this.state.searchContent} onChange={e => this.setState({ searchContent: e.target.value })} />
                            <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                            <i class="material-icons">close</i>
                        </div>
                    </form>
                    <button class="btn waves-effect waves-light btn-small" type="submit" name="action" onClick={() => {
                        this.setState({ page: 1 });
                        this.searchSubmit();
                    }}>Search</button>
                </div>
                <ul class="pagination center">
                    <li id={this.state.resultPages < 1 ? "hide" : "view"} class={this.state.page === 1 ? "disabled" : "waves-effect"}><a href="#!"><i class="material-icons" onClick={() => {
                        this.setState({ page: this.state.page - 1 }, () => this.searchSubmit());
                    }}>chevron_left</i></a></li>
                    <li id={this.state.resultPages < 1 ? "hide" : "view"} class={this.state.page === 1 ? "active" : "waves-effect"}><a href="#!" onClick={() => {
                        this.setState({ page: 1 }, () => this.searchSubmit());
                    }}>1</a></li>
                    <li id={this.state.resultPages < 2 ? "hide" : "view"} class={this.state.page === 2 ? "active" : "waves-effect"}><a href="#!" onClick={() => {
                        this.setState({ page: 2 }, () => this.searchSubmit());
                    }}>2</a></li>
                    <li id={this.state.resultPages < 3 ? "hide" : "view"} class={this.state.page === 3 ? "active" : "waves-effect"}><a href="#!" onClick={() => {
                        this.setState({ page: 3 }, () => this.searchSubmit());
                    }}>3</a></li>
                    <li id={this.state.resultPages < 4 ? "hide" : "view"} class={this.state.page === 4 ? "active" : "waves-effect"}><a href="#!" onClick={() => {
                        this.setState({ page: 4 }, () => this.searchSubmit());
                    }}>4</a></li>
                    <li id={this.state.resultPages < 5 ? "hide" : "view"} class={this.state.page === 5 ? "active" : "waves-effect"}><a href="#!" onClick={() => {
                        this.setState({ page: 5 }, () => this.searchSubmit());
                    }}>5</a></li>
                    <li id={this.state.resultPages < 1 ? "hide" : "view"} class="waves-effect"><a href="#!"><i class="material-icons" onClick={() => {
                        this.setState({ page: this.state.page + 1 }, () => this.searchSubmit());
                    }}>chevron_right</i></a></li>
                </ul>
                {this.state.searchResults.map((jobs) =>
                    <Job PositionTitle={jobs.MatchedObjectDescriptor.PositionTitle} OrganizationName={jobs.MatchedObjectDescriptor.OrganizationName} JobSummary={jobs.MatchedObjectDescriptor.UserArea.Details.JobSummary} PositionURI={jobs.MatchedObjectDescriptor.PositionURI} Location={jobs.MatchedObjectDescriptor.PositionLocationDisplay} Apply={jobs.MatchedObjectDescriptor.UserArea.Details.ApplyOnlineUrl} PublicationDate ={jobs.MatchedObjectDescriptor.PublicationStartDate}/>
                )}
            </div>
        );
    }
}

export default Search;
