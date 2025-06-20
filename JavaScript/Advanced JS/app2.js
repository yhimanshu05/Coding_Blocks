//Synchronous task: Occuring at  the same time means working side by side or we can say working parallel.
//Asynchronous task: Not occuring at the same time.
// Promises : It is a way to handle asynchronous operations in JavaScript.

let watchingMovie = true;

let p = new Promise(function(resolve, reject) { 
    if (!watchingMovie) return reject("No! Popcorn");

    resolve("Yaay! Popcorns");
});

p.then(
    // This function will run on success
    function(msg) {
        console.log("Success: ", msg);
    },
    // This function will run on failure.
    function(err) {
        console.log("Failuer: ", err);
    }
)

// Whenever me make any promise by default it goes in pending state.

let watchingMovies = false;

function delay(){
    let currentTime = new Date().getTime();
    // console.log(currentTime);
    while(currentTime+1000>new Date().getTime()){

    }
}
let p1 = new Promise(function(resolve, reject) {
    delay(); 
    if (!watchingMovies) return reject("No! Popcorn");

    resolve("Yaay! Popcorns");
});

p1.then(
    // This function will run on success
    function(msg) {
        console.log("Success: ", msg);
    },
    // This function will run on failure.
    function(err) {
        console.log("Failuer: ", err);
    }
)


//Promises States
// 1. Pending: When we create a promise, it is in the pending state.
// 2. Resolved (Fulfilled): The promise completed successfully, it gets resolved.
// 3. Rejected: The promise failed, it gets rejected.
// 4. Settled: The promise is either resolved or rejected, it is no longer pending, we say it is settled.

function willYouMarryMe(fightsCount){
    return new Promise((resolve, reject)=>{
        setTimeout (()=>{
            if(fightsCount>100) return reject("Not getting married");
            resolve("Getting married happily");
        },3000);
    })
}

willYouMarryMe(109)
    .then(
        (msg)=>{
            console.log(msg);
        },
        (err)=>{
            console.log(err);
        }
    )



function download(url){
    console.log("Downloading starts");

    return new Promise((resolve, reject)=>{
        let downloadedFile = url.split('/').pop();
        setTimeout(()=>{
            console.log("Downloading Ends");
            resolve(downloadedFile)
        },2000);
    })
}

function compress(downloadFile){}

function upload(compressedFile){}

download('http://codingblocks.com/myfile.mp4')
    .then(
        (downloadedFile)=>{
            console.log(downloadedFile);
        }
        // (err)=>{
        //    console.log(err); 
        // } or we can use catch for handling error

    )
    .catch((err)=>{
        console.log(err);
    })
