import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { BASE_URI } from '../../config'
import ImgNotFound from '../../assets/ImgNotFound.png'
import Card from '../../components/Cards'
import { Link } from 'react-router-dom';

export default function Show() {
  const [post, setPosts] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    axios.get(`${BASE_URI}/posts/${id}`)
      .then(res => {
        setPosts(res.data)
      })
      .catch(err => console.error(err))
  }, [id])

  const navigate = useNavigate()

  return (
    <main>
      <div className="container">
        <button className='btn-show' onClick={() => navigate(-1)}>
          back
        </button>
      </div>

      {post ?
        <>
          <div className="container-id">
            <h1 className="title">{post.title}</h1>
            <figure className='figure-id'>
              <img
                src={post.image.startsWith('http://') || post.image.startsWith('https://')
                  ? post.image : `${BASE_URI}${post.image || ImgNotFound}`} />  {/* startsWith Controlla se il link inizia con la stringa passata */}
            </figure>
            <p>{post.content}</p>
          </div>
        </> :
        <div>
          <Link to="/" >Torna alla home</Link>
        </div>
      }
    </main>

  )

}