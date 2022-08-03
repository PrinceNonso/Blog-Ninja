import { useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {
const [ blogs, setBlogs] = useState([
    {title: 'my new website', body: 'lorem ipsuim..', author: 'mario', id: 1},
    {title: 'welcome party!', body: 'lorem ipsuim..', author: 'PNI', id: 2},
    {title: 'web dev tips', body: 'lorem ipsuim..', author: 'coda', id: 3}
]);

const [name, setName] = useState ('mario');

const handleDelete = (id) => {
const newBlogs = blogs.filter ( blog => blog.id !==id);
setBlogs(newBlogs);
}
useEffect(()=> {
console.log ( 'use effect ran' );
console.log (blogs);
}, [name]);
    return (
        <div className="home">
            <BlogList blogs = {blogs} title= { "All Blogs"} handleDelete= {handleDelete} />
             <button onClick={ () => setName ('PNI') }>change name</button>
             <p>{ name }</p>
        </div>
    );
}
 
export default Home;