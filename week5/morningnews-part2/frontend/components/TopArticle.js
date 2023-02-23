import styles from '../styles/Toparticle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import {useDispatch} from 'react-redux';
import { addBookmarks, removeBookmarks } from '../reducers/bookmarks';

function TopArticle(props) {

	const dispatch = useDispatch();
	
	const handleBookmarkClick = () => { 
		// if (props.isBookmarked) { 
		// 	dispatch(removeBookmarks(props)); 
		// } else {
			 dispatch(addBookmarks(props)); 
		// }
	}


	return (
		<div className={styles.topContainer}>
			<img src={props.urlToImage} className={styles.image} alt={props.title} />
			<div className={styles.topText}>
				<h2 className={styles.topTitle}>{props.title}</h2>
				<FontAwesomeIcon icon={faBookmark} onClick={() => handleBookmarkClick()}  className={styles.bookmarkIcon} />
				<h4>{props.author}</h4>
				<p>{props.description}</p>
			</div>
		</div>
	);
}

export default TopArticle;

