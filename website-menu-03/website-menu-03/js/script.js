const yearsCounter = document.getElementById('years');
const employeesCounter = document.getElementById('employees');
const projectsCounter = document.getElementById('projects');

let years = 0;
let employees = 0;
let projects = 0;

function updateCounters() {
    yearsCounter.textContent = years;
    employeesCounter.textContent = employees;
    projectsCounter.textContent = projects;
}

function animateCounters() {
    const yearsTarget = 10;
    const employeesTarget = 11;
    const projectsTarget = 2600;

    const yearsStep = yearsTarget / 400; // 10 en 3 secondes
    const employeesStep = employeesTarget / 400; // 11 en 3 secondes
    const projectsStep = projectsTarget / 400; // 2600 en 3 secondes

    let yearsIncrement = 0;
    let employeesIncrement = 0;
    let projectsIncrement = 0;

    const interval = setInterval(() => {
        if (years < yearsTarget) {
            years += yearsStep;
            yearsCounter.textContent = Math.round(years);
        }
        if (employees < employeesTarget) {
            employees += employeesStep;
            employeesCounter.textContent = Math.round(employees);
        }
        if (projects < projectsTarget) {
            projects += projectsStep;
            projectsCounter.textContent = Math.round(projects);
        }

        yearsIncrement += yearsStep;
        employeesIncrement += employeesStep;
        projectsIncrement += projectsStep;

        if (yearsIncrement >= yearsTarget && employeesIncrement >= employeesTarget && projectsIncrement >= projectsTarget) {
            clearInterval(interval);
        }
    }, 1);
}

animateCounters();
