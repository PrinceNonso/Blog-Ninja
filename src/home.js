import { useState } from "react";

const Home = () => {
const [ blogs, setBlogs] = useState([
    {title: 'my new website', body: 'lorem ipsuim..', author: 'mario', id: 1},
    {title: 'welcome party!', body: 'lorem ipsuim..', author: 'PNI', id: 2},
    {title: 'web dev tips', body: 'lorem ipsuim..', author: 'coda', id: 3}
]);
    return (
        <div className="home">
            {blogs.map((blog) =>  (
                <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>

                </div>
            ))}
        </div>
    );
}
 
export default Home;