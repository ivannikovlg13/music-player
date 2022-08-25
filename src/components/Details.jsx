export const Details = (props) => {
  return (
    <div className="details">
      <div className="details__img">
        <img src={props.song.imgSrc} alt="artistImage" />
      </div>
      <h3 className="details__title">{props.song.title}</h3>
      <h3 className="details__artists">{props.song.artist}</h3>
    </div>
  );
};
