import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>Ninjas | Home</title>
				<meta name="keywords" content="ninja elements" />
			</Head>
			<div>
				<h1 className={styles.title}>Homepage</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum deserunt
					exercitationem recusandae, ab facere architecto laudantium neque suscipit
					officiis dolorum tempora eaque reiciendis non magni! Aperiam cum
					necessitatibus suscipit dolorum pariatur debitis inventore quod eius itaque
					maiores quae adipisci, optio ut eum, est a vel dolores accusantium
					possimus. Dolores, eius.
				</p>
				<Link href="/ninjas">
					<a className={styles.btn}>Ninjas Listing</a>
				</Link>
			</div>
		</>
	);
}
