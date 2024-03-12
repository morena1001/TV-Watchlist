import React from 'react';
import { useEffect } from 'react';

class counter {
    static count = 1;
}

export function Model() {
    useEffect(() => {
        // status, favorite, day
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
            <ul className="list" id="list"></ul>
        </>
    );
}

export function CreateItem(e) {

}

function ReadItem(data) {
    
}

export function UpdateItem(e) {

}

function DeleteItem(e) {

}
