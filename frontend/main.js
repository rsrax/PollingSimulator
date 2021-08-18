//main
fetch("http://localhost:3000/api/candidates", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  // Converting received data to JSON
  .then((response) => response.json())
  .then((json) => {
    // Create a variable to store HTML
    let li = ``;

    // Loop through each data and add a table row
    json.forEach((user) => {
      li += `<tr>
								<td> <input type="radio" name="candidateID" value="${user.candidateID}" /></td>
								<td>${user.candidateName}</td>
						</tr>`;
    });

    // Display result
    document.getElementById("candidates").innerHTML = li;
  });

let vote = async () => {
  let candidateID = document.querySelector(
    'input[name="candidateID"]:checked'
  ).value;
  let studentID = document.getElementById("studentID").value;
  let vote = {
    candidateID: candidateID,
    studentID: studentID,
  };
  fetch("http://localhost:3000/api/votes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vote),
  })
    .then((response) => response.json())
    .then((json) => {
      alert(json.status);
      window.location.href = "home.html";
    });
};

let addCandidate = async () => {
  let adminKey = document.querySelector('input[name="adminKey"]').value;
  let candidateID = document.querySelector('input[name="candidateID"]').value;
  let candidateName = document.querySelector(
    'input[name="candidateName"]'
  ).value;
  let newCandidate = {
    adminKey: adminKey,
    candidateID: candidateID,
    candidateName: candidateName,
  };
  fetch("http://localhost:3000/api/candidates", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCandidate),
  })
    .then((response) => response.json())
    .then((json) => {
      alert(json.status);
      window.location.href = "home.html";
    });
};

fetch("http://localhost:3000/api/candidates", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  // Converting received data to JSON
  .then((response) => response.json())
  .then((json) => {
    // Create a variable to store HTML
    let li = ``;

    // Loop through each data and add a table row
    json.forEach((user) => {
      li += `<tr>
            	<td>${user.candidateName} : ${user.votes}</td>
						</tr>`;
    });

    // Display result
    document.getElementById("summary").innerHTML = li;
  });

fetch("http://localhost:3000/api/candidates", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  // Converting received data to JSON
  .then((response) => response.json())
  .then((json) => {
    // Create a variable to store HTML
    let li = ``;

    let can =[]
    // Loop through each data and add a table row
    json.forEach((user) => {
      can.push(user);
    });
    can.sort(function(a, b) {
      return b.votes - a.votes;
    });
    li += `<tr>
        <td>Won: ${can[0].candidateName}(${can[0].votes})</td>
      </tr>
      <tr>
        <td>Lost: ${can[1].candidateName}(${can[1].votes})</td>
      </tr>`;
    // Display result
    document.getElementById("result").innerHTML = li;
  });