import allBlogs from "../../library/allBlogs";
import Link from "next/link";

export default async function Home({ searchParams }) {
  const { page = 1 } = searchParams;

  const blogs = await allBlogs();

  const pageSize = 9;
  const startIndex = (page - 1) * pageSize;

  const paginatedBlogs = blogs.slice(startIndex, startIndex + pageSize);

  const totalPages = Math.ceil(blogs.length / pageSize);

  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-10 mb-8 text-gray-800">All Blogs</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {paginatedBlogs.map((blog) => (
          <div key={blog.id} className="card w-full bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="card-body p-6">
              <h2 className="card-title text-2xl font-semibold text-blue-600 mb-4">{blog.title}</h2>
              <p className="text-gray-600 mb-6">{blog.body.substring(0, 100)}...</p>
              <div className="card-actions justify-end">
                <Link href={`/blogs/${blog.id}`}>
                  <button className="btn btn-primary hover:bg-blue-700 transition-colors duration-300">View</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center mb-20">
        <div className="btn-group flex gap-5">
          <Link
            href={`/?page=${Math.max(1, page - 1)}`}
            className="btn btn-secondary hover:bg-gray-600 transition-colors duration-300"
          >
            Previous
          </Link>

          <span className="btn bg-blue-500 text-white font-semibold">{page} of {totalPages}</span>

          <Link
            href={`/?page=${Math.min(totalPages, page + 1)}`}
            className="btn btn-secondary hover:bg-gray-600 transition-colors duration-300"
          >
            Next
          </Link>
        </div>
      </div>
    </>
  );
}
