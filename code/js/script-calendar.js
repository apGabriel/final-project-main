const today = new Date();
let currentMonth = today.getMonth(); // Cambiado a let
let currentYear = today.getFullYear(); // Cambiado a let
const currentDate = today.getDate();

const calendarHeader = document.getElementById("calendar-header");
const calendarBody = document.querySelector(".calendar-body");
const modal = document.getElementById("event-modal");
const closeModal = document.querySelector(".close");
const saveEventButton = document.getElementById("save-event");
const deleteEventButton = document.getElementById("delete-event");
const selectedDateText = document.getElementById("selected-date");
const eventText = document.getElementById("event-text");
const startTimeInput = document.getElementById("start-time");
const endTimeInput = document.getElementById("end-time");

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Store events
let events = {};

// Function to generate calendar
function generateCalendar(month, year) {
    calendarHeader.textContent = `${months[month]} ${year}`;

    const dates = document.querySelectorAll(".date");
    dates.forEach((date) => date.remove());

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("div");
        emptyCell.classList.add("date", "empty");
        calendarBody.appendChild(emptyCell);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dateCell = document.createElement("div");
        dateCell.classList.add("date");
        dateCell.textContent = day;

        if (day === currentDate && month === today.getMonth() && year === today.getFullYear()) {
            dateCell.classList.add("today");
        }

        // Check if there's an event and add a red dot
        const eventKey = `${year}-${month}-${day}`;
        if (events[eventKey]) {
            const eventIndicator = document.createElement("span");
            eventIndicator.classList.add("event-indicator");
            eventIndicator.title = `${events[eventKey].description} (${events[eventKey].startTime} - ${events[eventKey].endTime})`;
            dateCell.appendChild(eventIndicator);
        }

        dateCell.addEventListener("click", () => openModal(day, month, year));
        calendarBody.appendChild(dateCell);
    }
}

// Open modal for managing events
function openModal(day, month, year) {
    const eventKey = `${year}-${month}-${day}`;
    modal.style.display = "block";
    selectedDateText.textContent = `Date: ${months[month]} ${day}, ${year}`;

    // Populate inputs if the event exists
    const eventData = events[eventKey] || { description: "", startTime: "", endTime: "" };
    eventText.value = eventData.description;
    startTimeInput.value = eventData.startTime || "";
    endTimeInput.value = eventData.endTime || "";
    deleteEventButton.style.display = eventData.description ? "inline-block" : "none";
}

// Close modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Save event
saveEventButton.addEventListener("click", () => {
    const selectedDate = selectedDateText.textContent.split(": ")[1];
    const [month, day, year] = selectedDate.split(" ");
    const eventKey = `${year}-${months.indexOf(month)}-${parseInt(day)}`;

    const eventValue = eventText.value.trim();
    const startTime = startTimeInput.value.trim();
    const endTime = endTimeInput.value.trim();

    if (eventValue || startTime || endTime) {
        events[eventKey] = { description: eventValue, startTime, endTime };
    } else {
        delete events[eventKey]; // Remove event if all fields are empty
    }

    modal.style.display = "none";
    generateCalendar(currentMonth, currentYear); // Refresh calendar
});

// Delete event
deleteEventButton.addEventListener("click", () => {
    const selectedDate = selectedDateText.textContent.split(": ")[1];
    const [month, day, year] = selectedDate.split(" ");
    const eventKey = `${year}-${months.indexOf(month)}-${parseInt(day)}`;

    delete events[eventKey];
    modal.style.display = "none";
    generateCalendar(currentMonth, currentYear); // Refresh calendar
});

const prevMonthButton = document.getElementById("prev-month");
const nextMonthButton = document.getElementById("next-month");

// Función para cambiar de mes
prevMonthButton.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar(currentMonth, currentYear);
});

nextMonthButton.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar(currentMonth, currentYear);
});

// Initialize calendar
generateCalendar(currentMonth, currentYear);
