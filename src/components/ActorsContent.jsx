import React, { useState } from "react";
import myImage from '../Photo/actor.jpg'
function ActorsContent() {
    const [value, setValue] = useState("");
    const [data, setData] = useState([]);

    function handleChange(event) {
        setValue(event.target.value);
    }

    let urlData = "";
 
    function submit(e) {
        e.preventDefault();
        if (value.length > 0) {
            urlData = `https://api.tvmaze.com/search/people?q=${value}`;
        }

        async function getData() {
            const res = await fetch(urlData);
            const response = await res.json();
            setData(response);
        }
        getData();
    }
    

    return (
        <div className="main-container">
            <div>
                <form onSubmit={submit}>
                <input
                    type="text"
                    className="input"
                    value={value}
                    placeholder="enter actor name..."
                    onChange={handleChange}
                />&nbsp;
                    <input type="submit" className="button" value="Search" />
                </form>
            </div>
            <div className="container">
                {data.map((name, index) => {
                    return (
                        <div key={index} className="sub-container">
                            <div className="inner-container">
                                <a href={name.person.url}>
                                    {name.person.image ? (
                                        <img
                                            src={name.person.image.medium}
                                            className="img"
                                            alt={
                                                name.person.name != null
                                                    ? name.person.name
                                                    : "Not found"
                                            }
                                        />
                                    ) : (
                                        <div>
                                            <img
                                                //src="https://wellbeingchirony.com/wp-content/uploads/2021/03/Deafult-Profile-Pitcher.png"
                                                    src={myImage}
                                                className="img"
                                                alt="Not Found"
                                            />
                                        </div>
                                    )}
                                </a>
                                <div className="actorName">
                                    <h2 style={{ fontSize: "20px" }}>{name.person.name}</h2>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ActorsContent;
