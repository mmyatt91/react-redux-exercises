import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import MemeForm from "./MemeForm";
import Meme from "./Meme";


function App() {
  const memes = useSelector(st => st.memes);
  const dispatch = useDispatch();
  
  const addMeme = (newMeme) => dispatch({ type: "ADD_MEME", meme: newMeme });
  const removeMeme = (id) => dispatch({ type: "REMOVE_MEME", id });

  const allMemes = memes.map(m => (
    <Meme
      key={m.id}
      topText={m.topText}
      bottomText={m.bottomText}
      url={m.url}
      removeMeme = {() => removeMeme(m.id)}
    />
  ));

  return (
    <div className="App">
      <MemeForm addMeme={addMeme}/>
      <hr />
        {allMemes}
    </div>
  );
}

export default App;
