import styles from '../styles/Home.module.css';
import {useState} from 'react';

function Home() {
  const [nbLike, setNbLike] = useState(0)
const handleClick = () => {
  setNbLike(nbLike + 1);
};

const [countNb, setCounter] = useState(0)
const counter = () => {
setCounter (countNb - 1);
};


  return (
    <div className={styles.container}>
      <img className={styles.logo} src="logo.png" />
      <div className={styles.counterContainer}> 
     {countNb}
    <button onClick= {() => counter()} className={styles.decrementBtn} id="decrementBtn">-</button>
   <span className={styles.counter} id="counter">{counter}</span>
         {nbLike}
        <button onClick= {() => handleClick()} className={styles.incrementBtn} id="incrementBtn">+</button>
        </div>
    </div>
  );
}

export default Home;
