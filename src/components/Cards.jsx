import style from './Card.module.css'
import ImgNotFound from '../assets/ImgNotFound.png'
import { BASE_URI } from "../config"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import Delete from '../pages/posts/Delete'

export default function Card({ className = '', id, title = '', content = '', image = '', tags = [], published, onDelete }) {
  const { fetchPosts } = useContext(GlobalContext)

  return (
    published &&
    <div className={`${style.card} ${className}`}>
      <img className={style.image} src={image.startsWith('http://') || image.startsWith('https://')
        ? image : `${BASE_URI}${image || ImgNotFound}`} />  {/* startsWith Controlla se il link inizia con la stringa passata */}

      <div className={style.card_body}>
        <h3 className={style.card_title}>{title || "Titolo"}</h3>
        <div>
          {tags.map((tag, i) => (
            <span key={i} className={`${style.span} ${style[tag]}`}>
              {tag}
            </span>
          ))}
        </div>
        <p className={style.card_description}>  {content || "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus provident fuga quas eligendi deleniti officiis sint minus sed nemo perspiciatis."}</p>
        <div className={style.buttons_cards}>
          <Link to={`/posts/${id}`}>
            <button className={style.button}> Leggi di più </button>
          </Link>
          <Delete onDelete={fetchPosts} id={id} />
        </div>



      </div>
    </div >


  )
}