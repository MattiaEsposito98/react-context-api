import axios from 'axios'
import { useState } from 'react'
import { BASE_URI } from '../../config'
import { useNavigate } from 'react-router-dom'

const initialFormData = {
  title: '',
  image: '',
  content: '',
  tags: '',
  published: false,
}

export default function Create() {
  const [formData, setFormData] = useState(initialFormData)
  const navigate = useNavigate()

  function handleFormData(e) {
    const key = e.target.name
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

    setFormData({
      ...formData,
      [key]: value,
    })
  }

  // Funzione di validazione
  function validateForm() {
    const { title, image, content, tags } = formData
    if (!title) {
      alert('Il campo "Titolo" è obbligatorio.')
      return false
    }
    if (!image) {
      alert('Il campo "Immagine" è obbligatorio.')
      return false
    }
    if (!content) {
      alert('Il campo "Contenuto" è obbligatorio.')
      return false
    }
    if (!tags) {
      alert('Il campo "Tags" è obbligatorio.')
      return false
    }
    return true
  }

  function savePost(e) {
    e.preventDefault()

    // Validazione del form
    if (!validateForm()) {
      return
    }

    const body = {
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()),
    }

    console.log('Dati inviati al server:', body);

    axios.post(`${BASE_URI}/posts`, body)
      .then(res => {
        const newPost = res.data
        navigate(`/posts/${newPost.id}`)
      })
      .catch(err => console.error(err))
  }

  return (
    <main>
      <section>
        <div className="container">
          <h1 className="title">Nuovo Post</h1>
        </div>
        <div className="container">
          <form onSubmit={savePost}>
            <p className="form-group">
              <label htmlFor="title">Titolo</label>
              <input
                onChange={handleFormData}
                type="text"
                id="title"
                name="title"
                placeholder="Titolo del post"
                value={formData.title}
              />
            </p>
            <p className="form-group">
              <label htmlFor="image">Immagine</label>
              <input
                onChange={handleFormData}
                type="text"
                id="image"
                name="image"
                placeholder="URL immagine"
                value={formData.image}
              />
            </p>
            <p className="form-group">
              <label htmlFor="content">Contenuto</label>
              <textarea
                onChange={handleFormData}
                id="content"
                name="content"
                rows="5"
                cols="40"
                placeholder="Scrivi il contenuto del post"
                value={formData.content}
              />
            </p>
            <p className="form-group-checkbox">
              <input
                onChange={handleFormData}
                type="checkbox"
                id="published"
                name="published"
                checked={formData.published}
              />
              <label htmlFor="published">Pubblica</label>
            </p>
            <p className="form-group">
              <label htmlFor="tags">Tags</label>
              <input
                onChange={handleFormData}
                type="text"
                id="tags"
                name="tags"
                placeholder="Inserisci dei tag"
                value={formData.tags}
              />
              <small>Separa i tags usando la virgola (,)</small>
            </p>
            <button>Salva</button>
          </form>
        </div>
      </section>
    </main>
  )
}
