import { useEffect, useState } from 'react';
import { Player } from './components/Player';
import './index.scss';

function App() {
  const [songs] = useState([
    {
      title: 'Beggin',
      artist: 'Madcon',
      imgSrc: './img/artist-1.jpg',
      src: './songs/track-1.mp3',
    },
    {
      title: 'Believer',
      artist: 'Imagine Dragons',
      imgSrc: './img/artist-2.jpg',
      src: './songs/track-2.mp3',
    },
    {
      title: 'Queen',
      artist: 'We Are The Champions',
      imgSrc: './img/artist-3.jpg',
      src: './songs/track-3.mp3',
    },
    {
      title: 'Personal Jesus',
      artist: 'Depeche Mode',
      imgSrc: './img/artist-4.jpg',
      src: './songs/track-4.mp3',
    },
    {
      title: 'Sadeness',
      artist: 'Enigma',
      imgSrc: './img/artist-5.jpg',
      src: './songs/track-5.mp3',
    },
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);
  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);
  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
