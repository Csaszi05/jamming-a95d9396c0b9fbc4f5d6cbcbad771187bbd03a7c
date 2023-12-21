import React from "react";
import Track from "../Track/Track";

export default function Playlist(props){
    let trackss;
    
    trackss = props.tracks.map((track)=> {
            return(<Track cim={track.name} artist={track.artist} album={track.album} key={track.id} remove={props.handleRemove} id={track.id} uri={track.uri} />)
        })
    return(
        <div className="playlist">
            <form onSubmit={props.handleSubmit}>
                <input type="text" name="playlist" id="playlist" value={props.plName} onChange={props.handleChange} />
                
                <button type="submit" name="save">SAVE TO SPOTIFY</button>
            </form>
            <div>{trackss}</div>
        </div>
    )
}