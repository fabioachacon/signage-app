import {app} from '../base';

// export const getData = async () => {
//     let data = [];
//     const db = app.firestore();
//     return db.collection('uploads').get().then((docs) => {
//         docs.forEach(doc => {
//             data.push(doc.data());
//         })
//     });
 
// }


export const loadDocuments = () => async (dispatch) => {
    const db = app.firestore();
    const dataCollection = await db.collection('uploads').get();
    const dataArray = dataCollection.docs.map(doc => doc.data());

   dispatch({
        type: 'FETCH_DATA',
        payload: dataArray
    })
}