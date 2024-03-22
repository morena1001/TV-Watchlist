import React from 'react';
import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
// import './Home.css';
import './CreateResource.css';
import { CreateItem } from '../../Logic';

export function CreateResource() {
    const navigate = useNavigate();
    useEffect(() => {
        setup();
    }, []);

    function setup() {
        document.getElementById("create").addEventListener("click", function(e) {
            e.preventDefault();
            checkInput();
            if (checkInput()) {
                let title = document.forms["form"]["title"].value;
                let status = document.forms["form"]["status"].value;
                let day = document.forms["form"]["day"].value;
                let favorite = document.forms["form"]["favorite"].value;
                let string = '{"title": "' + title + '", "status": "' + (status + (day === "" ? "" : (" " + day))) + '", "favorite": "' + favorite + '"}';
                CreateItem(JSON.parse(string), navigate);
            }
        });
    }

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
                    <select name="status" id="status option" className="status-option" onInput={hideDay}>
                        <option value=""></option>
                        <option value="current">Currently Watching</option>
                        <option value="watchlist">Watchlist</option>
                        <option value="stopped">Stopped Watching</option>
                        <option value="finished">Finished watching</option>
                    </select>
                    <span className="day-span" id='day-span'>Day:</span>
                    <select name="day" id="day-option" className="day-option">
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
                    <select name="favorite" id="favorite-option" className="favorite-option">
                        <option value=""></option>
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                </div>
                {/* <Link className="link" id='link' to="/"> */}
                    <button className='create-button' id='create' name='create'>
                            Create
                    </button>
                {/* </Link> */}
            </form>
        </>
    );
}

function hideDay() {
    let status = document.forms["form"]["status"].value;
    if (status === "current") {
        document.getElementById("day-span").style.display = "inline";
        document.getElementById("day-option").style.display = "inline";
    }
    else {
        document.forms["form"]["day"].value = "";
        document.getElementById("day-span").style.display = "none";
        document.getElementById("day-option").style.display = "none";
    }
}

function checkInput() {
    let title = document.forms["form"]["title"].value;
    let status = document.forms["form"]["status"].value;
    let day = document.forms["form"]["day"].value;
    let favorite = document.forms["form"]["favorite"].value;
    let message = "";

    if (title === "") {
        message += "Title";
    }
    if (status === "") {
        message += message.length == 0 ? "Status" : ", status";
    }
    if (status === "current" && day === "") {
        message += message.length == 0 ? "Day" : ", day";
    }
    if (favorite === "") {
        message += message.length == 0 ? "Favorite" : ", favorite";
    }
    if (message.length != 0) {
        message += "\nCannot be blank";
        alert(message);
        return false;
    }
    return true;
}
