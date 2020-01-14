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
    {
        name: 'HTML',
        cool: false
    },
    {
        name: 'CSS',
        cool: false
    },
    {
        name: 'JavaScript',
        cool: true
    },
    {
        name: 'Java',
        cool: false
    },
    {
        name: 'C#',
        cool: false
    },
    {
        name: 'AWS',
        cool: true
    }
]

console.log(name.toUpperCase());
console.log(field);
console.log(desc);
logSpace();
logInterests();
logSpace();
logPast();
displaySkill(skills);

// print blank line.
function logSpace() {
    console.log(" ");
}

// steps through all interests.
function logInterests() {
    console.log('Interests:');
    for (let i in interests) {
        console.log(interests[i]);
    }
}

// steps through all positions in an array of objects and passes each one to displayPosition function.
function logPast() {
    console.log('Experience:');
    for (let i in positions) {
        displayPosition(positions[i].company, positions[i].title, positions[i].desc);
    }
    logSpace();
}

// print the elements of a position object in certain format.
function displayPosition(company, title, desc) {
    console.log(title + " at " + company + " - " + desc);
}

// checks if a skill is cool and prints it.
function displaySkill(skills) {
    for (let i in skills) {
        if (skills[i].cool === true) {
            console.log("BAM: " + skills[i].name);
        } else {
            console.log(skills[i].name);
        }
    }

}