/* --------------topics-------------
1. Promise
2. Callback hell
3. async await
4. class
5. objects
6. constructor funtion
7. optional chianing
8. non-primitive data type clonign
9. grabage collection

*/

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`promise executed`);
        resolve(6000);
    }, 5000); 
});
