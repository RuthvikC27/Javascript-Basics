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

async function init(){
    await createPost({title: "post 3", body: "This is post three"})

    readPosts();
}

init();