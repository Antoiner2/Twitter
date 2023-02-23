import styles from '../styles/Home.module.css';


function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Yams
          </h1>
          <div className={styles.dice}>
          <img className={styles.image} src={props.image} alt='desun'/> 
          <img src='2.png' alt='desun'/>  
          <img src='3.png' alt='desun'/>  
          <img src='4.png' alt='desun'/>  
          <img src='5.png' alt='desun'/> 
          </div>
      </main>
    </div>
  );
}
//div className={styles.card}>
      //<img className={styles.image} src={props.poster} alt={props.title} />

export default Home;
