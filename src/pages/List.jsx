import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import GlobalContext from '../context/GlobalContext'

export default function List() {
  const { posts, fetchPosts } = useContext(GlobalContext)

  useEffect(() => {
    fetchPosts()  // Recupera i post
  }, [])

  return (
    <div className='list-posts'>
      <h1>Lista dei Post</h1>
      {/* Controlla se ci sono post */}
      {posts.length > 0 ? (
        <ul className="namePost">
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Non ci sono post disponibili. <Link to="/posts/create">Crea un nuovo post</Link>.</p>
      )}

      {/* Link per creare un nuovo post */}
      <div className="create-post">
        <Link className="link-homepage" to="/posts/create">
          <button className='link-create'>Crea un nuovo post</button>
        </Link>
      </div>
    </div>
  );
}
