import React from "react";

export default function About({ image, about }) {
    return (
        <aside id="about">
            <img src={image} alt="blog logo" />
            <p>{about}</p>
        </aside>
    )
}