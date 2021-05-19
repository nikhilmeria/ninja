import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export const getStaticProps = async () => {
	const resp = await fetch(
		'https://cdn-api.co-vin.in/api/v2/admin/location/states',
		{
			headers: {
				'Accept-Language': 'en_US',
				'User-Agent': '*',
			},
		}
	);
	const data = await resp.json();
	console.log('states in getStaticProps : ', data);

	return { props: { data: data } };
};

const Ninjas = ({ data: { states } }) => {
	console.log('props : ', states);
	return (
		<>
			<Head>
				<title>Ninjas | Listing</title>
			</Head>
			<div>
				<h1>Ninjas</h1>
				<h1>Done</h1>
				{states.map((ei) => {
					<div key={ei.state_id}>
						<a className={styles.single}>
							<h3>{ei.state_name}</h3>
						</a>
					</div>;
				})}
				<h1>End</h1>
			</div>
		</>
	);
};

export default Ninjas;
