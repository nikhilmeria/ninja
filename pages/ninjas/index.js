import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export const getStaticProps = async () => {
	const resp = await fetch(
		'https://cdn-api.co-vin.in/api/v2/admin/location/states',
		{
			headers: {
				'User-Agent': '*',
				Accept: 'application/json; charset=UTF-8',
			},
		}
	);
	const data = await resp.json();
	console.log('states in getStaticProps : ', data);

	return { props: { data: JSON.stringify(data) } };
};

const Ninjas = (props) => {
	const newData = JSON.parse(props.data);
	const states = newData.states;
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
