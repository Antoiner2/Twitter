import Head from 'next/head';
import styles from '../styles/Bookmarks.module.css';
import {useSelector} from 'react-redux'
import bookmarks, {addBookmarks, removeBookmarks} from '../reducers/bookmarks'





function Bookmarks() {

	const bookmarks = useSelector((state) => state.bookmarks.value )
	return (
		<div>
			<Head>
				<title>Morning News - Bookmarks</title>
			</Head>
			<div className={styles.container}>
				<h2>Bookmarks</h2>
				<p>No bookmark</p>
			</div>
		</div>

	);
}

export default Bookmarks;
