//import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
//import firebase from '../firebase/initFirebase';

export default function Home() {
	//const [email, setEmail] = useState();
	//console.log('firebase : ', firebase);

	// useEffect(() => {
	// 	//read data from firestore
	// 	firebase
	// 		.firestore()
	// 		.collection('test')
	// 		.onSnapshot((snapShot, onError) => {
	// 			if (onError) {
	// 				console.log('error reading data  : ', onError);
	// 			}
	// 			snapShot.docs.forEach((ei) => {
	// 				//console.log('reading ids : ', ei.id);
	// 				//console.log('read : ', ei.data());
	// 			});
	// 		});

	// 	//keep user logged in
	// 	const unsub = firebase.auth().onAuthStateChanged((usr) => {
	// 		//	console.log('onAuthStateChanged : ', usr.email);
	// 		if (usr) setEmail(usr.email);
	// 	});

	// 	//cleanup , when user logs out
	// 	return () => unsub();
	// }, []);

	// const handleAddData = async () => {
	// 	//write data from firestore
	// 	//	console.log('inside handleAddData : ');
	// 	try {
	// 		const docRef = await firebase.firestore().collection('test').add({
	// 			name: 'Bal Ganesh',
	// 		});
	// 		//	console.log('docRef : ', docRef);
	// 	} catch (error) {
	// 		console.log('error adding data : ', error.message);
	// 	}
	// };

	// const handleLogin = async () => {
	// 	//user already added - email : bh@bh.com, password: abc123
	// 	const userInfo = {
	// 		email: 'bh@bh.com',
	// 		password: 'abc123',
	// 	};
	// 	try {
	// 		const userData = await firebase
	// 			.auth()
	// 			.signInWithEmailAndPassword(userInfo.email, userInfo.password);
	// 		//	console.log('login success : ', userData.user.email);
	// 		setEmail(userData.user.email);
	// 	} catch (error) {
	// 		console.log('error while login : ', error);
	// 	}
	// };

	return (
		<>
			<Head>
				<title>Ninjas | Home</title>
				<meta name="keywords" content="ninja elements" />
			</Head>
			<div>
				<h1 className={styles.title}>Homepage </h1>
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
				<p></p>
				<a
					className={styles.btn}
					style={{ cursor: 'pointer' }}
					//onClick={handleAddData}
				>
					Add Data to firestore
				</a>
				<p></p>
				<a
					className={styles.btn}
					style={{ cursor: 'pointer' }}
					//onClick={handleLogin}
				>
					Login
				</a>
			</div>
		</>
	);
}
