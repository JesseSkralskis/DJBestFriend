import { observable, action } from "mobx";
import { getSongs, getSong } from "../api/api";

//create store as a class with

export class Store {
  @observable allSongs: {
    songId: string;
    artistName: string;
    genre: string[];
  }[] = [];

  @observable songs: {
    songId: string;
    artistName: string;
    genre: string[];
  }[] = [];

  @observable
  songInfo: {
    title: string;
    key: string;
    pic: string;
    tempo: string;
    open: string;
  } = { title: "", key: "", pic: "", tempo: "", open: "" };

  @action
  loadSongs = (num: string) => {
    getSongs(num).then(notes => (this.allSongs = notes));
  };

  @action
  setSongs = (
    node: { songId: string; artistName: string; genre: string[] }[]
  ) => {
    this.songs = node;
  };

  @action
  getTheSongs = (id: string) => {
    return getSong(id).then(info => (this.songInfo = info));
  };
}
