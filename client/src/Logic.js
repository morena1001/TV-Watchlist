import React from 'react';
import { useEffect } from 'react';

class counter {
    static count = 1;
}

export function Model() {
    useEffect(() => {
        let status = document.forms["form"]["status preset"].value;
        let day = document.forms["form"]["day preset"].value;
        let favorite = document.forms["form"]["favorite preset"].value;

        if (status === "All") {
            status = "";
        }
        
        fetch("/shows?status=" + (status === "All" ? "" : status) + 
                    "&day=" + (day === "All" ? "" : day) + 
                    "&favorite" + (favorite === "All" ? "" : favorite))
        .then((res) => res.json())
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                ReadItem(data[i]);
            }
        });
    });

    return (
        <>
            <ul className="list" id="list">
                {/* <li id='1' className='item'>
                        {/* <span className='show-title'>
                            Nichijou
                        </span> */}
                        {/* <Link className='show-title' to='/shows/1'>Nichijou</Link>            
                        <span className="status">
                            watchlist
                        </span>
                        <i class="fa-solid fa-star"></i>
                </li> */}
            </ul>
        </>
    );
}

export function CreateItem(e) {

}

function ReadItem(data) {
    let newItem = document.createElement("li");
    newItem.setAttribute("class", "item");
    newItem.setAttribute("id", data.id);

    let newItemLink = document.createElement("a");
    newItemLink.setAttribute("class", "show-title");
    newItemLink.setAttribute("href", "/shows/" + data.id);
    newItemLink.innerHTML = data.title;

    let newItemSpan = document.createElement("Span");
    newItemSpan.setAttribute("class", "status");
    newItemSpan.innerHTML = data.status;

    let newItemFav = document.createElement("i");
    newItemFav.setAttribute("class", data.favorite === "yes" ? "fa-solid fa-star" : "");

    newItem.appendChild(newItemLink);
    newItem.appendChild(newItemSpan);
    newItem.appendChild(newItemFav);

    document.getElementById("list").appendChild(newItem);
    counter.count++;
}

export function UpdateItem(e) {

}

function DeleteItem(e) {

}
