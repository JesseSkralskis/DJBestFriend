import React, { useEffect } from "react";

import { Store } from "../store/Store";

type CheckBoxesProps = {
  allSongs: Store["allSongs"];
  setSongs: Store["setSongs"];
  songs: Store["songs"];
  getTheSong: Store["getTheSongs"];
};

export const Checkboxes: React.FC<CheckBoxesProps> = ({
  allSongs,
  setSongs
}) => {
  const [genre, setGenre] = React.useState("");
  useEffect(() => {
    genreFilter();
  }, [genre]);
  const genreFilter = () => {
    console.log(genre);
    if (genre !== "all") {
      let filtered = allSongs.filter(song => {
        if (song.genre) {
          return song.genre.find(g => g === genre);
        }
      });

      setSongs(filtered);
    } else {
      let filtered = allSongs.filter(song => {
        return true;
      });

      setSongs(filtered);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGenre(event.target.value);
  };

  return (
    <div className="select_container">
      <h4>Genre Filter</h4>
      <select
        className="select_select"
        onChange={handleChange}
        name="genres"
        id="genres"
      >
        <option value="all">all genres</option>
        <option value="blues">blues</option>
        <option value="classical">classical</option>
        <option value="country">country</option>
        <option value="electronic">electronic</option>
        <option value="funk">funk</option>
        <option value="folk">folk</option>
        <option value="heavy metal">heavy metal</option>
        <option value="hip hop">hip hop</option>
        <option value="jazz">jazz</option>
        <option value="latin">latin</option>
        <option value="new age">new age</option>
        <option value="pop">pop</option>
        <option value="punk">punk</option>
        <option value="r&b">r&b</option>
        <option value="rap">rap</option>
        <option value="reggae">reggae</option>
        <option value="rock">rock</option>
        <option value="soul">soul</option>
        <option value="world">world</option>
      </select>
    </div>
  );
};
