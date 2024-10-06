import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import env from '../env.json';

function Note() {
  let { noteURL } = useParams();
  const [noteText, setNoteText] = useState('');
  const [showNote, setShowNote] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [showError, setShowError] = useState(false);

  console.log('Note URL:', noteURL);

  useEffect(() => {
    if (noteURL !== undefined) {
      console.log('Fetching note from:', env.urlBackend);

      fetch(env.urlBackend, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ url: noteURL }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log('Response:', response);
          if (response.result) {
            setNoteText(response.note);
            setShowNote(true); // Показываем заметку
            setShowForm(false); // Скрываем форму
            setShowError(false); // Скрываем ошибку
          } else {
            console.log('Note not found');
            setShowNote(false); // Скрываем заметку
            setShowForm(false); // Скрываем форму
            setShowError(true); // Показываем ошибку
          }
        })
        .catch((error) => {
          console.log('Error fetching note:', error);
          setShowNote(false);
          setShowForm(false);
          setShowError(true); // Показываем ошибку в случае проблемы с запросом
        });
    } else {
      console.log('Note URL is undefined');
      setShowNote(false); // Скрываем заметку
      setShowForm(true); // Показываем форму
      setShowError(false); // Скрываем ошибку
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
    <div>
      {showNote ? (
        <div>
          <h4>Note:</h4>
          <div>{noteText}</div>
          <div>
            <button onClick={searchNote}>Смотреть еще один Note</button>
          </div>
        </div>
      ) : null}

      {showError ? (
        <div>
          <p>Произошла ошибка. Такой note не найден!!!</p>
        </div>
      ) : null}

      {showForm ? (
        <div>
          <form onSubmit={getNote}>
            <label htmlFor='url'>Введите hash заметки</label>
            <input type='text' name='url' id='url' className='form-control' />
            <button type='submit' className='btn btn-primary'>
              Искать Note
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default Note;
