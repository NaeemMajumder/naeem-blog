import Image from "next/image";
import allBlogs from "../../library/allBlogs";
import Link from "next/link";

export default async function Home() {
  let blogs = await allBlogs();
  // console.log(blogs);
  return (
    <>
      <h1>All Blogs</h1>

      {blogs.map((blog) => (
        <li key={blog.id}><Link href={`/blogs/${blog.id}`}>{blog.title}</Link></li>
      ))}
    </>
  );
}
