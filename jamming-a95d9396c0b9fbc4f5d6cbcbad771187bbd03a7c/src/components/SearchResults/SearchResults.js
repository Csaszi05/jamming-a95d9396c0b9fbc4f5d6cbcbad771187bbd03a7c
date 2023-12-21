import React, {useState} from "react";
import Track from "../Track/Track";

export default function SearchResult(props){
    const [onResult, setOnresult] = useState(true);
    const trackss = props.tracks.map((track)=> {
        return(<Track cim={track.name} artist={track.artist} album={track.album} key={track.id} id={track.id} uri={track.uri} onResult={onResult} addto={props.add} />)
    })
    return(
    <div className="result">
        <h2>Results</h2>
        {trackss}
    </div>
    );
}