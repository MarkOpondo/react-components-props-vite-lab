import React from "react";

export default function Article({ title, date, preview }) {
    console.log(title);
    return (
        <div>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>       
        </div>
    )
}