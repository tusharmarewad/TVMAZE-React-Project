import React, { useState } from "react";
import ActorsContent from "./ActorsContent";
import MoviesContent from "./MoviesContent";
function Search() {
    const [searchActor, setSearchActor] = useState(false);
    const [searchShow, setSearchShow] = useState(false);

    const actor = () => {
        setSearchShow(false);
        setSearchActor(true);
    };

    const show = () => {
        setSearchActor(false);
        setSearchShow(true);
    };

    return (
        <>
            <div>
                <div className="search">
                    <input type="radio" name="radio" onChange={actor} />
                    <b className="radioName">&nbsp;Search Actor</b>
                    &nbsp; &nbsp; &nbsp;
                    <input type="radio" name="radio" onChange={show} />
                    <b className="radioName">&nbsp;Search Show</b>
                </div>
            </div>
            {searchActor ? <ActorsContent /> : null}
            {searchShow ? <MoviesContent /> : null}
        </>
    );
}

export default Search;
