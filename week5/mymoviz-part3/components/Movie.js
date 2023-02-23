import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faVideo, faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Movie.module.css';
import { useState } from 'react';


function Movie(props) {
  const [personalNote, setPersonalNote] = useState(0);
  const [watchCount, setWatchCount] = useState(0);
  const [like, setLike] = useState(false);

  const starsClick = () => {};
    
    // Personnal note
  
const personalStars = [];

for (let i = 0; i < 10; i++) {
 let style = {};
 if (i < personalNote) {
   style = { 'color': '#2196f3'};
 }
 personalStars.push(<FontAwesomeIcon key={i} icon={faStar} onClick={() => setPersonalNote(i + 1)} className="note" style={style} />);
};

  const stars = [];
  for (let i = 0; i < 10; i++) {
    let style = {};
    if (i < props.voteAverage - 1) {
      style = { 'color': '#f1c40f' };
    }
    stars.push(<FontAwesomeIcon key={i} icon={faStar} style={style} />);
  }

  //Caméra
  const handleWatchMovie = () => {
    setWatchCount(watchCount + 1);
   };
  let videoIconStyle = {};
   if (watchCount > 0) {
    videoIconStyle = { 'color': '#e74c3c'};
   }
   
   //Insérer le coeur
   const heartLike = () => {
    setLike (!like)
  };
    let heartIconStyle = {}
   if (like) {
    heartIconStyle = {'color': '#e74c3c'};
} 


return (
    <div className={styles.card}>
      <img className={styles.image} src={props.poster} alt={props.title} />
      <div className={styles.textContainer}>
        <span className={styles.name}>{props.title}</span>
        <p className={styles.description}>{props.overview}</p>
        <span className={styles.vote}>{stars} ({props.voteCount})</span>
        <span className={styles.vote}>{personalStars} ({personalNote}) </span>
        <span><FontAwesomeIcon icon={faVideo} onClick = {() =>  handleWatchMovie()} className={styles.watch} style={videoIconStyle} /> ({watchCount}) </span>
        <span><FontAwesomeIcon icon = {faHeart} onClick = {() => heartLike() } className={styles.like}  style= {heartIconStyle} /> {like}</span> 
        </div>
    </div>
  );
}

export default Movie;
