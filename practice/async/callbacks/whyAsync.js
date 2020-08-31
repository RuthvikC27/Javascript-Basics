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
    setTimeout(() => {
        posts.push(post)
    }, 2000)
}

createPost({title: "post 3", description: "this is post 3"})

readPosts()


// As we can see post 3 is not getting printed. So we need asynchronous type solutions like callbacks, promises, await