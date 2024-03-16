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
        .then((data) => {viewItem(data[0])})
    }, []);

    return (
        <>
            <div className="item-container" id='item-container'>
                {/* <div className="item-wrapper" id="item-wrapper">
                    <div className="item-title">A Certain Scientific Railgun</div>
                    <div className="status-container">
                        Status:
                        <span className="status-span">watchlist</span>
                    </div>
                    <div className="favorite-container">
                        Favorite:
                        <span className="favorite-span">no</span>
                    </div>
                    <button className='edit-button' id='edit'>
                        <i className='fa-solid fa-pen-to-square'></i>
                    </button>
                </div> */}
            </div>
        </>
    );
}

function viewItem(data) {
    let itemWrapper = document.createElement("div");
    itemWrapper.setAttribute("class", "item-wrapper");
    itemWrapper.setAttribute("id", "item-wrapper");

    let itemTitle = document.createElement("div");
    itemTitle.setAttribute("class", "item-title");
    itemTitle.innerHTML = data.title;

    let statusContainer = document.createElement("div");
    statusContainer.setAttribute("class", "status-container");
    statusContainer.innerHTML = "Status:";

    let statusSpan = document.createElement("span");
    statusSpan.setAttribute("class", "status-span");
    statusSpan.innerHTML = data.status;

    let favoriteContainer = document.createElement("div");
    favoriteContainer.setAttribute("class", "favorite-container");
    favoriteContainer.innerHTML = "Favorite:";

    let favoriteSpan = document.createElement("span");
    favoriteSpan.setAttribute("class", "favorite-span");
    favoriteSpan.innerHTML = data.favorite;

    let editButton = document.createElement("button");
    editButton.setAttribute("class", "edit-button");
    editButton.setAttribute("id", "edit")

    let icon = document.createElement("i");
    icon.setAttribute("class", "fa-solid fa-pen-to-square");

    itemWrapper.appendChild(itemTitle);
    itemWrapper.appendChild(statusContainer);
    statusContainer.appendChild(statusSpan);
    itemWrapper.appendChild(favoriteContainer);
    favoriteContainer.appendChild(favoriteSpan);
    itemWrapper.appendChild(editButton);
    editButton.append(icon);

    document.getElementById("item-container").appendChild(itemWrapper);
}
