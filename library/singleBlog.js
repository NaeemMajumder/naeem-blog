export default async function singleBlog(id){
    let blog = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    return blog.json();
}