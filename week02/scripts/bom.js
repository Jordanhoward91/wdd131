// document.addEventListener('DOMContentLoaded', function() {
//     // Add click event listener to Add Chapter button
//     // document.getElementById('addChapterBtn').addEventListener('click', function() {
// 	document.getElementById('addChapterBtn').addEventListener('click', function() {
//         // Get input element and its value
//         let input = document.getElementById('favchap'); // Update to favchap
//         let inputValue = input.value.trim(); // Trim to remove leading/trailing whitespace

//         // Check if input is not blank
//         if (inputValue !== '') {
//             // Create li element
//             let li = document.createElement('li');
//             li.textContent = inputValue;

//             // Create delete button
//             let deleteBtn = document.createElement('button');
//             deleteBtn.textContent = '❌';
            
//             // Add event listener to delete button to remove li element
//             deleteBtn.addEventListener('click', function () {
//                 li.remove();
//                 input.focus(); // Return focus to input after deletion
//             });

//             // Append delete button to li
//             li.appendChild(deleteBtn);

//             // Append li to ul list
//             document.getElementById('list').appendChild(li); // Update to list

//             // Clear input value
//             input.value = '';

//             // Set focus back to input element
//             input.focus();
//         } else {
//             // If input is blank, provide a message or do nothing and return focus to input
//             alert('Please enter a chapter title.');
//             input.focus();
//         }
//     });
// });



const inputElement = document.querySelector('#favchap');
const buttonElement = document.querySelector('button');
const listElement = document.querySelector('#list');


buttonElement.addEventListener('click', function () {
  if (inputElement.value.trim() !== '') {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = inputElement.value;
    deleteButton.textContent = '❌';
    li.appendChild(deleteButton);
    listElement.appendChild(li);

    deleteButton.addEventListener('click', function (event) {
      listElement.removeChild(li);
      inputElement.focus();
    });

    inputElement.value = '';
  }
  inputElement.focus();

});