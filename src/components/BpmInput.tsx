import React, { useState } from "react";
import { Store } from "../store/Store";
import "../style/searchbar.css";

type BpmInputProps = {
  loadSongs: Store["loadSongs"];
  allSongs: Store["allSongs"];
};

export const BpmInput: React.FC<BpmInputProps> = ({ loadSongs }) => {
  const updateBpm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setbpm(event.target.value);
  };
  const onAddNoteClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    let isnum = /^\d+$/.test(bpm);
    console.log(isnum);
    if (isnum && parseInt(bpm) > 40 && parseInt(bpm) < 220) {
      loadSongs(bpm);
    } else {
      setError(
        "You need to make sure a number is used for the bpm and the number has to be between 40 and 240"
      );
      setTimeout(() => setError(""), 4000);
    }
  };
  const [error, setError] = useState("");
  const [bpm, setbpm] = useState("");

  return (
    <div
      style={{
        color: "red",
        fontSize: "24px"
      }}
      className="searchBar_container"
    >
      {error !== "" && <div>{error}</div>}
      <input
        type="text"
        onChange={updateBpm}
        name="note"
        value={bpm}
        placeholder=" BPM Here "
        style={{
          backgroundColor: "#E5E6E4",
          fontSize: "20px"
        }}
      />
      <button onClick={onAddNoteClick}>Get Artists</button>
    </div>
  );
};
