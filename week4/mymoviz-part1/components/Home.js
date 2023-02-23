import Movie from './Movie';
import 'antd/dist/antd.css';
import styles from '../styles/Home.module.css';
import { Popover, Button } from 'antd';

function Home() {
  const movies = []
  for(let i = 0; i < 10 ; i++ ) {
      movies.push(<Movie/>)
  }
  return (
  <div>
    <div className={styles.header}>
      <div>
        <div className={styles.img}>
        </div>
        <div>
          <div className={styles.popover}>
       <Popover className={styles.popover}  title="Liked movies">
          <Button type="primary">♥ 4 movies</Button>
            </Popover>
</div>
       <img  className src="logo.png" alt="Logo" /> 
        <img className={styles.logo} src="logoletter.png" alt="Letter logo" />
       
       </div>
        </div>
          </div>  
          
           <div> 
            <h4 className={styles.title}>
            Last releases
          </h4>
          {movies}
 <Movie/>
           </div>
            </div>
  );
}

export default Home;
