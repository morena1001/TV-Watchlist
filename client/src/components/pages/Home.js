import React from 'react';
// import '../../App.css';
import { useEffect } from 'react';
import './Home.css';
import { Model } from "../../Logic";

function Home() {
    useEffect(() => {
        document.title = "Home";
    });

    return (
        <>
            <div className="title-container">
                <div className="title-wrapper">
                    <h1 className="title">TV shows DB</h1>
                </div>
            </div>

            <form className="form" name='form'>
                <div className="preset-container">
                    Status:
                    <select name="status preset" id="status preset" className="status-presets">
                        <option value="All">All</option>
                        <option value="current">Currently Watching</option>
                        <option value="watchlist">Watchlist</option>
                        <option value="stoped">Stopped Watching</option>
                        <option value="finished">Finished watching</option>
                    </select>
                    Favorite:
                    <select name="favorite preset" id="favorite preset" className="favorite-presets">
                        <option value="All">All</option>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select>
                    Day:
                    <select name="day preset" id="day preset" className="day-presets">
                        <option value="All">All</option>
                        <option value="sunday">Sunday</option>
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                        <option value="Saturday"></option>
                        <option value="Other"></option>
                    </select>
                    <button className='button' id='button'>
                        Filter
                    </button>
                </div>
                <div className="search-bar">
                    <input type="text" className="input" name='search' id='input'/>
                    <button className="button" id='search button'>
                        Search
                    </button>
                </div>
            </form>

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

export default Home;
