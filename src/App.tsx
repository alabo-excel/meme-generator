import React, { useState } from 'react';

const App: React.FC = () => {
  interface IData {
    id: string;
    name: string;
    url: string;
    width: number;
    height: number;
    box_count: number;
  }

  const [memes, setMemes] = useState<IData | any>([])
  fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
    .then(data => setMemes(data.data.memes))
    .then(errors => console.log(errors))

  // async function fetchMeme() {
  //   const response = await fetch(`https://api.imgflip.com/get_memes`)
  //   const json = await response.json();
  //   // console.log(json)
  //   return setMemes(json.data.memes);
  // }
  // fetchMeme()

  const mapMeme = memes.map((meme: { name: string, url: string, id: number }) => {
    return (
      <div key={meme.id}>{meme.name}
        <img width="200" src={meme.url} alt="" />
      </div>
    )
  })

  return (
    <div className="App">
      <div>
        <h1>MEME APP</h1>
      </div>
      {mapMeme}
    </div>
  );
}

export default App;
