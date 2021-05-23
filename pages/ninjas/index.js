import Head from 'next/head';
import isEmpty from 'lodash.isempty';
import styles from '../../styles/Home.module.css';

export const getStaticProps = async () => {
	let data = [];
	let error = '';
	try {
		const res = await fetch(
			'https://cdn-api.co-vin.in/api/v2/admin/location/states',
			{
				method: 'GET',
				headers: {
					'Accept-Language': 'en_US',
					'User-Agent':
						'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36',
					Accept: 'application/json; charset=UTF-8',
				},
			}
		);

		if (res.status !== 200)
			throw String(`Invalid server response: ${res.status} ${res.statusText}`);

		data = await res.json();

		if (isEmpty(data)) throw String('No data was found!');

		data = JSON.parse(JSON.stringify(data));
	} catch (e) {
		error = e.toString();
	}

	return {
		props: {
			data,
			error,
		},
	};
};

const Ninjas = ({ data, error }) => (
	<>
		<Head>
			<title> CoWin</title>
		</Head>
		<div>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			{!isEmpty(data) &&
				!isEmpty(data.states) &&
				data.states.map((ei) => (
					<div key={ei.state_id}>
						<a className={styles.single}>
							<h3>{ei.state_name}</h3>
						</a>
					</div>
				))}
		</div>
	</>
);

export default Ninjas;

// import Head from 'next/head';
// import Link from 'next/link';
// import styles from '../../styles/Home.module.css';

// export const getStaticProps = async () => {
// 	const resp = await fetch(
// 		'https://cdn-api.co-vin.in/api/v2/admin/location/states',
// 		{
// 			headers: {
// 				'User-Agent': '*',
// 				Accept: 'application/json; charset=UTF-8',
// 			},
// 		}
// 	);
// 	const data = await resp.json();
// 	console.log('states in getStaticProps : ', data);

// 	return { props: { data: JSON.stringify(data) } };
// };

// const Ninjas = (props) => {
// 	const newData = JSON.parse(props.data);
// 	const states = newData.states;
// 	console.log('Ninjas : ', states);
// 	return (
// 		<>
// 			<Head>
// 				<title> Listing</title>
// 			</Head>
// 			<div>
// 				{states.map((ei) => (
// 					<div key={ei.state_id}>
// 						<a className={styles.single}>
// 							<h3>{ei.state_name}</h3>
// 						</a>
// 					</div>
// 				))}
// 			</div>
// 		</>
// 	);
// };

// export default Ninjas;
