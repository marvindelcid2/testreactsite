import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';




function App() {
  const [albumName, setAlbumName] = useState('Enter album name...');
  const [albumName2, setAlbumName2] = useState('Enter album name...');


  useEffect(() => {
    console.log('Inside useEffect()');
    console.log(albumName);
    console.log(albumName2);
  })

  function handleSubmit(event){
    event.preventDefault();
    alert(`This is your album name: ${albumName}`)
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <main className="Main">
        <br />
        <form onSubmit={handleSubmit}>
          <div className="Form">
            <label htmlFor="albumNameInput">Album Name: </label>
            <input type="text" id="albumNameInput" value={albumName} onChange={(e) => setAlbumName(e.target.value)} />
            <button type="submit">Enter</button>
          </div>
        </form>
        <form onSubmit={handleSubmit}>
          <div className="Form">
            <label htmlFor="albumName2Input">Album Name 2 :</label>
            <input type="text" id="albumName2Input" value={albumName2} onChange={(e) => setAlbumName2(e.target.value)} />
            <button type="submit">Enter</button>
          </div>
        </form>
      </main>
    </div>
      );
}

export default App;
