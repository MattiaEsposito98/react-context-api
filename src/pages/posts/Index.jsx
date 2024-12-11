import axios from "axios"
import { useEffect, useState } from 'react'
import { BASE_URI } from '../../config'
import { Link } from 'react-router-dom'
import Card from "../../components/Cards"

export default function Index() {
  const [posts, setPosts] = useState([])


  function fetchPosts() {
    axios.get(`${BASE_URI}/posts`)
      .then(res => {
        setPosts(res.data.results)
      })
      .catch(err => {
        console.error(err)
      })
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <main>
      <section>
        <div className='container'>
          <h1 className='title'>I Posts</h1>
          <button className='link-create'>
            <Link to="/posts/create">Nuovo post</Link>
          </button>

        </div>
        <div className="container">
          <div className="row">
            <ul className='grid grid-cols-2'>
              {posts.filter(post => post.published)
                .map(post => (
                  <li key={post.id}>
                    <Card
                      title={post.title}
                      tags={post.tag}
                      image={post.image}
                      content={post.content}
                      published={post.published}
                    />
                  </li>
                ))}
            </ul>
          </div>

        </div>
      </section>
    </main>
  )

}
