import React from 'react';
// import '../../App.css';
import { useEffect } from 'react';
import './Home.css';
import { Model, FilterList, SearchList } from "../../Logic";

let sortMap = {};
sortMap["current sunday"] = 1;
sortMap["current monday"] = 2;
sortMap["current tuesday"] = 3;
sortMap["current wednesday"] = 4;
sortMap["current thursday"] = 5;
sortMap["current friday"] = 6;
sortMap["current saturday"] = 7;
sortMap["current other"] = 8;
sortMap["watchlist"] = 9;
sortMap["finished"] = 10;
sortMap["stopped"] = 11;


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
                        <button className="search-button" id='search button' onClick={SearchList}>
                            Search
                        </button>
                    </div>

                    <div className="sf-container">
                        <div className="preset-container">
                            <span className='preset-text'>Status:</span>
                            <select name="status preset" id="status preset" className="status-presets" onInput={hideDay}>
                                <option value="All">All</option>
                                <option value="current">Currently Watching</option>
                                <option value="watchlist">Watchlist</option>
                                <option value="stoped">Stopped Watching</option>
                                <option value="finished">Finished watching</option>
                            </select>
                            <span className='preset-text'>Favorite:</span>
                            <select name="favorite preset" id="favorite preset" className="favorite-presets">
                                <option value="All">All</option>
                                <option value="no">No</option>
                                <option value="yes">Yes</option>
                            </select>
                            <span className='preset-text' name="day text" id='day text'>Day:</span>
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
                            <button className='filter-button' id='filter button' onClick={filterBy}>
                                Filter
                            </button>
                        </div>

                        <div className="sort-container">
                            <span className='sort-text'>Sort by:</span>
                            <select name="sort preset" id="sort preset" className="sort-presets" onInput={sortBy}>
                                <option value="none" className='options'>None</option>
                                <option value="alphabetic" className='options'>Alphabetic</option>
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

    if (document.forms["form"]["status preset"].value !== "current") {
        document.getElementById("day text").style.display = "none";
        document.getElementById("day preset").style.display = "none";
    }
    // document.getElementById("input").addEventListener("keypress", function(e) {
    //     if (e.target.value !== "") {

    //     }
    //     // console.log(e.target.value);
    // });
}

function hideDay() {
    let status = document.forms["form"]["status preset"].value;
    if (status === "current") {
        document.getElementById("day text").style.display = "inline";
        document.getElementById("day preset").style.display = "inline";
    }
    else {
        document.getElementById("day text").style.display = "none";
        document.getElementById("day preset").style.display = "none";
    }
}

function filterBy() {
    let listCount = document.getElementById("list").childElementCount;
    let status = document.forms["form"]["status preset"].value;
    let day = document.forms["form"]["day preset"].value;
    let favorite = document.forms["form"]["favorite preset"].value;
    for (let i = 0; i < document.getElementById("list").childElementCount; i++) {
        if (favorite === "All" || favorite === (document.getElementById("list").childNodes[i].lastChild.className === 
            "fa-solid fa-star" ? "yes" : "no")) {
            continue;
        }
        
        document.getElementById("list").removeChild(document.getElementById("list").childNodes[i]);
        i--;
        // if (status === "current") {
        //     // && day !== "All" &&
        //     // document.getElementById("list").childNodes[i].childNodes[1].innerHTML !== "current " + day) {
        //     // console.log(document.getElementById("list").childNodes[i].firstChild.innerHTML)
        // }
    }
}

function sortBy() {
    let sort = document.forms["form"]["sort preset"].value;
    let listCount = document.getElementById("list").childElementCount;

    if (sort === "alphabetic") { 
        for (let outer = 0; outer < listCount; outer++) {
            for (let inner = 1; inner < listCount - outer; inner++) {
                if (document.getElementById("list").childNodes[inner - 1].firstChild.innerHTML > 
                    document.getElementById("list").childNodes[inner].firstChild.innerHTML) {
                    document.getElementById("list").insertBefore(
                        document.getElementById("list").childNodes[inner], 
                        document.getElementById("list").childNodes[inner - 1])
                }
            } 
        }
    }
    else if (sort == "status") {
        for (let outer = 0; outer < listCount; outer++) {
            for (let inner = 1; inner < listCount - outer; inner++) {
                if (sortMap[document.getElementById("list").childNodes[inner - 1].childNodes[1].innerHTML] > 
                    sortMap[document.getElementById("list").childNodes[inner].childNodes[1].innerHTML]) {
                    document.getElementById("list").insertBefore(
                        document.getElementById("list").childNodes[inner], 
                        document.getElementById("list").childNodes[inner - 1])
                }
            } 
        }
    }
    else {
        for (let outer = 0; outer < listCount; outer++) {
            for (let inner = 1; inner < listCount - outer; inner++) {
                if (parseInt(document.getElementById("list").childNodes[inner - 1].id) > 
                    parseInt(document.getElementById("list").childNodes[inner].id)) {
                    document.getElementById("list").insertBefore(
                        document.getElementById("list").childNodes[inner], 
                        document.getElementById("list").childNodes[inner - 1])
                }
            } 
        }
    }
}

export default Home;
