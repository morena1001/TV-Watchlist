import React from 'react';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
// import './Home.css';
import './CreateResource.css';

export function CreateResource() {
    return (
        <>
            <Link className="link" to="/">
                <button className="back-button" ><i class="fa-solid fa-arrow-left"></i></button>
            </Link>
            <form className='form' name='form'>
                <div className="title-container">
                    <span className="title-span">Title:</span>
                    <input type="text" className="title-input" name='title' id='title'/>
                </div>
                <div className="statusContainer">
                    <span className="status-span">Status:</span>
                    <select name="status-option" id="status-option" className="status-option" onInput={hideDay}>
                        <option value=""></option>
                        <option value="current">Currently Watching</option>
                        <option value="watchlist">Watchlist</option>
                        <option value="stopped">Stopped Watching</option>
                        <option value="finished">Finished watching</option>
                    </select>
                    <span className="day-span">Day:</span>
                    <select name="day-option" id="day-option" className="day-option">
                        <option value=""></option>
                        <option value="sunday">Sunday</option>
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                        <option value="saturday">Saturday</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="favoriteContainer">
                    <span className="favorite-span">Favorite:</span>
                    <select name="favorite-option" id="favorite-option" className="favorite-option">
                        <option value=""></option>
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                </div>
                <button className='create-button' id='create' name='create'>
                        Create
                </button>

            </form>
        </>
    );
}

function hideDay() {
    let status = document.getElementById("status update").value;
    if (status === "current") {
        document.getElementById("day update").style.display = "inline";
    }
    else {
        document.getElementById("day update").style.display = "none";
    }
}
