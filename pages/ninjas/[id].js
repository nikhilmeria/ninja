export const getStaticPaths = async () => {
	const resp = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await resp.json();

	// map data to an array of path objects with params (id)
	const paths = data.map((ei) => {
		return {
			params: { id: ei.id.toString() },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const resp = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
	const data = await resp.json();

	return {
		props: { data },
	};
};

const Details = (props) => {
	return (
		<div>
			<h1>{props.data.name}</h1>
			<p>{props.data.email}</p>
			<p>{props.data.website}</p>
			<p>{props.data.address.city}</p>
		</div>
	);
};

export default Details;
