import React from 'react'
import {useState, useEffect}  from 'react';
import Posts from './Components/Posts';
import Pagination from './Components/Pagination';

function App() {

  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const postsPerPage = 10;

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
     .then(res => res.json())
     .then(data => {
      setPosts(data);
      setLoading(false);
     })
}, [])
  
  //current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  return (
    <div className='container mt-5'>
      <h1 className='text-primary my-3'>Posts</h1>
      <Posts posts={currentPosts} loading={loading}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  )
}

export default App
