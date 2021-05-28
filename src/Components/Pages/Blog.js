import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';

function Blog() {
//   const [blog, setBlog] = useState({});
  const {blogId} = useParams();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    fetch(`http://localhost:3000/blogs/`)
      .then((response) => response.json())
      .then((blogs) => console.log(blogs))
  };

  return (
      <div>
          <p>poop{blogId}</p>
      </div>
  )
}

export default Blog;
