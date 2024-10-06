import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import env from '../env.json';

function Note() {
  let { noteURL } = useParams();
  const [noteText, setNoteText] = useState('');
  const [showNote, setShowNote] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (noteURL !== undefined) {
      fetch(env.urlBackend, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ url: noteURL }),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.result) {
            setNoteText(response.note);
            setShowNote(true);
            setShowForm(false);
            setShowError(false);
          } else {
            setShowNote(false);
            setShowForm(false);
            setShowError(true);
          }
        })
        .catch((error) => {
          console.error('Error fetching note:', error); // Логирование ошибки
          setShowNote(false);
          setShowForm(false);
          setShowError(true);
        });
    } else {
      setShowNote(false);
      setShowForm(true);
      setShowError(false);
    }
  }, [noteURL]);

  function getNote(event) {
    event.preventDefault();
    let url = event.target.elements.url.value;
    url = url.trim();
    if (url === '') {
      alert('Заполните поля');
      return false;
    }
    window.location.href = env.url + '/' + url;
  }

  function searchNote() {
    window.location.href = env.url;
  }

  return (
    <div className='container mt-4'>
      {showNote ? (
        <div>
          <h4>Note:</h4>
          <div>{noteText}</div>
          <div>
            <button className='btn btn-secondary mt-2' onClick={searchNote}>
              Смотреть еще один Note
            </button>
          </div>
        </div>
      ) : null}

      {showError ? (
        <div className='alert alert-danger mt-2'>Произошла ошибка. Такой note не найден!!!</div>
      ) : null}

      {showForm ? (
        <div>
          <form onSubmit={getNote}>
            <label htmlFor='url'>Введите hash заметки</label>
            <input type='text' name='url' id='url' className='form-control mt-2' />
            <button type='submit' className='btn btn-primary mt-2'>
              Искать Note
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default Note;
