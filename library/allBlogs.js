export default async function allBlogs(){
    let blogs = await fetch('https://jsonplaceholder.typicode.com/posts');

    return blogs.json();
}