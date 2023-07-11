
let searchInput = localStorage.getItem("id");
let apiUrl = `http://localhost:8000/students/${searchInput}`;
let cardData = "";

fetch(apiUrl)
  .then((response) => { return response.json() })
  .then((data) => {

    cardData = `
              <dl class="row shadow-lg">
              <h1 class="text-light shadow bg-dark">${data.first_name} ${data.last_name}</h1>
              <dt class="col-sm-5">Id</dt>
              <dd class="col-sm-5">${data.id}</dd>
              <dt class="col-sm-5">Email</dt>
              <dd class="col-sm-5">${data.email}</dd>
              <dt class="col-sm-5">Age</dt>
              <dd class="col-sm-5">${data.age}</dd>
              <dt class="col-sm-5">Phone Number</dt>
              <dd class="col-sm-5">${data.phone_number}</dd>
              <dt class="col-sm-5">Address</dt>
              <dd class="col-sm-5">${data.address}</dd>
              <dt class="col-sm-5">City</dt>
              <dd class="col-sm-5">${data.city}</dd>
              <dt class="col-sm-5">Major</dt>
              <dd class="col-sm-5">${data.major}</dd>
              <dt class="col-sm-5">GPA</dt>
              <dd class="col-sm-5">${data.gpa}</dd>
              <dt class="col-sm-5">Graduation Date</dt>
              <dd class="col-sm-5">${data.graduation_date}</dd>
              <dt class="col-sm-5">Gender</dt>
              <dd class="col-sm-5">${data.gender}</dd>
<div>
              <!-- Button trigger modal -->
<button id="E" type="button" class="btn btn-primary btn-sm w-25" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Edit
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Details...</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form id = "editForm${data._id}">
      <div class="row g-2">
      <div class="col-md">
        <div class="form-floating">
          <input name="id" type="number" class="form-control" id="floatingInputGrid3" placeholder="name@example.com" value="${data.id}" reqiure>
          <label for="floatingInputGrid">ID</label>
        </div>
      </div>
      <div class="col-md">
    <div class="form-floating">
      <input name="first_name" type="text" class="form-control" id="floatingInputGrid1" placeholder="name@example.com" value="${data.first_name}" require>
      <label for="floatingInputGrid">First Name</label>
    </div>
  </div>
  </div>
  <div class="row g-2">
  <div class="col-md">
    <div class="form-floating">
      <input name="last_name" type="text" class="form-control" id="floatingInputGrid2" placeholder="name@example.com" value="${data.last_name}" require>
      <label for="floatingInputGrid">Last Name</label>
    </div>
  </div>
  <div class="col-md">
    <div class="form-floating">
      <input name="email" type="text" class="form-control" id="floatingInputGrid4" placeholder="name@example.com" value="${data.email}" require>
      <label for="floatingInputGrid">Email</label>
    </div>
  </div>
  </div>
        <div class="row g-2">
  <div class="col-md">
    <div class="form-floating">
      <input type="text" class="form-control" id="floatingInputGrid5" placeholder="name@example.com" name="age" value="${data.age}">
      <label for="floatingInputGrid">Age</label>
    </div>
  </div>
  <div class="col-md">
    <div class="form-floating">
      <input type="text" class="form-control" id="floatingInputGrid6" placeholder="name@example.com" name="phone_number" value="${data.phone_number}">
      <label for="floatingInputGrid">Phone Number</label>
    </div>
  </div>
  </div>
        <div class="row g-2">
  <div class="col-md">
    <div class="form-floating">
      <input type="text" class="form-control" id="floatingInputGrid7" placeholder="name@example.com" name="address" value="${data.address}">
      <label for="floatingInputGrid">Address</label>
    </div>
  </div>
  <div class="col-md">
    <div class="form-floating">
      <input type="text" class="form-control" id="floatingInputGrid8" placeholder="name@example.com" name="city" value="${data.city}">
      <label for="floatingInputGrid">City</label>
    </div>
  </div>
  </div>
        <div class="row g-2">
  <div class="col-md">
    <div class="form-floating">
      <input type="text" class="form-control" id="floatingInputGrid9" placeholder="name@example.com" name="gpa" value="${data.gpa}">
      <label for="floatingInputGrid">GPA</label>
    </div>
  </div>
  <div class="col-md">
    <div class="form-floating">
      <input type="date" class="form-control" id="floatingInputGrid10" placeholder="name@example.com" name="graduation_date" value="${data.graduation_date}">
      <label for="floatingInputGrid">Graduation Date</label>
    </div>
  </div>
  </div>
  <div class="row g-2">
  <div class="col-md">
    <div class="form-floating">
      <select class="form-select" id="floatingSelectGrid11" name="major">
        <option selected>${data.major}</option>
        <option value="Information Technology">Information Technology</option>
        <option value="Mechanical Engineering">Mechanical Engineering</option>
        <option value="Electrical Engineering">Electrical Engineering</option>
        <option value="Computer Science Engineering">Computer Science Engineering</option>
        <option value="Biology">Biology</option>
        <option value="Math">Math</option>
        <option value="Physics">Physics</option>
        <option value="Chemistry">Chemistry</option>
      </select>
      <label for="floatingSelectGrid">Major</label>
    </div>
  </div>
  <div class="col-md">
    <div class="form-floating">
      <select class="form-select" id="floatingSelectGrid12" name="gender">
        <option selected>${data.gender}</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <label for="floatingSelectGrid">Gender</label>
    </div>
  </div>
  </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button id="${data._id}" onClick="handleEditSubmit(event)" type="submit" class="btn btn-primary">Save</button>
      </div>
      </form>
    </div>
  </div>
</div>

<!-- Button trigger modal -->
<button id ="D" type="button" class="btn btn-danger btn-sm " data-bs-toggle="modal" data-bs-target="#exampleModa2">
  DELETE 
</button>

<!-- Modal -->
<div class="modal fade bg-danger bg-opacity-50" id="exampleModa2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabe2">  Delete ${data.first_name} ${data.last_name}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <h1 class="text-danger">Are you sure?</h1>
      <p>Do you really want to delete these records? This process cannot be undone.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button id="${data._id}" type="button" onClick ="handleDeleteSubmit(event)" class="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
</div>
             
              
</div>              
                `;


    document.getElementById("card_body").innerHTML = cardData;
  });





// Delete request
function handleDeleteSubmit(event) {
  event.preventDefault()
  const studentId = event.target.id;

  fetch(`http://localhost:8000/students/${studentId}`, {
    method: 'DELETE',
  })
    .then((res) => {
      if (!res.ok) {
        console.log("Problem deleting student");
        return;
      }
      return res.json();
    })
    .then((result) => {
      console.log(result);
      // Refresh the page or update the list after successful deletion
      refreshPage();
    })
    .catch((err) => {
      console.log(err);
    });
}

function refreshPage() {
  window.location.href = "./index.html";
}


// PUT Request

function handleEditSubmit(event) {
  event.preventDefault()
  const studentId = event.target.id;
  const editForm = document.getElementById(`editForm${studentId}`);
  const formData = new FormData(editForm);
  const data = Object.fromEntries(formData);
  const jsonData = JSON.stringify(data);

  fetch(`http://localhost:8000/students/${studentId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: jsonData,
  })
    .then((res) => {
      if (!res.ok) {
        console.log("Problem updating student");
        return;
      }
      return res.json();
    })
    .then((result) => {
      console.log(result);
      // Refresh the page or update the list after successful update
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
}
