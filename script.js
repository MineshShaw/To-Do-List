// Variables
const clock = document.getElementById('clock');
const addBtn = document.getElementsByClassName('add-btn')[0];
const modalCont = document.getElementsByClassName('modal-cont')[0];
const mainCont = document.getElementsByClassName('main-cont')[0];

// clock
setInterval(() => {
    const date = new Date();
    const hours = (date.getHours() < 10)? '0' + date.getHours() : date.getHours();
    const minutes = (date.getMinutes() < 10)? '0' + date.getMinutes() : date.getMinutes();
    const seconds = (date.getSeconds() < 10)? '0' + date.getSeconds() : date.getSeconds();

    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}, 1000);

// Add Task
addBtn.addEventListener('click' , () => {
    modalCont.style.display = (modalCont.style.display == 'flex')? 'none' : 'flex';
})

// Save Task
modalCont.addEventListener('keydown', (e) => {
    if (e.key == 'Shift') {
        const data = document.getElementsByClassName('textArea-cont')[0].value;
        const id = shortid();
        const ticketColor = document.getElementsByClassName('active')[0].classList[0];
        createTicket(ticketColor, data, id);
        modalCont.style.display = 'none';
    }
})

Array.from(document.getElementsByClassName('priority-color')).forEach((element) => {
    element.addEventListener('click', () => {
        document.getElementsByClassName('active')[0].classList.remove('active');
        element.classList.add('active');
    })
});

function createTicket(ticketColor, data, id) {
    const ticket = document.createElement('div');
    ticket.classList.add('ticket-cont');
    ticket.innerHTML = `<div class="ticket-color ${ticketColor}"></div>`
    +`<div class="ticket-id">${id}</div>`
    +`<div class="task-area" contenteditable="false">${data}</div>`
    +'<div class="ticket-lock">'
    +'<i class="fa-solid fa-lock"></i>'
    +'</div>'
    mainCont.appendChild(ticket);
}

// Delete Task

let deleteMode = false;

document.getElementsByClassName('remove-btn')[0].addEventListener('click', () => {
    deleteMode = !deleteMode;
    document.getElementsByClassName('fa-trash')[0].style.color = (deleteMode)? 'red' : 'white';
})

mainCont.addEventListener('click', (e) => {
    if (deleteMode && e.target.classList.contains('ticket-cont')) {
        e.target.remove();
    }
})

// Editing Tasks

mainCont.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-lock') || e.target.classList.contains('fa-lock-open')) {
        e.target.parentElement.parentElement.children[2].contentEditable = (e.target.parentElement.parentElement.children[2].contentEditable == 'true')? 'false' : 'true';
        if (e.target.classList.contains('fa-lock')) {
            e.target.classList.remove('fa-lock');
            e.target.classList.add('fa-lock-open');
        } else {
            e.target.classList.remove('fa-lock-open');
            e.target.classList.add('fa-lock');
        }
    } else if (e.target.classList.contains('ticket-color')) {
        changeTicketColor(e.target);
    }
});

function changeTicketColor(e) {
    const list = ['lightpink','lightgreen','lightblue','black'];
    let index = list.findIndex(element => {return element == e.classList[1]});
    index++;
    index %= 4;
    e.classList.remove(e.classList[1]);
    e.classList.add(list[index]);
}

// Filter

let filterOn = false;

document.getElementsByClassName('toolbox-priority-cont')[0].addEventListener('click', (e) => {
    if (e.target.classList.contains('color')) {
        if (e.target.classList.contains('activeFilter')) {
            e.target.classList.remove('activeFilter');
            removeFilters();
        } else if (filterOn) {
            document.getElementsByClassName('activeFilter')[0].classList.remove('activeFilter');
            e.target.classList.add('activeFilter');
            FilterTickets(e.target.classList[0]);
        } else {
            e.target.classList.add('activeFilter');
            FilterTickets(e.target.classList[0]);
        }
    }
})

function removeFilters() {
    Array.from(document.getElementsByClassName('ticket-cont')).forEach((element) => {
        element.style.display = 'block';
    })
    filterOn = false;
}

function FilterTickets(ticketColor) {
    filterOn = true;
    Array.from(document.getElementsByClassName('ticket-cont')).forEach((element) => {
        if (element.children[0].classList.contains(ticketColor)) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    })
}

// Change Theme

document.getElementsByClassName('theme-mode-btn')[0].addEventListener('click', (element) => {
    let e = element.target;
    if (e.classList[1] == 'fa-moon') {
        document.body.style.backgroundColor = '#4b4b4b';
        e.classList.remove('fa-moon');
        e.classList.add('fa-sun');
    } else {
        document.body.style.backgroundColor = 'white';
        e.classList.remove('fa-sun');
        e.classList.add('fa-moon');
    }
})