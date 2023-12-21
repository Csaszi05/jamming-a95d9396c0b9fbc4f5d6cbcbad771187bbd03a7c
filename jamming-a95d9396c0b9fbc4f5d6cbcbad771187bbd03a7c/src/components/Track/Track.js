import React from "react";

export default function Track(props){
    let tr = {
        name: props.cim, artist: props.artist, album: props.album, id: props.id, uri: props.uri,
    }
    function handleClickAdd(){
        props.addto(tr, tr.id)
    }

    function handleClickRemove(){
        props.remove(tr.id);
    }

    return(
        <div className="track">
            <h5 className="cim">{props.cim}</h5>
            <p className="artist-album">{props.artist} | {props.album}</p>
            {props.onResult ? <button onClick={handleClickAdd}>+</button>: <button onClick={handleClickRemove}>-</button>}
        </div>
    );
}