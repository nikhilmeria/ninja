import Link from 'next/link';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
	const redirect = useRouter(); // returns an object

	useEffect(() => {
		setTimeout(() => {
			redirect.push('/');
		}, 3000);
	}, []);

	return (
		<>
			<Head>
				<title>Ninjas | 404</title>
			</Head>
			<div className="not-found">
				<h1>Ooops...</h1>
				<h2>That page cannot be found :(</h2>
				<p>
					Go back to the{' '}
					<Link href="/">
						<a>Homepage</a>
					</Link>
				</p>
			</div>
		</>
	);
};

export default NotFound;
