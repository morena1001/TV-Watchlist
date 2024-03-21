import React from 'react';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Resource.css';


export function Resource() {
    const { id } = useParams();

    useEffect(() => {
        fetch("/shows/" + id)
        .then((res) => res.json())
        .then((data) => {viewItem(data[0])});
    }, []);

    return (
        <>
        <Link className="link" to="/">
            <button className="back-button" ><i class="fa-solid fa-arrow-left"></i></button>
        </Link>
            <div className="item-container" id='item-container'>
                {/* <div className="item-wrapper" id="item-wrapper">
                    <div className="item-title" id='item-title'>A Certain Scientific Railgun</div>
                    <input type="text" className="title-update" name='title update' id='title update'/>
                    <div className="status-container">
                        Status:
                        <span className="status-span" id='status-span'>watchlist</span>
                        <select name="status update" id="status update" className="status-update" onInput={hideDay}>
                            <option value="All">All</option>
                            <option value="current">Currently Watching</option>
                            <option value="watchlist">Watchlist</option>
                            <option value="stopped">Stopped Watching</option>
                            <option value="finished">Finished watching</option>
                        </select>
                        <select name="day update" id="day update" className="day-update">
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
                    </div>
                    <div className="favorite-container">
                        Favorite:
                        <span className="favorite-span" id='favorite-span'>no</span>
                        <select name="favorite update" id="favorite update" className="favorite-update">
                            <option value="All">All</option>
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                        </select>
                    </div>
                    <button className='edit-button' id='edit' name='edit' onClick={update}>
                        <i className='fa-solid fa-pen-to-square'></i>
                    </button>
                    <button className='update-button' id='update' name='update'>
                        Update
                    </button>
                </div> */}
            </div>
        </>
    );
}

function setup() {
    document.getElementById("edit").addEventListener("click", function (e) {
        e.preventDefault();
    });
    document.getElementById("update").addEventListener("click", function (e) {
        e.preventDefault();
    });

    document.getElementById("title update").style.display = "none";
    document.getElementById("status update").style.display = "none";
    document.getElementById("day update").style.display = "none";
    document.getElementById("favorite update").style.display = "none";
}

function viewItem(data) {
    let itemWrapper = document.createElement("div");
    itemWrapper.setAttribute("class", "item-wrapper");
    itemWrapper.setAttribute("id", "item-wrapper");

    let titleContainer = document.createElement("div");
    titleContainer.setAttribute("class", "title-container");

    let itemTitleSpan = document.createElement("span");
    itemTitleSpan.setAttribute("class", "resource-title-span");
    itemTitleSpan.setAttribute("id", "title span");
    itemTitleSpan.innerHTML = "Title:";
    itemTitleSpan.style.display = "none";

    let itemTitle = document.createElement("div");
    itemTitle.setAttribute("class", "item-title");
    itemTitle.setAttribute("id", "item title");
    itemTitle.innerHTML = data.title;

    let itemTitleUpdate = document.createElement("input");
    itemTitleUpdate.setAttribute("type", "text");
    itemTitleUpdate.setAttribute("class", "title-update");
    itemTitleUpdate.setAttribute("name", "title update");
    itemTitleUpdate.setAttribute("id", "title update");
    itemTitleUpdate.value = data.title;

    let statusContainer = document.createElement("div");
    statusContainer.setAttribute("class", "status-container");
    statusContainer.innerHTML = "Status:";

    let statusSpan = document.createElement("span");
    statusSpan.setAttribute("class", "status-span");
    statusSpan.setAttribute("id", "status span");
    statusSpan.innerHTML = data.status;

    let statusSpanSelect = document.createElement("select");
    statusSpanSelect.setAttribute("name", "status update");
    statusSpanSelect.setAttribute("id", "status update");
    statusSpanSelect.setAttribute("class", "status-update");

    let statusOption1 = document.createElement("option");
    statusOption1.value = "current";
    statusOption1.innerHTML = "Currently Watching";

    let statusOption2 = document.createElement("option");
    statusOption2.value = "watchlist";
    statusOption2.innerHTML = "Watchlist";

    let statusOption3 = document.createElement("option");
    statusOption3.value = "stopped";
    statusOption3.innerHTML = "Stopped Watching";

    let statusOption4 = document.createElement("option");
    statusOption4.value = "finished";
    statusOption4.innerHTML = "Finished Watching";

    let daySpan = document.createElement("span");
    daySpan.setAttribute("class", "day-span");
    daySpan.setAttribute("id", "day span");
    daySpan.innerHTML = "Day:";
    daySpan.style.display = "none";

    let daySelect = document.createElement("select");
    daySelect.setAttribute("name", "day update");
    daySelect.setAttribute("id", "day update");
    daySelect.setAttribute("class", "day-update");

    let dayOption1 = document.createElement("option");
    dayOption1.value = "sunday";
    dayOption1.innerHTML = "Sunday";

    let dayOption2 = document.createElement("option");
    dayOption2.value = "monday";
    dayOption2.innerHTML = "Monday";
    
    let dayOption3 = document.createElement("option");
    dayOption3.value = "tuesday";
    dayOption3.innerHTML = "Tuesday";

    let dayOption4 = document.createElement("option");
    dayOption4.value = "wednesday";
    dayOption4.innerHTML = "Wednesday";

    let dayOption5 = document.createElement("option");
    dayOption5.value = "thursday";
    dayOption5.innerHTML = "Thursday";

    let dayOption6 = document.createElement("option");
    dayOption6.value = "friday";
    dayOption6.innerHTML = "Friday";

    let dayOption7 = document.createElement("option");
    dayOption7.value = "saturday";
    dayOption7.innerHTML = "Saturday";

    let dayOption8 = document.createElement("option");
    dayOption8.value = "other";
    dayOption8.innerHTML = "Other";

    let favoriteContainer = document.createElement("div");
    favoriteContainer.setAttribute("class", "favorite-container");
    favoriteContainer.innerHTML = "Favorite:";

    let favoriteSpan = document.createElement("span");
    favoriteSpan.setAttribute("class", "favorite-span");
    favoriteSpan.setAttribute("id", "favorite span");
    favoriteSpan.innerHTML = data.favorite;

    let favoriteSelect = document.createElement("select");
    favoriteSelect.setAttribute("name", "favorite update");
    favoriteSelect.setAttribute("id", "favorite update");
    favoriteSelect.setAttribute("class", "favorite-update");

    let favoriteOption1 = document.createElement("option");
    favoriteOption1.value = "no";
    favoriteOption1.innerHTML = "No";

    let favoriteOption2 = document.createElement("option");
    favoriteOption2.value = "yes";
    favoriteOption2.innerHTML = "Yes";

    let editButton = document.createElement("button");
    editButton.setAttribute("class", "edit-button");
    editButton.setAttribute("id", "edit");
    editButton.onclick = update;

    let icon = document.createElement("i");
    icon.setAttribute("class", "fa-solid fa-pen-to-square");

    let updateButton = document.createElement("button");
    updateButton.setAttribute("class", "update-button");
    updateButton.setAttribute("id", "update");

    let icon2 = document.createElement("i");
    icon2.setAttribute("class", "fa-solid fa-trash");

    itemWrapper.appendChild(titleContainer);
    titleContainer.appendChild(itemTitleSpan);
    titleContainer.appendChild(itemTitle);
    titleContainer.appendChild(itemTitleUpdate);
    itemWrapper.appendChild(statusContainer);
    statusContainer.appendChild(statusSpan);

    statusSpanSelect.appendChild(statusOption1);
    statusSpanSelect.appendChild(statusOption2);
    statusSpanSelect.appendChild(statusOption3);
    statusSpanSelect.appendChild(statusOption4);
    statusSpanSelect.value = data.status.includes("current") ? "current" : data.status;
    statusContainer.appendChild(statusSpanSelect);
    statusContainer.appendChild(daySpan);

    daySelect.appendChild(dayOption1);
    daySelect.appendChild(dayOption2);
    daySelect.appendChild(dayOption3);
    daySelect.appendChild(dayOption4);
    daySelect.appendChild(dayOption5);
    daySelect.appendChild(dayOption6);
    daySelect.appendChild(dayOption7);
    daySelect.appendChild(dayOption8);
    daySelect.value = data.status.includes("current") ? data.status.substring(8) : "All";
    statusContainer.appendChild(daySelect);
    statusSpanSelect.oninput = hideDay;

    itemWrapper.appendChild(favoriteContainer);
    favoriteContainer.appendChild(favoriteSpan);

    favoriteSelect.appendChild(favoriteOption1);
    favoriteSelect.appendChild(favoriteOption2);
    favoriteSelect.value = data.favorite;
    favoriteContainer.appendChild(favoriteSelect);

    itemWrapper.appendChild(editButton);
    editButton.appendChild(icon);
    itemWrapper.appendChild(updateButton);
    updateButton.appendChild(icon2);

    document.getElementById("item-container").appendChild(itemWrapper);
    setup();
}

function hideDay() {
    let status = document.getElementById("status update").value;
    if (status === "current") {
        document.getElementById("day span").style.display = "inline";
        document.getElementById("day update").style.display = "inline";
    }
    else {
        document.getElementById("day span").style.display = "none";
        document.getElementById("day update").style.display = "none";
    }
}

function update() {
    if (document.getElementById("edit").innerHTML !== "Cancel") {
        document.getElementById("item title").style.display = "none";
        document.getElementById("status span").style.display = "none";
        document.getElementById("favorite span").style.display = "none";

        document.getElementById("title span").style.display = "inline";
        document.getElementById("title update").style.display = "inline";
        document.getElementById("status update").style.display = "inline";
        document.getElementById("day span").style.display = document.getElementById("status update").value === "current" ? "inline" : "none";
        document.getElementById("day update").style.display = document.getElementById("status update").value === "current" ? "inline" : "none";
        document.getElementById("favorite update").style.display = "inline";
        
        document.getElementById("edit").innerHTML = "Cancel";
        document.getElementById("edit").style.width = "90px";

        document.getElementById("update").innerHTML = "Update";
        document.getElementById("update").style.width = "90px";
    }
    else {
        document.getElementById("item title").style.display = "inline";
        document.getElementById("status span").style.display = "inline";
        document.getElementById("favorite span").style.display = "inline";

        document.getElementById("title span").style.display = "none";
        document.getElementById("title update").style.display = "none";
        document.getElementById("status update").style.display = "none";
        document.getElementById("day span").style.display = "none";
        document.getElementById("day update").style.display = "none";
        document.getElementById("favorite update").style.display = "none";

        let icon = document.createElement("i");
        icon.setAttribute("class", "fa-solid fa-pen-to-square");
        document.getElementById("edit").innerHTML = "";
        document.getElementById("edit").appendChild(icon);
        document.getElementById("edit").style.width = "55px";

        let icon2 = document.createElement("i");
        icon2.setAttribute("class", "fa-solid fa-trash");
        document.getElementById("update").innerHTML = "";
        document.getElementById("update").appendChild(icon2);
        document.getElementById("update").style.width = "55px";
    }
}
