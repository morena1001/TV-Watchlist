import React from 'react';
// import '../../App.css';
import { useEffect } from 'react';
import './Home.css';
import { Model } from "../../Logic";

function Home() {
    useEffect(() => {
        document.title = "Home";
        setup();
    });

    return (
        <>
            <div className="title-container">
                <div className="title-wrapper">
                    <h1 className="title">TV shows DB</h1>
                </div>
            </div>

            <div className="form-container">
                <form className="form" name='form'>
                    <div className="search-bar">
                        <input type="text" className="input" name='search' id='input'/>
                        <button className="search-button" id='search button'>
                            Search
                        </button>
                    </div>

                    <div className="sf-container">
                        <div className="preset-container">
                            <span className='preset-text'>Status:</span>
                            <select name="status preset" id="status preset" className="status-presets">
                                <option value="All">All</option>
                                <option value="current">Currently Watching</option>
                                <option value="watchlist">Watchlist</option>
                                <option value="stoped">Stopped Watching</option>
                                <option value="finished">Finished watching</option>
                            </select>
                            <span className='preset-text'>Favorite:</span>
                            <select name="favorite preset" id="favorite preset" className="favorite-presets">
                                <option value="All">All</option>
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </select>
                            <span className='preset-text'>Day:</span>
                            <select name="day preset" id="day preset" className="day-presets">
                                <option value="All">All</option>
                                <option value="sunday">Sunday</option>
                                <option value="monday">Monday</option>
                                <option value="tuesday">Tuesday</option>
                                <option value="wednesday">Wednesday</option>
                                <option value="thursday">Thursday</option>
                                <option value="friday">Friday</option>
                                <option value="saturday">Saturday</option>
                                <option value="other">Other</option>
                            </select>
                            <button className='filter-button' id='filter button'>
                                Filter
                            </button>
                        </div>

                        <div className="sort-container">
                            <span className='sort-text'>Sort by:</span>
                            <select name="sort preset" id="sort preset" className="sort-presets">
                                <option value="None" className='options'>None</option>
                                <option value="Alphabetic" className='options'>Alphabetic</option>
                                <option value="status" className='options'>Status</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>

            <div className="output-container">
                <div className="output-wrapper">
                    <div className="output">
                        <Model />
                    </div>
                </div>
            </div>

            <div className="new-item-container">
                <div className="new-item-wrapper">
                    <button className="new-item-button"><i className="fa-solid fa-plus"></i></button>
                </div>
            </div>
        </>
    );
}

function setup() {
    document.getElementById("search button").addEventListener("click", function (e) {
        e.preventDefault();
    });
    document.getElementById("filter button").addEventListener("click", function (e) {
        e.preventDefault();
    });
}

export default Home;
