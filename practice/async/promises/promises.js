const posts = [
    {title: "post 1", description: "this is post 1"},
    {title: "post 2", description: "this is post 2"},
]

function readPosts(){
    let output = '';
    setTimeout(() => {
        for(let post of posts){
            output += `<li>${post.title}</li>`
        }
        document.body.innerHTML = output
    }, 1000)
}

// readPosts()

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error){
                resolve();
            }
            else{
                reject("Something went wrong")
            }
        }, 2000)
    })
}

// createPost({title: "post 3", description: "this is post 3"})
// .then(readPosts)
// .catch(err => console.log(err))

// Promise all
const promise1 = Promise.resolve("Hello world");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'goodbye')
});

Promise.all([promise1, promise2, promise3]).then(values => console.log(values))
