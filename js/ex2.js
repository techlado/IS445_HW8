//create function to take username input
function getUserInfo() {
  //access DOM to get username
  const username = document.getElementById("usernameInput").value;
  //build url using username
  const url = `https://api.github.com/users/${username}`;

  //fetch url
  fetch(url)
      //parse JSON
      .then(response => response.json())
      //call displayUserInfo function to display data
      .then(data => {
          // Process the retrieved user data
          displayUserInfo(data);
      })
      .catch(error => {
          console.error('Error fetching user data:', error);
      });
}

//Create function to display user info given user data from URL
function displayUserInfo(userData) {
  //access name element and update name. If no info, "N/A"
  document.getElementById("name").textContent = userData.name || "N/A";
  //Repeat for blog and created
  document.getElementById("blog").textContent = userData.blog || "N/A";
  //use constructor for Date to convert date to string
  document.getElementById("accountCreated").textContent = userData.created_at || "N/A";

  //access profilePicture element through DOM and assign its html as an image using the avatar url from userData
  const profilePicture = document.getElementById("profilePicture");
  profilePicture.innerHTML = `<img src="${userData.avatar_url}" alt="Profile Picture">`;
}


