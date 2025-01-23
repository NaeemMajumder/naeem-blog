import React from 'react';
import singleBlog from '../../../../library/singleBlog';

export default async function page({params}) {
    const { id } = await params;

    let blog = await singleBlog(id);
    console.log(blog);

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-10">
            {/* Blog Container */}
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-8 space-y-6">
                {/* Blog Title */}
                <h1 className="text-3xl sm:text-4xl font-semibold text-indigo-800">
                    {blog.title}
                </h1>

                {/* Blog Content */}
                <div className="text-gray-700 space-y-4">
                    <p className="text-lg leading-relaxed">{blog.body}</p>
                </div>

                {/* Blog Metadata */}
                <div className="flex items-center space-x-4 text-gray-600">
                    <span className="text-sm">Written by User ID: {blog.userId}</span>
                    <span className="text-sm">Blog ID: {blog.id}</span>
                </div>
            </div>
        </div>
    );
}
