import { useRef, useState, useEffect } from 'react';
import { Control } from './Control';
import { Details } from './Details';
export const Player = (props) => {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    isPlaying ? audioEl.current.play() : audioEl.current.pause();
  });
  const skipSong = (fowards = true) => {
    if (fowards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;
        if (temp > props.songs.length - 1) {
          temp = 0;
        }
        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;
        if (temp < 0) {
          temp = props.song.length - 1;
        }
        return temp;
      });
    }
  };
  return (
    <div className="player">
      <h4>Playing Now</h4>
      <Details song={props.songs[props.currentSongIndex]} />
      <Control isPlaying={isPlaying} setIsPlaying={setIsPlaying} skipSong={skipSong} />
      <audio
        className="player__audio"
        src={props.songs[props.currentSongIndex].src}
        ref={audioEl}
        controls></audio>
      <p>
        Next Up:
        <span>
          {props.songs[props.nextSongIndex].title} <b>by</b>{' '}
          {props.songs[props.nextSongIndex].artist}
        </span>
      </p>
    </div>
  );
};
