// Get list by pagination
const defaultPage = 1;
const defaultLimit = 10;
fetchPaginatedData(defaultPage, defaultLimit);

function fetchPaginatedData(page, limit) {
  fetch(`http://localhost:3000/students?page=${page}&limit=${limit}`).then((data) => {
    
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
                  <button id = "${values.id}" onClick = "handleViewSubmit(event)" type="submit" class="btn btn-primary btn-sm">Details</button>
                  </td>
                </tr>`;
    })
    document.getElementById("table_body").
        innerHTML = tableData;

})
}

function handleViewSubmit(event) {
    let studentId = event.target.id;
    localStorage.setItem("id",studentId);
    window.location.href="./details.html";
}

let Nsearch = document.getElementById("Nsearch");
Nsearch.addEventListener("submit",search);
function search(event){
    let name = document.getElementById("name").value;
    localStorage.setItem("name", name);
}


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






