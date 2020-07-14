import React from "react";

import logo from "./logo.svg";
import "./App.css";
import { useObserver } from "mobx-react-lite";
import { BpmInput } from "./components/BpmInput";
import { useRootStore } from "./context/RootStateContext";
import { Checkboxes } from "./components/CheckBoxxes";
import { Header } from "./components/Header";
import { Results } from "./components/Results";

const App: React.FC = ({}) => {
  //how we import our store
  const { notesStore } = useRootStore();
  return useObserver(() => (
    <div className="appContainer">
      <Header />
      <BpmInput
        allSongs={notesStore.allSongs}
        loadSongs={notesStore.loadSongs}
      />
      <Checkboxes
        getTheSong={notesStore.getTheSongs}
        songs={notesStore.songs}
        setSongs={notesStore.setSongs}
        allSongs={notesStore.allSongs}
      />
      <Results />
    </div>
  ));
};

export default App;
