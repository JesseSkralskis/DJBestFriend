import React, { useState } from "react";
import { useRootStore } from "../context/RootStateContext";
import "../style/results.css";

export const Results = () => {
  const { notesStore } = useRootStore();
  const [songInfo, setSongInfo] = useState({
    title: "",
    key: "",
    pic: "",
    tempo: "",
    open: ""
  });

  const handleClick = (e: any) => {
    console.log(e.target.value);

    notesStore.getTheSongs(e.target.value).then(song => {
      setSongInfo(song);
    });
  };

  return (
    <div className="results_container">
      <div className="results_header">
        {typeof window !== "undefined" && window.innerWidth >= 1000 && (
          <h3> Results</h3>
        )}
      </div>

      <div className="results_header_info">
        {typeof window !== "undefined" && window.innerWidth >= 1000 && (
          <h3>Song Info</h3>
        )}
      </div>

      <div className="results_song_info">
        {songInfo.title !== "" && (
          <div className="result_info_info">
            <div>
              <h3>Song Name: </h3>
              {songInfo.title}
            </div>
            <div>
              {" "}
              <h3>key:</h3> {songInfo.key}
            </div>
            <div>
              {" "}
              <h3>Open Key:</h3> {songInfo.open}
            </div>
            <div>
              {" "}
              <h3>tempo:</h3> {songInfo.tempo}
            </div>
          </div>
        )}

        <div className="results_song_picbox">
          {typeof window !== "undefined" && window.innerWidth >= 1000 && (
            <div
              className="results_info_pic"
              style={{
                background: `url(${songInfo.pic})`,
                backgroundSize: "cover",
                backgroundRepeat: "none"
              }}
            ></div>
          )}
        </div>
      </div>
      <div className="resuts_list_wrapper">
        <div className="results_list">
          <ul>
            {notesStore.songs.length > 0
              ? notesStore.songs.map(song => (
                  <div className="results_artist_button">
                    <div className="results_artist_name">{song.artistName}</div>
                    <div>
                      <button
                        onClick={e => {
                          handleClick(e);
                        }}
                        id={song.songId}
                        value={song.songId}
                      >
                        Get Song Info
                      </button>
                    </div>
                  </div>
                ))
              : notesStore.allSongs.map(song => {
                  return (
                    <div className="results_artist_button">
                      <div className="results_artist_name">
                        {song.artistName}
                      </div>
                      <div>
                        <button
                          onClick={e => {
                            handleClick(e);
                          }}
                          id={song.songId}
                          value={song.songId}
                        >
                          Get Song Info
                        </button>
                      </div>
                    </div>
                  );
                })}
          </ul>
        </div>
      </div>
    </div>
  );
};
