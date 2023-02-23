import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Movie.module.css';
import { OmitProps } from 'antd/lib/transfer/ListBody';

function Movie(props) {
  const color = { 'color': '#f1c40f' }
  const stars = [];
 for (let i = 0; i < 10; i++) {  
    if (i < props.voteAverage) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} style={color} />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
  }
  } 

  return (
    <div className={styles.card}>
      <img className={styles.image} src={props.poster} alt={props.title} />
      <div>
      </div>
      <div className={styles.textContainer}>
        <span className={styles.name}></span>
          <h3> {props.title}</h3>
        <p className={styles.description}></p>
        <div>
          <p> {props.overview}</p>
        </div>
        <span className={styles.vote}>{stars} (Vote count)</span>
        <div> 
          <p> {props.voteAverage}</p>
         <p> {props.voteCount}</p>
        </div>
      </div>
    </div>
  );
}



export default Movie;
