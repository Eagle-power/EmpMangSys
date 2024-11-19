const employees = [
    {
        "id": 1,
        "firstName": "Aarav",
        "email": "a@a.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 9,
            "completed": 2,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Complete report",
                "taskDescription": "Finish the monthly sales report.",
                "taskDate": "2024-10-19",
                "category": "Work"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Team meeting",
                "taskDescription": "Attend the quarterly strategy meeting.",
                "taskDate": "2024-10-22",
                "category": "Meeting"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Client call",
                "taskDescription": "Discuss project requirements with the client.",
                "taskDate": "2024-10-21",
                "category": "Client"
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Vihaan",
        "email": "employee2@example.com",
        "password": "123",
        "taskCounts": {
            "active": 3,
            "newTask": 2,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare presentation",
                "taskDescription": "Create a presentation for the new project proposal.",
                "taskDate": "2024-10-20",
                "category": "Work"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Submit timesheet",
                "taskDescription": "Complete and submit the weekly timesheet.",
                "taskDate": "2024-10-18",
                "category": "Administration"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Resolve support tickets",
                "taskDescription": "Work on resolving pending support tickets.",
                "taskDate": "2024-10-17",
                "category": "Support"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Code review",
                "taskDescription": "Review the code for the new feature implementation.",
                "taskDate": "2024-10-21",
                "category": "Development"
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Anaya",
        "email": "employee3@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 2,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Organize files",
                "taskDescription": "Organize documents in the shared drive.",
                "taskDate": "2024-10-19",
                "category": "Work"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Update website",
                "taskDescription": "Make content updates to the company website.",
                "taskDate": "2024-10-18",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "File tax returns",
                "taskDescription": "File the quarterly tax returns.",
                "taskDate": "2024-10-15",
                "category": "Finance"
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Ishaan",
        "email": "employee4@example.com",
        "password": "123",
        "taskCounts": {
            "active": 4,
            "newTask": 2,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Inventory check",
                "taskDescription": "Perform a check on office inventory.",
                "taskDate": "2024-10-16",
                "category": "Administration"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Client onboarding",
                "taskDescription": "Assist with the onboarding of a new client.",
                "taskDate": "2024-10-19",
                "category": "Client"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare budget report",
                "taskDescription": "Prepare the budget report for the next fiscal quarter.",
                "taskDate": "2024-10-22",
                "category": "Finance"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "System upgrade",
                "taskDescription": "Upgrade the office computer systems.",
                "taskDate": "2024-10-14",
                "category": "IT"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Market research",
                "taskDescription": "Conduct market research for the new product.",
                "taskDate": "2024-10-20",
                "category": "Research"
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Riya",
        "email": "employee5@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 2,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Schedule interviews",
                "taskDescription": "Set up interviews for the hiring process.",
                "taskDate": "2024-10-20",
                "category": "HR"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Monthly maintenance",
                "taskDescription": "Perform monthly maintenance on office equipment.",
                "taskDate": "2024-10-15",
                "category": "Maintenance"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Data backup",
                "taskDescription": "Ensure all company data is backed up.",
                "taskDate": "2024-10-18",
                "category": "IT"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Policy review",
                "taskDescription": "Review company policies for updates.",
                "taskDate": "2024-10-17",
                "category": "Administration"
            }
        ]
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
    
]

export const setLocalStorage =() =>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return{ employees, admin }
}
