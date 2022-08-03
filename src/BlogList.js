const BlogList = ({blogs,title, handleDelete}) => {
    // const blogs = props.blogs;
    // console.log(props, blogs)
    return (
        <div className="blog-list">
            <p>All Blogs</p>
            {blogs.map((blog) =>  (
                <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>
                <button onClick={() => handleDelete(blog.id)}>Delete</button>
                </div>))}
        </div>
     );
}
 
export default BlogList;