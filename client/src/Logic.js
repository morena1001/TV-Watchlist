import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

class counter {
    static count = 0;
    static counted = false;
}

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

export function Model() {

    useEffect(() => {
        document.getElementById("list").innerHTML = "";
        let search = localStorage.getItem("search");
        let status = localStorage.getItem("status");
        let day = localStorage.getItem("day");
        let favorite = localStorage.getItem("favorite");
        let sort = localStorage.getItem("sort");


        if (search !== "") {
            document.forms["form"]["search"].value = search;
            SearchList();
        }
        else {
            fetch("/shows?status=" + (status === "All" ? "" : status) + 
                    "&day=" + (day === "All" ? "" : day) + 
                    "&favorite=" + (favorite === "All" ? "" : favorite))
            .then((res) => res.json())
            .then((data) => {
                for (let i = 0; i < data.length; i++) {
                    ReadItem(data[i]);
                }
            });
        }

        document.forms["form"]["status preset"].value = status;
        document.forms["form"]["day preset"].value = day;
        document.forms["form"]["favorite preset"].value = favorite;
        // document.forms["form"]["sort preset"].value = sort;
        document.forms["form"]["sort preset"].value = "none";
        filterBy();
        sortBy();
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

export function FilterList() {
    document.getElementById("list").innerHTML = "";
    let status = document.forms["form"]["status preset"].value;
    let day = document.forms["form"]["day preset"].value;
    let favorite = document.forms["form"]["favorite preset"].value;

    let url = "/shows?" + (status === "All" ? "" : ("status=" + status)) + 
        (day === "All" ? "" : (status === "All" ? ("day=" + day) : ("&day=" + day))) +
        (favorite === "All" ? "" : (status === "All" && day == "All" ? ("favorite=" + favorite) : ("&favorite=" + favorite)))
    
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            ReadItem(data[i]);
        }
    });
}

export function SearchList() {
    document.getElementById("list").innerHTML = "";
    let search = document.forms["form"]["search"].value;
    search = search.replaceAll(" ", "%20"); 

    fetch("/shows?search=" + search)
    .then((res) => res.json())
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            ReadItem(data[i]);
        }
        document.forms["form"]["status preset"].value = "All";
        document.forms["form"]["day preset"].value = "All";
        document.forms["form"]["favorite preset"].value = "All";
        localStorage.setItem("search", document.forms["form"]["search"].value);
    });
}

export function CreateItem(e, navigate) {
    checkShows(e).then(data => {
        for (let i = 0; i < data.length; i++) {
            if (e.title === data[i].title) {
                alert("Show is already in database");
                return;
            }
        }
        
        if (!counter.counted) {
            counter.count = data.length + 1;
        }

        let string = `
            {
                "id": ${counter.count},
                "title": "${e.title}",
                "status": "${e.status}",
                "favorite": "${e.favorite}"
            }`;
        
        fetch("/shows", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: string,
        })
        .then((res) => res.json())
        .then((data) => {console.log(data)});
        navigate("/");
    });
}

async function checkShows(e) {
    const response = await fetch("/shows");
    const data = await response.json();
    return data;
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
    newItemFav.setAttribute("class", data.favorite === "yes" ? "fa-solid fa-star" : " ");

    newItem.appendChild(newItemLink);
    newItem.appendChild(newItemSpan);
    newItem.appendChild(newItemFav);

    document.getElementById("list").appendChild(newItem);
}

export function UpdateItem(e) {

}

function DeleteItem(e) {

}



function filterBy() {
    let status = document.forms["form"]["status preset"].value;
    let day = document.forms["form"]["day preset"].value;
    let favorite = document.forms["form"]["favorite preset"].value;
    for (let i = 0; i < document.getElementById("list").childElementCount; i++) {
        if (favorite !== "All" && (document.getElementById("list").childNodes[i].lastChild.className === 
            "fa-solid fa-star" ? "yes" : "no") !== favorite) {
            document.getElementById("list").childNodes[i].style.display = "none";
            continue;
        }

        if (status !== "All") {
            if (status === "current") {
                if (day !== "All"  && document.getElementById("list").childNodes[i].childNodes[1].innerHTML !== (status + " " + day)) {
                    document.getElementById("list").childNodes[i].style.display = "none";
                    continue;
                }
            }
            if (!document.getElementById("list").childNodes[i].childNodes[1].innerHTML.includes(status)){
                document.getElementById("list").childNodes[i].style.display = "none";
                continue;
            }
        }
        document.getElementById("list").childNodes[i].style.display = "inline"; 
    }
}

function sortBy() {
    let sort = document.forms["form"]["sort preset"].value;
    let listCount = document.getElementById("list").childElementCount;
    for (let i = 0; i < document.getElementById("list").childElementCount; i++) {
    }
    let arr = Array(listCount);

    for (let i = 0; i < listCount; i++) {
        arr[i] = document.getElementById("list").childNodes[i];
    }
    mergeSort(sort, arr, 0, listCount - 1);
    document.getElementById("list").innerHTML = "";
    for (let i = 0; i < listCount; i++) {
        document.getElementById("list").appendChild(arr[i]);
    }
}

function mergeSort(sort, arr, l, r) {
    if (l >= r) {
        return;
    }
    var m = l + parseInt((r - l) / 2);
    mergeSort(sort, arr, l, m);
    mergeSort(sort, arr, m + 1, r);
    merge(sort, arr, l, m, r);
}

function merge(sort, arr, l, m, r) {
    var n1 = m - l + 1;
    var n2 = r - m;

    var L = new Array(n1);
    var R = new Array(n2);

    for (var i = 0; i < n1; i++) {
        L[i] = arr[l + i];
    }
    for (var j = 0; j < n2; j++) {
        R[j] = arr[m + 1 + j];
    }

    var i = 0;
    var j = 0;
    var k = l;

    while (i < n1 && j < n2) {
        switch(sort) {
            case "alphabetic":
                if (L[i].firstChild.innerHTML <= R[j].firstChild.innerHTML) {
                    arr[k] = L[i];
                    i++;
                }
                else {
                    arr[k] = R[j];
                    j++;
                }
                k++;
            break;

            case "status":
                if (sortMap[L[i].childNodes[1].innerHTML] <= sortMap[R[j].childNodes[1].innerHTML]) {
                    arr[k] = L[i];
                    i++;
                }
                else {
                    arr[k] = R[j];
                    j++;
                }
                k++;
            break;

            case "none":
                if (parseInt(L[i].id) <= parseInt(R[j].id)) {
                    arr[k] = L[i];
                    i++;
                }
                else {
                    arr[k] = R[j];
                    j++;
                }
                k++;
            break;
        }
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}
