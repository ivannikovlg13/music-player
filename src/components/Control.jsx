import { faBackward, faForward, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Control = (props) => {
  return (
    <div className="control">
      <button onClick={() => props.skipSong()} className="control__skipButton">
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button onClick={() => props.setIsPlaying(!props.isPlaying)} className="control__playButton">
        <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
      </button>
      <button onClick={() => props.skipSong()} className="control__skipButton">
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
};
