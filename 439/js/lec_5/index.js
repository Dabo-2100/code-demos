// let table = document.querySelector("table tbody");
// let phoneNameInput = document.querySelector("#phoneNameInput");
// let phonePriceInput = document.querySelector("#phonePriceInput");
// let phoneQtyInput = document.querySelector("#phoneQtyInput");

// let showPhones = () => {
//   table.innerHTML = "";
//   phones.forEach((el, index) => {
//     table.innerHTML += `
//             <tr>
//                 <th>${index + 1}</th>
//                 <th>${el.name}</th>
//                 <th>${el.price} $</th>
//                 <th>${el.qty}</th>
//                 <th>
//                 <button class="btn btn-danger" onclick="removePhone(${index})">
//                   <i class="fa-regular fa-trash-can"></i>
//                 </button>
//                 <button class="btn btn-warning" onclick="openPhoneToEdit(${index})">
//                   <i class="fa-solid fa-pen-to-square"></i>
//                 </button>
//                 </th>
//             </tr>
//         `;
//   });
// };

// showPhones();

// let addNewPhone = () => {
//   let newPhoneObj = {
//     name: phoneNameInput.value,
//     price: +phonePriceInput.value,
//     qty: +phoneQtyInput.value,
//   };
//   phones.push(newPhoneObj);

//   let phonesJSON = JSON.stringify(phones);
//   localStorage.setItem("phones", phonesJSON);
//   showPhones();
//   Swal.fire({
//     icon: "success",
//     title: "PHone Addedd Succssfully!",
//     timer: 1500,
//   });
// };

// let removePhone = (phoneIndex) => {
//   Swal.fire({
//     icon: "question",
//     title: "Are you sure ?",
//     text: "Data can't be retrived",
//     showDenyButton: true,
//     denyButtonText: "لا ياعم متمسحش",
//     confirmButtonText: "يلا بينا يا باشا",
//     confirmButtonColor: "red",
//     denyButtonColor: "green",
//   }).then((res) => {
//     if (res.isConfirmed == true) {
//       phones.splice(phoneIndex, 1);
//       let phonesJSON = JSON.stringify(phones);
//       localStorage.setItem("phones", phonesJSON);
//       showPhones();
//       Swal.fire({
//         icon: "success",
//         title: "Phone Deleted Succssfully !",
//       });
//     }
//   });
// };

// let phoneIndexToEdit = null;

// let openPhoneToEdit = (phoneIndex) => {
//   let phone = phones[phoneIndex];
//   phoneNameInput.value = phone.name;
//   phonePriceInput.value = phone.price;
//   phoneQtyInput.value = phone.qty;
//   phoneIndexToEdit = phoneIndex;
// };

// let saveChanges = () => {
//   let newPhoneObj = {
//     name: phoneNameInput.value,
//     price: +phonePriceInput.value,
//     qty: +phoneQtyInput.value,
//   };
//   phones[phoneIndexToEdit] = newPhoneObj;
//   let phonesJSON = JSON.stringify(phones);
//   localStorage.setItem("phones", phonesJSON);
//   showPhones();
//   Swal.fire({
//     icon: "success",
//     title: "Edit Done Succssfully",
//     timer: 1200,
//   });
//   // alert(" I will save changes in " + phoneIndexToEdit);
// };

// //
