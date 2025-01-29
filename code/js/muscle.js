// Exercise list by muscle
const exercisesByMuscle = {
    "Traps": [
        "Dumbbell shrugs",
        "Barbell shrugs",
        "Barbell upright row",
        "Machine shrugs",
        "Cable shrugs"
    ],
    "Front Shoulders": [
        "Overhead barbell press",
        "Dumbbell front raises",
        "Push press",
        "Arnold press",
        "Plate front raises"
    ],
    "Chest": [
        "Barbell bench press",
        "Incline dumbbell press",
        "Dumbbell flyes",
        "Decline barbell press",
        "Dips"
    ],
    "Biceps": [
        "Barbell curl",
        "Alternating dumbbell curl",
        "Hammer curl",
        "Preacher curl",
        "Concentration curl"
    ],
    "Forearms": [
        "Barbell wrist curl",
        "Reverse barbell wrist curl",
        "Farmer's walk",
        "Dumbbell wrist extension",
        "Isometric plate hold"
    ],
    "Obliques": [
        "Russian twists",
        "Side plank",
        "Hanging oblique leg raises",
        "Dumbbell side bends",
        "Barbell twist"
    ],
    "Abdominals": [
        "Floor crunch",
        "Hanging leg raises",
        "Front plank",
        "Ab wheel rollout",
        "Mountain climbers"
    ],
    "Quads": [
        "Barbell squats",
        "Leg press",
        "Dumbbell lunges",
        "Leg extensions",
        "Bulgarian split squats"
    ],
    "Rear Shoulders": [
        "Dumbbell rear delt fly",
        "Cable face pull",
        "Rear delt machine fly",
        "Dumbbell bent-over row",
        "Resistance band reverse fly"
    ],
    "Traps Middle": [
        "Barbell row",
        "Machine row",
        "T-bar row",
        "Face pulls",
        "Barbell shrugs"
    ],
    "Lats": [
        "Pull-ups",
        "Lat pulldown",
        "Low pulley row",
        "Dumbbell pull-over",
        "Pronated barbell row"
    ],
    "Triceps": [
        "Triceps cable extensions",
        "French press",
        "Dips",
        "Dumbbell triceps kickback",
        "Overhead dumbbell extensions"
    ],
    "Lower Back": [
        "Conventional deadlift",
        "Hyperextensions",
        "Good mornings",
        "Superman exercise",
        "Barbell row"
    ],
    "Glutes": [
        "Hip thrust",
        "Glute bridges",
        "Deep squats",
        "Lunges",
        "Hip abduction machine"
    ],
    "Hamstrings": [
        "Romanian deadlift",
        "Leg curl",
        "Good mornings",
        "Hamstring-focused hip thrust",
        "Reverse lunges"
    ],
    "Calves": [
        "Standing calf raises",
        "Seated calf raises",
        "Calf raises on leg press",
        "Jump rope",
        "Tiptoe walk"
    ]
};

// Función para mostrar los ejercicios
function showExercises(muscle) {
    const exerciseList = exercisesByMuscle[muscle] || [];
    const container = document.querySelector('.exercise-list');

    // Limpiar el contenido previo
    container.innerHTML = '';

    // Agregar título
    const title = document.createElement('h2');
    title.textContent = `Ejercicios para ${muscle}`;
    container.appendChild(title);

    // Agregar lista de ejercicios
    const list = document.createElement('ul');
    exerciseList.forEach(exercise => {
        const listItem = document.createElement('li');
        listItem.textContent = exercise;
        list.appendChild(listItem);
    });
    container.appendChild(list);
}

// Agregar eventos a los elementos con el atributo data-muscle
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los elementos dentro del SVG que tengan el atributo data-muscle
    const musclePaths = document.querySelectorAll('path[data-muscle]');
    
    // Agrega el evento click solo a los que tengan data-muscle
    musclePaths.forEach(path => {
        path.addEventListener('click', () => {
            const muscle = path.getAttribute('data-muscle'); // Lee el valor del atributo data-muscle
            showExercises(muscle);
        });
    });
});
