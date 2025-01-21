const profile = {
    unsename : 'karan_18',
    email : 'karan_18@gmail.com',
    address : 'indore',
    contact : 9977577513,
} 
console.log("profile"+ profile);
// out put [object Object]
console.log(profile);
// out put 
// {
//     unsename: 'karan_18',
//     email: 'karan_18@gmail.com',
//     address: 'indore',
//     contact: 9977577513
// }
console.log('add new properties in existing object');
profile.gender = 'male';
console.log("after adding properties");
console.log(profile);
console.log("doing changes in  existing object properties"); 
profile.email = 'karan-007@gmail.com';
console.log("after changing");
console.log(profile);
console.log("deleting contact properties");
delete profile.contact;
console.log("deleting contact properties successfully");
console.log(profile);






