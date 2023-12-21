import React, { useEffect } from 'react';
import { useState, useCallback } from 'react';
import './App.css';
import Searchbar from './components/searchbar/Searchbar';
import SearchResult from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import Spotify from './util/Spotify';





/////////////////////////////////
function App() {
  const [searchres, setSearch] = useState("");
  const [hozzaferes, setHozzaferes] = useState(false);
  const [tracks, setTracks] = useState([
    {name: "Starboy", artist: "The Weeknd", album: "Starboy", id: 1, uri: "spotify:album:2up3OPMp9Tb4dAKM2erWXQ"},
    {name: "Hello", artist: "Justin Bieber", album: "I'am okay", id: 2, uri: "spotify:album:2up3OPMp9Tb4dAKM2erWXQ"},
    {name: "Side by side", artist: "Coolboy", album: "Cold", id: 3, uri: "spotify:album:2up3OPMp9Tb4dAKM2erWXQ"},
    {name: "Sorry", artist: "Tommy G", album: "Elemor", id: 4, uri: "spotify:album:2up3OPMp9Tb4dAKM2erWXQ"},
  ])
  //playlist számai és playlist neve
  const [pltracks, setPltracks] = useState([]);
  const [plname, setPlname] = useState("");

  function addToPlaylist(track,trackid){
    
    let bennevan = false;
    if(pltracks.length>=1){
      for(let i = 0; i<pltracks.length; i++){
        if(pltracks[i].id===trackid){
          bennevan=true;
        }
      }
    }
    if(bennevan===false){
      setPltracks((prev)=> {return [...prev,
        track
  ]});
    }
};

  function removeFromPlaylist(trackToDeleteid){
    let newPlTracks = [];
    for(let i = 0; i<pltracks.length;i++){
      if(pltracks[i].id!==trackToDeleteid){
        newPlTracks.push(pltracks[i]);
      }
    }
    setPltracks(newPlTracks);
  }

  function handleChangePl(e){
    setPlname(e.target.value);
  }
  function handleSubmitPl(e){
    e.preventDefault();
    let urilist=[];
    for(let i = 0; i<pltracks.length; i++){
      urilist.push(pltracks[i].uri);
    }
    let result = Spotify.savePlaylist(plname, urilist)
    console.log(urilist);
    console.log(result);
    alert("Létrehoztuk számoda a lejátszási listát "+ plname +" néven.")
  }


  function handleChangeSearch(e){
    setSearch(e.target.value);
  };
  
  function handleSearch(e){
    e.preventDefault();
    let result = Spotify.search(searchres);
    result.then(res => setTracks(res))
    
  }

  useEffect(() => {
     console.log(Spotify.getAccessToken());
  }, []);


  

  return (
    <div className="App">
      <Searchbar search={searchres} handleChange={handleChangeSearch} handleSubmit={handleSearch}  />
      <SearchResult search={searchres} tracks={tracks} add={addToPlaylist} pltracks={pltracks} />
      <Playlist tracks={pltracks} plname={plname} handleChange={handleChangePl} handleSubmit={handleSubmitPl} handleRemove={removeFromPlaylist} />
    </div>
  );
}

export default App;
