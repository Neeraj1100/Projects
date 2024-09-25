// script.js

// Function to fetch user data
async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Function to display users in the DOM
function displayUsers(users) {
    const userList = document.getElementById('user-list');

    users.forEach(user => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>Name:</strong> ${user.name}<br>
            <strong>Email:</strong> ${user.email}<br>
            <strong>Address:</strong> ${user.address.street}, ${user.address.city}, ${user.address.zipcode}
        `;
        userList.appendChild(li);
    });
}

// Call the function to fetch and display users
fetchUserData();
