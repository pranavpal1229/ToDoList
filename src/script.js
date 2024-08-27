import "./style.css";

const addTask = document.querySelector("#add-task-btn");

addTask.addEventListener('click', displayPopup);

function displayPopup() {
    const popup = document.createElement('div');
    popup.classList.add('popup');

    const xButton = document.createElement('button')
    xButton.innerHTML = '<i class="fa-regular fa-x fa-lg" style="color: #ff0000;"></i>';
    xButton.style.backgroundColor = 'transparent'
    xButton.classList.add('xButton')
    xButton.style.border = 'none'
    popup.appendChild(xButton)

    const input = document.createElement('input');
    input.type = 'text';
    input.classList.add('input');
    input.style.border = 'none';
    input.placeholder = 'Enter your task here...';

    const priority = document.createElement('div');
    priority.classList.add('priorities');
    
    const low = document.createElement('button');
    low.textContent = 'Low';
    low.style.backgroundColor = '#68de7c';
    low.classList.add('priority');
    
    const med = document.createElement('button');
    med.textContent = 'Medium';
    med.style.backgroundColor = '#f2d675';
    med.classList.add('priority');
    
    const high = document.createElement('button');
    high.textContent = 'High';
    high.style.backgroundColor = '#ffabaf';
    high.classList.add('priority');
    
    const priorities = [low, med, high];
    priorities.forEach(element => {
        priority.appendChild(element);
    });

    const dateContainer = document.createElement('div');
    dateContainer.classList.add('date-container');

    const dateButton = document.createElement('button');
    dateButton.innerHTML = '<i class="fa-regular fa-calendar"></i> Add Date';
    dateButton.classList.add('date-picker');
    
    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.classList.add('date-input');
    dateInput.style.display = 'none'; // Hide date input initially

    dateButton.addEventListener('click', () => {
        dateInput.style.display = 'block'; // Show date input when button is clicked
        dateButton.remove()
        dateInput.focus(); // Focus the input so the calendar popup appears
    });

    dateContainer.appendChild(dateButton);
    dateContainer.appendChild(dateInput);

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.classList.add('add');
    button.addEventListener('click', () => {
        console.log('Task added:', input.value);
        popup.remove(); // Remove popup after adding the task
    });

    popup.appendChild(input);
    popup.appendChild(priority);
    popup.appendChild(dateContainer);
    popup.appendChild(button);
    document.body.appendChild(popup);
}
