import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export const getStaticProps = async () => {
	const resp = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await resp.json();
	return { props: { data } };
}; // this is an in built function in next to fetch data

const Ninjas = (props) => {
	console.log('props :', props.data);
	return (
		<>
			<Head>
				<title>Ninjas | Listing</title>
			</Head>
			<div>
				<h1>Ninjas</h1>
				{props.data.map((ei) => {
					return (
						<Link href={'ninjas/' + ei.id} key={ei.id}>
							<a className={styles.single}>
								<h3>{ei.name}</h3>
							</a>
						</Link>
					);
				})}
			</div>
		</>
	);
};

export default Ninjas;
