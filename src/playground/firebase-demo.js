// import * as firebase from 'firebase'

// const config = {
//     apiKey: 'AIzaSyCix3_NpTEfc2vBmaFITeL-p6Dddvaa4aU',
//     authDomain: 'expensify-dc622.firebaseapp.com',
//     databaseURL: 'https://expensify-dc622.firebaseio.com',
//     projectId: 'expensify-dc622',
//     storageBucket: 'expensify-dc622.appspot.com',
//     messagingSenderId: '1098991396887'
// };

// firebase.initializeApp(config);

// const database = firebase.database();

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added 
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });

//         console.log(expenses);
//     })
//     .catch((e) => {
//         console.log('Error occurred', e);
//     });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     });

//     console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     amount: '5000',
//     createdAt: '46800760046'
// });


//////////////////////////////////////////////////////////////////
// const onChangeValue = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//     console.log('Some error', e);
// });

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val =snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Something wrong', e);
//     });

// database.ref().set({
//     name: 'Maruf hasan',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Dhaka',
//         country: 'U.S.A'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('This is failed', e);
// });

// database.ref()
//     .update({
//         stressLevel: 9,
//         'job/company': 'Amazon',
//         'location/city': 'Seattle'
//     });

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Data is removed successfully');
//     }).catch((e) => {
//         console.log('Some error', e);
//     });
