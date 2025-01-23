import React from 'react';
import singleBlog from '../../../../library/singleBlog';

export default async function page({params}){
    const {id} = await params;
    // console.log(params);
    // console.log(id);

    let blog = await singleBlog(id);
    console.log(blog);

    return (
        <>
            <div>
                {blog.id}
                <br/>
                {blog.title}<br/>
                {blog.body}<br/>
                {blog.userId}<br/>
            </div>
        </>
    );
};

