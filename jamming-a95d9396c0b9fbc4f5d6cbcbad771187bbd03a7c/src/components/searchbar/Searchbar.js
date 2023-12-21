import React from "react";


export default function Searchbar(props){

    return(
        <div className="search-container">
        <form onSubmit={props.handleSubmit}>
            <input onChange={props.handleChange} id="search" name="search" type="text" placeholder="Type the artist/album name" value={props.search} />
            <button type="submit">Search</button>
        </form>
        </div>
    );
}