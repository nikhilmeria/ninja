import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export const getStaticProps = async () => {
	const resp = await fetch(
		'https://cdn-api.co-vin.in/api/v2/admin/location/states',
		{
			headers: {
				'Content-Type': 'application/json',
				'User-Agent': '*',
			},
		}
	);
	const data = await resp.json();
	//console.log('states in getStaticProps : ', data);

	return { props: { data: data } };
};

const Ninjas = ({ data: { states } }) => {
	console.log('Ninjas : ', states);
	return (
		<>
			<Head>
				<title> Listing</title>
			</Head>
			<div>
				{states.map((ei) => (
					<div key={ei.state_id}>
						<a className={styles.single}>
							<h3>{ei.state_name}</h3>
						</a>
					</div>
				))}
			</div>
		</>
	);
};

export default Ninjas;
