import React from "react";

function Meme({ id, url, topText, bottomText, removeMeme }) {
  function handleRemoveMeme() {
    removeMeme(id);
  }
  return (
    <div id="foo" className="Meme">
      <div>
        <p className="top-text">{topText}</p>
        <img src={url} alt="meme" />
        <p className="bottom-text">{bottomText}</p>
        <button id="removeBtn" onClick={handleRemoveMeme}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default Meme;