const posts = [
    {title:'Post Title 1',text: 'text 1'},
    {title:'Post Title 2',text: 'text 2'},
    {title:'Post Title 3',text: 'text 3'}
];

const listPosts = () => {
    console.log("Postlar listeleniyor ..")
    posts.map(post =>(console.log(post.title)))
};

const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {        
        resolve(posts.push(newPost));
        reject("Post Eklenemedi!!");
    })

    return promise1;
};

listPosts();

addPost({title:'Post Title 4',text: 'text 4'})
    .then(() => {
        console.log("YENI POSTLAR");
        listPosts();
    })
    .catch((error) => {
        console.log(error);
    });