let searchName = localStorage.getItem("name");
let NUrl = `http://localhost:3000/students/name/${searchName}`;
let cardData = "";

fetch(NUrl)
    .then((response) => { return response.json() })
    .then((data) => {

        cardData += `
    <h5 class="card-title">NAME =  ${data.first_name} ${data.last_name} </h5>
    <h6 class="card-title">Id = ${data.id}  </h6>
    <h6 class="card-title">Email = ${data.email} </h6>
    <h6 class="card-title">Age =  ${data.age} </h6>
    <h6 class="card-title">Phone Number =  ${data.phone_number} </h6>
    <h6 class="card-title">Address =  ${data.address} </h6>
    <h6 class="card-title">City =  ${data.city} </h6>
    <h6 class="card-title">Major =  ${data.major} </h6>
    <h6 class="card-title">GPA =  ${data.gpa} </h6>
    <h6 class="card-title">Gradution Date =  ${data.graduation_date} </h6>
    <h6 class="card-title">Gender =  ${data.gender} </h6>
              <div>
                <!-- Button trigger modal -->
<button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
EDIT
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
  <div class="modal-header">
    <h1 class="modal-title fs-5" id="staticBackdropLabel">Edit Details</h1>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">

    <form class="row g-3" id = "editForm${data.id}" action="">
<div class="col-md-6">
<label for="validationDefault01" class="form-label">First name</label>
<input type="text" class="form-control" id="validationDefault01" value="${data.first_name}" name="first_name" required>
</div>
<div class="col-md-6">
<label for="validationDefault02" class="form-label">Last name</label>
<input type="text" class="form-control" id="validationDefault02" value="${data.last_name}" name="last_name" required>
</div>
<div class="col-md-6">
<label for="validationDefault02" class="form-label">Email</label>
<input type="text" class="form-control" id="validationDefault03" value="${data.email}" name="email" required>
</div>
<div class="col-md-6">
  <label for="validationDefault03" class="form-label">Gender</label>
  <input type="text" class="form-control" id="validationDefault04" required value="${data.gender}" name="gender" >
</div>
<div class="col-md-6">
  <label for="validationDefault03" class="form-label">Age</label>
  <input type="text" class="form-control" id="validationDefault05" required value="${data.age}" name="age" >
  </div>
  <div class="col-md-6">
    <label for="validationDefault03" class="form-label">Phone Number</label>
    <input type="text" class="form-control" id="validationDefault06" required value="${data.phone_number}" name="phone_number" >
    </div>
    <div class="col-md-6">
      <label for="validationDefault03" class="form-label">City</label>
      <input type="text" class="form-control" id="validationDefault07" required value="${data.city}" name="city" >
      </div>
    <div class="col-md-6">
<label for="validationDefault03" class="form-label">Address</label>
<input type="text" class="form-control" id="validationDefault08" required value="${data.address}" name="address" >
</div>
<div class="col-md-6">
<label for="validationDefault03" class="form-label">Major</label>
<input type="text" class="form-control" id="validationDefault09" required value="${data.major}" name="major" >
</div>
<div class="col-md-6">
<label for="validationDefault03" class="form-label">GPA</label>
<input type="text" class="form-control" id="validationDefault10" required value="${data.gpa}" name="gpa" >
</div>
<div class="col-md-6">
<label for="validationDefault03" class="form-label">Graduation Date</label>
<input type="text" class="form-control" id="validationDefault11" required value="${data.graduation_date}" name="graduation_date" >
</div>
<div class="modal-footer">
<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
<button type="submit" onClick = "handleEditSubmit(${data.id})"  value="Refresh Page" class="btn btn-primary">Submit</button>
</div>

</form>
  </div>
</div>
</div>
</div>
                <button id="${data.id}" type="button" onclick="handleDSubmit(event)" class="btn btn-danger btn-sm">DELETE</button>
                
                </div>
              
                
                `;


        document.getElementById("card_body").innerHTML = cardData;
    });

    // Delete request
function handleDSubmit(event) {
    const studentId = event.target.id;

    fetch(`http://localhost:3000/students/${studentId}`, {
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

function handleEditSubmit(studentId) {
    const editForm = document.getElementById(`editForm${studentId}`);
    const formData = new FormData(editForm);
    const data = Object.fromEntries(formData);
    const jsonData = JSON.stringify(data);

    fetch(`http://localhost:3000/students/${studentId}`, {
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
            refreshPage();
        })
        .catch((err) => {
            console.log(err);
        });
}
