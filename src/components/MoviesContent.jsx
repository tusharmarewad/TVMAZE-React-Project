import React, { useState } from "react";

function MoviesContent() {
    const [value, setValue] = useState("");
    const [data, setData] = useState([]);

    function handleChange(event) {
        setValue(event.target.value);
    }

    let urlData = "";

    function submit(e){
        e.preventDefault();
        if (value.length > 0) {
            urlData = `https://api.tvmaze.com/search/shows?q=${value}`;
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
                    value={value}
                    className="input"
                    placeholder="enter show name..."
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
                                <a href={name.show.url}>
                                    {name.show.image ? (
                                        <img
                                            src={name.show.image.medium}
                                            className="img"
                                            // style={{ width: "290px", height: "325px" }}
                                            alt={
                                                name.show.name != null ? name.show.name : "Not found"
                                            }
                                        />
                                    ) : (
                                        <div style={{ height: "325px" }}>
                                            <img
                                                src="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
                                                className="img"
                                                alt={name.show.name}
                                            />
                                        </div>
                                    )}
                                </a>
                                <div className="rating">
                                    <span>⭐ {name.show.rating.average}</span>
                                </div>
                                <div className="showName">
                                    <h3>{name.show.name}</h3>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default MoviesContent;
