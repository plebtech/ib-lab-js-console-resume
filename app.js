// variables.
let name = 'Nick Mc';
let field = 'Software Development';
let desc = 'Strong analytical mind with a keen interest in solving problems.';
let interests = [
    'Back End Development',
    'Discord bots',
    'I/O',
    'Synthwave'
]
let positions = [
    {
        company: 'H&R Block',
        title: 'Field Services Technician',
        desc: 'Serviced printers and plugged stuff in.'
    },
    {
        company: 'Halliburton',
        title: 'Operator Assistant I',
        desc: 'Rigged up and broke down oil field services equipment/pipes. Drove a truck.'
    },
    {
        company: "Foosackly's",
        title: 'Cook',
        desc: 'Food preparation. Cooked chicken fingers and french fries.'
    }

]
let skills = [
    'HTML',
    'CSS',
    'BAM: JavaScript',
    'Java',
    'C#',
    'BAM: AWS'
]

// calls main function.
logResume();

// overarching function.
function logResume() {
    logName();
    logField();
    logDesc();
    logSpace();
    logInterests();
    logSpace();
    logPast();
    logSkills();
}

// print name to console.
function logSpace() {
    console.log(" ");
}

function logName() {
    console.log(name.toUpperCase());
}

// print career field to console.
function logField() {
    console.log(field);
}

function logDesc() {
    console.log(desc);
}

function logInterests() {
    console.log('Interests:');
    for (let i in interests) {
        console.log(interests[i]);
    }
}

function logPast() {
    console.log('Experience:');
    for (let i in positions) {
        console.log(positions[i].company);
        console.log(positions[i].title);
        console.log(positions[i].desc);
        logSpace();
    }
}

function displayPosition(position) {
    console.log(position.company);
    console.log(position.title);
    console.log(position.desc);
}

function logSkills() {
    console.log('Skills:');
    for (let i in skills) {
        console.log(skills[i]);
    }
}