import React from "react";

import Entry  from "./Entry";

import emojipedia from "../emojipedia";

function createCard(emojipedia) {
  return(
      <Entry 
          emoji={emojipedia.emoji}
          name={emojipedia.name}
          meaning={emojipedia.meaning}
      />       
  )
}


function App() {
  console.log(emojipedia)
  return(
    <div>
             <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
          {emojipedia.map(createCard)}
      </dl>
    </div>
        </div>
  )
 
}

export default App;
