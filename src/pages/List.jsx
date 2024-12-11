import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URI } from "../config";
import { Link } from "react-router-dom";

export default function List() {
  const [posts, setPosts] = useState([]);


  function fetchPosts() {
    axios
      .get(`${BASE_URI}/posts`)
      .then((res) => {
        setPosts(res.data.results);
      })
      .catch((err) => {
        console.error("Errore durante il fetch dei post:", err);
      });
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
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
          <button className='link-create'> Crea un nuovo post </button>
        </Link>
      </div>
    </div>
  );
}
