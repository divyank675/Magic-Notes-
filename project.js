console.log("My NOtes Website");
//addNotes btn code.
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function(e) {
    let addTitle = document.getElementById('addTitle');
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    let titles = localStorage.getItem('titles');
    if (notes == null) {

        notesObj = [];

    } else {
        notesObj = JSON.parse(notes);

    }
    if (titles == null) {
        titleObj = [];
    } else {
        titleObj = JSON.parse(titles);
    }
    console.log(notesObj);
    console.log(titleObj);
    notesObj.push(addTxt.value);
    titleObj.push(addTitle.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    localStorage.setItem('titles', JSON.stringify(titleObj));
    addTxt.value = "";
    addTitle.value = "";
    // console.log(notesObj);
    showNotes();
});


// method to show notes
function showNotes() {
    let notes = localStorage.getItem('notes');
    let titles = localStorage.getItem('titles');
    if (notes == null && title == null) {
        notesObj = [];
        titleObj = new Array();
    } else {
        notesObj = JSON.parse(notes);
        titleObj = JSON.parse(titles);
    }

    let html = "";
    notesObj.forEach(function(element, index) {
        titleObj.forEach(function(element2, index2) {
            if (index == index2) {
                html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">

            <div class="card-body">
            <h5 class="card-title">Note ${index+1}</h5>
            
            <h4 class="card-title">Title: ${element2}</h4>
            
                <p class="card-text">${element}</p>
                <a href="#" class="btn btn-primary" id=${index} onclick="deleteNotes(${index})">Delete Note</a>
            </div>
        </div>
        `;
            }
        });
    });

    let notesElm = document.getElementById('notes');
    if (notes.length != 0)
        notesElm.innerHTML = html;
}


//function to  delete a node.
function deleteNotes(id) {
    let notes = localStorage.getItem('notes');
    let titles = localStorage.getItem('titles');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    if (titles == null) {
        titleObj = [];
    } else {
        titleObj = JSON.parse(titles);
    }
    notesObj.splice(id, 1);
    titleObj.splice(id, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    localStorage.setItem('titles', JSON.stringify(titleObj));
    showNotes();
}


let search = document.getElementById('searchTxt');
search.addEventListener('input', function() {
    let inputVal = search.value

    // console.log("Input Event Trigered ",
    //     inputVal);

    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element) {
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        let titleTxt = element.getElementsByTagName('h4')[0].innerText;
        //     console.log(cardTxt);
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
        if (titleTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })
})