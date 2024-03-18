import React from 'react';
// import '../../App.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Home.css';
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
    document.getElementById("update").style.display = "none";
}

function viewItem(data) {
    let itemWrapper = document.createElement("div");
    itemWrapper.setAttribute("class", "item-wrapper");
    itemWrapper.setAttribute("id", "item-wrapper");

    let itemTitle = document.createElement("div");
    itemTitle.setAttribute("class", "item-title");
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
    statusSpan.innerHTML = data.status;

    let statusSpanSelect = document.createElement("select");
    statusSpanSelect.setAttribute("name", "status update");
    statusSpanSelect.setAttribute("id", "status update");
    statusSpanSelect.setAttribute("class", "status-update");

    let statusOption1 = document.createElement("option");
    statusOption1.value = "All";
    statusOption1.innerHTML = "All";

    let statusOption2 = document.createElement("option");
    statusOption2.value = "current";
    statusOption2.innerHTML = "Currently Watching";

    let statusOption3 = document.createElement("option");
    statusOption3.value = "watchlist";
    statusOption3.innerHTML = "Watchlist";

    let statusOption4 = document.createElement("option");
    statusOption4.value = "stopped";
    statusOption4.innerHTML = "Stopped Watching";
    
    let statusOption5 = document.createElement("option");
    statusOption5.value = "finished";
    statusOption5.innerHTML = "Finished Watching";

    let daySelect = document.createElement("select");
    daySelect.setAttribute("name", "day update");
    daySelect.setAttribute("id", "day update");
    daySelect.setAttribute("class", "day-update");

    let dayOption1 = document.createElement("option");
    dayOption1.value = "All";
    dayOption1.innerHTML = "All";

    let dayOption2 = document.createElement("option");
    dayOption2.value = "sunday";
    dayOption2.innerHTML = "Sunday";
    
    let dayOption3 = document.createElement("option");
    dayOption3.value = "monday";
    dayOption3.innerHTML = "Monday";

    let dayOption4 = document.createElement("option");
    dayOption4.value = "tuesday";
    dayOption4.innerHTML = "Tuesday";

    let dayOption5 = document.createElement("option");
    dayOption5.value = "wednesday";
    dayOption5.innerHTML = "Wednesday";

    let dayOption6 = document.createElement("option");
    dayOption6.value = "thursday";
    dayOption6.innerHTML = "Thursday";

    let dayOption7 = document.createElement("option");
    dayOption7.value = "friday";
    dayOption7.innerHTML = "Friday";

    let dayOption8 = document.createElement("option");
    dayOption8.value = "saturday";
    dayOption8.innerHTML = "Saturday";

    let dayOption9 = document.createElement("option");
    dayOption9.value = "other";
    dayOption9.innerHTML = "Other";

    let favoriteContainer = document.createElement("div");
    favoriteContainer.setAttribute("class", "favorite-container");
    favoriteContainer.innerHTML = "Favorite:";

    let favoriteSpan = document.createElement("span");
    favoriteSpan.setAttribute("class", "favorite-span");
    favoriteSpan.innerHTML = data.favorite;

    let favoriteSelect = document.createElement("select");
    favoriteSelect.setAttribute("name", "favorite update");
    favoriteSelect.setAttribute("id", "favorite update");
    favoriteSelect.setAttribute("class", "favorite-update");

    let favoriteOption1 = document.createElement("option");
    favoriteOption1.value = "All";
    favoriteOption1.innerHTML = "All";

    let favoriteOption2 = document.createElement("option");
    favoriteOption2.value = "no";
    favoriteOption2.innerHTML = "No";
    
    let favoriteOption3 = document.createElement("option");
    favoriteOption3.value = "yes";
    favoriteOption3.innerHTML = "Yes";

    let editButton = document.createElement("button");
    editButton.setAttribute("class", "edit-button");
    editButton.setAttribute("id", "edit");
    editButton.onclick = update;

    let icon = document.createElement("i");
    icon.setAttribute("class", "fa-solid fa-pen-to-square");

    let updateButton = document.createElement("button");
    updateButton.setAttribute("class", "update-button");
    updateButton.setAttribute("id", "update");
    updateButton.innerHTML = "Update";

    itemWrapper.appendChild(itemTitle);
    itemWrapper.appendChild(itemTitleUpdate);
    itemWrapper.appendChild(statusContainer);
    statusContainer.appendChild(statusSpan);

    statusSpanSelect.appendChild(statusOption1);
    statusSpanSelect.appendChild(statusOption2);
    statusSpanSelect.appendChild(statusOption3);
    statusSpanSelect.appendChild(statusOption4);
    statusSpanSelect.appendChild(statusOption5);
    statusSpanSelect.value = data.status.includes("current") ? "current" : data.status;
    statusContainer.appendChild(statusSpanSelect);
    statusSpanSelect.oninput = hideDay;

    daySelect.appendChild(dayOption1);
    daySelect.appendChild(dayOption2);
    daySelect.appendChild(dayOption3);
    daySelect.appendChild(dayOption4);
    daySelect.appendChild(dayOption5);
    daySelect.appendChild(dayOption6);
    daySelect.appendChild(dayOption7);
    daySelect.appendChild(dayOption8);
    daySelect.appendChild(dayOption9);
    daySelect.value = data.status.includes("current") ? data.status.substring(8) : "All";
    statusContainer.appendChild(daySelect);

    itemWrapper.appendChild(favoriteContainer);
    favoriteContainer.appendChild(favoriteSpan);

    favoriteSelect.appendChild(favoriteOption1);
    favoriteSelect.appendChild(favoriteOption2);
    favoriteSelect.appendChild(favoriteOption3);
    favoriteSelect.value = data.favorite;
    favoriteContainer.appendChild(favoriteSelect);

    itemWrapper.appendChild(editButton);
    editButton.append(icon);
    itemWrapper.appendChild(updateButton);

    document.getElementById("item-container").appendChild(itemWrapper);
    setup();
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

function update() {
    if (document.getElementById("edit").innerHTML !== "Cancel") {
        document.getElementById("title update").style.display = "inline";
        document.getElementById("status update").style.display = "inline";
        document.getElementById("day update").style.display = document.getElementById("status update").value === "current" ? "inline" : "none";
        document.getElementById("favorite update").style.display = "inline";
        document.getElementById("update").style.display = "inline";
        
        document.getElementById("edit").innerHTML = "Cancel";
        document.getElementById("edit").style.width = "90px";
    }
    else {
        document.getElementById("title update").style.display = "none";
        document.getElementById("status update").style.display = "none";
        document.getElementById("day update").style.display = "none";
        document.getElementById("favorite update").style.display = "none";
        document.getElementById("update").style.display = "none";

        let icon = document.createElement("i");
        icon.setAttribute("class", "fa-solid fa-pen-to-square");
        document.getElementById("edit").innerHTML = "";
        document.getElementById("edit").appendChild(icon);
        document.getElementById("edit").style.width = "55px";
    }
}
