import axios from "axios"
import { BASE_URI } from "../../config"

export default function Delete({ onDelete = () => { }, id }) {

  function deletePost() {
    if (confirm("Vuoi davvero elimare il post")) {
      axios.delete(`${BASE_URI}/posts/${id}`)
        .then(() => {
          onDelete()
        })
        .catch(err => {
          alert("Non è stato possibile elimare il post")
          console.error(err)
        })
    }
  }

  return <button className="btn-delete" onClick={deletePost}>Elimina</button>
}

// Eliminazione: Il post viene eliminato facendo una richiesta al server.