import Image from "next/image";
import allBlogs from "../../library/allBlogs";

export default async function Home() {
  let blogs = await allBlogs();
  // console.log(blogs);
  return (
    <>
      <h1>All Blogs</h1>



{
  blogs.map(blog=><li key={blog.id}>{blog.title}</li>)
}


    </>
  );
}
