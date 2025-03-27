import { displayData } from "./api_util.js";

displayData()





























// function displayUsers() {
//     const container = document.getElementById("postContainer")

//     getUsers()
//         .then (users => {
//             users.slice(0,5).forEach(user => {
//                 const div = document.createElement('div')
//                 div.innerHTML = `<h3>${user.name}</h3><p>${user.email}</p><p>${user.company.catchPhras}</p>`
//                 container.appendChild(div)
//             });
//         })
//     .catch (err => {
//         container.innerHTML = `<p style="color:red">Failed to load users: ${err.message}</p>`
//         })}
// displayUsers()
