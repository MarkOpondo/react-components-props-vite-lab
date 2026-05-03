import React from "react";

export default function About({ image, name, text }) {
    return (
        <aside id="about">
            <img src={image} alt={name} />
            <p>{text}</p>
        </aside>
    )
}