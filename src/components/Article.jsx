import React from "react";

export default function Article({ title, date, preview }) {
    console.log(title);
    return (
        <article>

            <h3>{title}</h3>

            {!date ? <small></small> : <small>{date}</small>}
            
            <p>{preview}</p>      

        </article>
    )
}