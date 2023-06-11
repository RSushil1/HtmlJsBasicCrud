// Get list
fetch("http://localhost:3000/students").then((data) => {
    // console.log(data);
    return data.json();
}).then((objectData) => {
    // console.log(objectData);
    let tableData = "";
    objectData.map((values) => {
        tableData += `<tr>
                  <td>${values.id}</td>
                  <td>${values.first_name}</td>
                  <td>${values.last_name}</td>
                  <td>${values.email}</td>
                  <td>
                  <!-- Button trigger modal -->
<button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  EDIT
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

      <form id="editForm${values.id}" action="">
      <div class="form-floating mb-3">
          <input type="first name" name="first_name" class="form-control" id="first_name"
              placeholder="name@example.com">
          <label for="floatingInput">First Name</label>
      </div>
      <div class="form-floating mb-3">
          <input type="last name" name="last_name" class="form-control" id="last_name"
              placeholder="name@example.com">
          <label for="floatingInput">Last Name</label>
      </div>
      <div class="form-floating mb-3">
          <input type="text" name="email" class="form-control" id="email"
              placeholder="name@example.com">
          <label for="floatingInput">Email address</label>
      </div>

</div>
<div class="modal-footer">
  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  <button type="submit" value="Refresh Page" onClick = "handleEditSubmit(${values.id})"
      class="btn btn-primary">Save</button>
</div>
</form>
      </div> 
    </div>
  </div>
</div>
                  <button id = "${values.id}" onClick = "handleDSubmit(event)" type="submit" class="btn btn-danger">DELETE</button>
                  </td>
                </tr>`;
    })
    document.getElementById("table_body").
        innerHTML = tableData;

})


// Get list by Search
// let Sform = document.getElementById('Sform');
// Sform.addEventListener('submit', handleSearchSubmit);

// function handleSearchSubmit(event) {
// // event.preventDefault();

//   let searchInput = document.getElementById('search-input').value;
//   console.log(searchInput);
//   let apiUrl = `http://localhost:3000/students/name/${searchInput}`;


//     fetch(apiUrl).then((data) => {
//         //  console.log(data);
//         return data.json();
//     }).then((objectData1) => {
//         // console.log(objectData);
//         let tableData = "";
//         objectData1.map((values) => {
//             tableData += `<tr>
//                       <td>${values.id}</td>
//                       <td>${values.first_name}</td>
//                       <td>${values.last_name}</td>
//                       <td>${values.email}</td>
//                       <td>
//                       <!-- Button trigger modal -->
//     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
//       EDIT
//     </button>

//     <!-- Modal -->
//     <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//       <div class="modal-dialog">
//         <div class="modal-content">
//           <div class="modal-header">
//             <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
//             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//           </div>
//           <div class="modal-body">

//           <form id="editForm${values.id}" action="">
//           <div class="form-floating mb-3">
//               <input type="first name" name="first_name" class="form-control" id="first_name"
//                   placeholder="name@example.com">
//               <label for="floatingInput">First Name</label>
//           </div>
//           <div class="form-floating mb-3">
//               <input type="last name" name="last_name" class="form-control" id="last_name"
//                   placeholder="name@example.com">
//               <label for="floatingInput">Last Name</label>
//           </div>
//           <div class="form-floating mb-3">
//               <input type="text" name="email" class="form-control" id="email"
//                   placeholder="name@example.com">
//               <label for="floatingInput">Email address</label>
//           </div>

//     </div>
//     <div class="modal-footer">
//       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//       <button type="submit" value="Refresh Page" onClick = "handleEditSubmit(${values.id})"
//           class="btn btn-primary">Save</button>
//     </div>
//     </form>
//           </div> 
//         </div>
//       </div>
//     </div>
//                       <button id = "${values.id}" onClick = "handleDSubmit(event)" type="submit" class="btn btn-danger">DELETE</button>
//                       </td>
//                     </tr>`;
//         })
//         document.getElementById("table_body1").
//             innerHTML = tableData;

//     })
// //  }



// post request

let form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(form);
    let data = Object.fromEntries(formData);
    let jsonData = JSON.stringify(data);

    fetch('http://localhost:3000/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: jsonData

    }).then((res) => {
        return res.json();
    }).then((result) => {
        console.log(result);
        refreshPage();
    }).catch((err) => {
        console.log(err);
    })
}

function refreshPage() {
    window.location.reload();
}

// PUT Request

function handleEditSubmit(studentId) {
    const editForm = document.getElementById(`editForm${studentId}`);
    console.log(editForm)
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

// Search list
const searchFun = () => {
    let filter = document.getElementById("search-input1").value.toUpperCase();
    let myTable = document.getElementById("table_body");
    let tr = myTable.getElementsByTagName("tr")
    console.log(tr);

    for (var i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[1];
        if (td) {
            let textvalue = td.textContent || td.innerHTML;
            if (textvalue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = ""
            } else {
                tr[i].style.display = "none";
            }
        }

    }
}






