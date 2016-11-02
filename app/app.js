import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/app.container.js'



// window.onload = function(){
//   ReactDOM.render(<Main />, document.body);
// }
let izioziBoard = {
    "showBorders": "true",
    "boards": [
      "board": {
        "cols": "2",
        "rows": "2",
        "button": [
          {
            "isMatrioska": "false",
            "imagePath": "/storage/sdcard0/iziozi/gallery/1429354298907.jpg",
            "mSentence": " "
          },
          {
            "isMatrioska": "false",
            "imagePath": "/storage/sdcard0/iziozi/gallery/1429354298907.jpg",
            "mSentence": " "
          },
          {
            "isMatrioska": "false",
            "imagePath": "/storage/sdcard0/iziozi/gallery/1429354298907.jpg",
            "mSentence": " "
          },
          {
            "isMatrioska": "false",
            "imagePath": "/storage/sdcard0/iziozi/gallery/1429354298907.jpg",
            "mSentence": " "
          },
          { "-mIsMatrioska": "false" },
          { "-mIsMatrioska": "false" }
        ]
      }
    ]
  }

ReactDOM.render(
  <AppContainer board=izioziBoard />,
  document.body
);
