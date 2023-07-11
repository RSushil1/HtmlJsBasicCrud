// Get list by pagination
const defaultPage = 1;
const defaultLimit = 10;
fetchPaginatedData(defaultPage, defaultLimit);

function fetchPaginatedData(page, limit) {
    fetch(`http://localhost:3000/students?page=${page}&limit=${limit}`).then((data) => {

        return data.json();
    }).then((objectData) => {
        displayStudents(objectData.students);
        displayPagination(objectData.previousPage, objectData.nextPage, objectData.totalPage, objectData.totalStudents)
    })

    function displayStudents(students) {
        let tableData = "";
        students.map((values) => {
            tableData += `<tr>
                  <td>${values.id}</td>
                  <td>${values.first_name}</td>
                  <td>${values.last_name}</td>
                  <td>${values.email}</td>
                  <td>
                  <button id = "${values._id}" onClick = "handleViewSubmit(event)" type="submit" class="btn btn-primary btn-sm">Details</button>
                  </td>
                </tr>`;
        })
        document.getElementById("table_body").
            innerHTML = tableData;

    }
}




function displayPagination(previousPage, nextPage, totalPage, totalStudents) {
    const paginationButtons = document.getElementById("paginationButtons");
    paginationButtons.innerHTML = "";
    const currentPage = ((Number(nextPage || (Number(previousPage) + 2)) + Number(previousPage || 0)) / 2)
    const totalPageDisplay = document.getElementById("pc");
    totalPageDisplay.innerHTML = `<h6>Page ${currentPage} of ${totalPage}</h6>`;
    const totalDocDisplay = document.getElementById("tDoc");
    totalDocDisplay.innerHTML = `<h6>Total Students : ${totalStudents}</h6>`;

    if (previousPage) {
        const previousButton = createPaginationButton(previousPage, "Previous");
        paginationButtons.appendChild(previousButton);
    }
    else {
        const previousButton = createPaginationButton("disabled", "Previous");
        paginationButtons.appendChild(previousButton);
    }

    for (let i = 1; i <= totalPage; i++) {
        const pageButton = createPaginationButton(i, i);
        paginationButtons.appendChild(pageButton);
    }

    if (nextPage) {
        const nextButton = createPaginationButton(nextPage, "Next");
        paginationButtons.appendChild(nextButton);
    }
    else {
        const nextButton = createPaginationButton("disabled", "Next");
        paginationButtons.appendChild(nextButton);
    }





    function createPaginationButton(pageNumber, buttonText) {
        const pageButton = document.createElement("li");
        pageButton.classList.add("page-item", pageNumber);
        if (currentPage === buttonText) {
            pageButton.classList.add("active");
        }

        const pageLink = document.createElement("a");
        pageLink.classList.add("page-link");
        pageLink.setAttribute("id", `page-link-${pageNumber}`);
        pageLink.setAttribute("href", `#${pageNumber}`);
        pageLink.setAttribute("onClick", `fetchPaginatedData(${pageNumber}, defaultLimit)`)
        pageLink.textContent = buttonText;
        pageButton.appendChild(pageLink);

        return pageButton;
    }
}








function handleViewSubmit(event) {
    let studentId = event.target.id;
    localStorage.setItem("id", studentId);
    window.location.href = "./details.html";
}

let Nsearch = document.getElementById("Nsearch");
Nsearch.addEventListener("submit", search);
function search(event) {
    event.preventDefault();
    let Name = document.getElementById("name").value;
    let name = Name.toUpperCase();
    let U = `http://localhost:3000/students/name/${name}`
    fetch(U).then((res) => {
        res.json();
    }).then((data) => {

        let tableData = "";
        data.map((values) => {
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

