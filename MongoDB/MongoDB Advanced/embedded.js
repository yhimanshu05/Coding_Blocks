db.teachers.deleteMany({});


//Inserting data intp teachers collection
db.teachers.insertMany([
    {
        name: 'Kartik', subject: 'Web Development',
        company: {
            name: 'Coding Blocks',
            country: 'India',
            state: 'Delhi',
            address: '47 Nishnat Kunj, Pitampura, Delhi-110034'
        }
    },
    {
        name: 'Monu', subject: 'Java',
        company: {
            name: 'Codeskiller',
            country: 'US',
            address: '47 Us Kunj, Pitampura, US-110034'
        }
    },
    {
        name: 'Mosina', subject: 'C++',
        company: {
            name: 'Hacker Blocks',
            country: 'UAE',
            address: '47 Dubai Kunj, Pitampura, UAE-110034'
        }
    },
    {
        name: 'Varun', subject: 'Data Science',
        company: {
            name: 'Online Coding Blocks',
            country: 'Canada',
            address: '47 Canada Kunj, Pitampura, Canada-110034'
        }
    },
]);


db.teachers.find({name: 'Monu'});

db.teachers.find({name: 'Monu'}).toArray();

db.teachers.find({name: 'Monu'}).toArray()[0];

// for fetching the details of a company through the teacher's name
db.teachers.find({name: 'Monu'}).toArray()[0].company;
db.teachers.find({name: 'Monu'}).toArray()[0].company.name; // just the company name is printed


