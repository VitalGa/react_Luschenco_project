// http://localhost:3000/note/vh1r7doxe1t4glu5rcbdptvi
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import env from '../env.json';

const Note = () => {
  let { noteURL } = useParams();
  const [noteState, setNoteState] = useState('');
  const [lineClass, setLineClass] = useState('hide');
  const [formClass, setFormClass] = useState('hide');
  const [errorClass, setErrorClass] = useState('hide');

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
          console.log(response);
          if (response.result) {
            setNoteState(response.note);
            setLineClass('');
            setFormClass('hide');
            setErrorClass('hide');
          } else {
            setLineClass('hide');
            setFormClass('');
            setErrorClass('');
          }
        });
    } else {
      setLineClass('hide');
      setFormClass('');
      setErrorClass('');
    }
  }, []);

  function getNote(event) {
    event.preventDefault();
    let url = event.target.elements.url.value;
    url = url.trim();
    if (url === '') {
      alert('Заполните поля');
      return false;
    }
    noteURL = url;
    window.location.href = env.url + '/' + url;
  }

  return (
    <div>
      <div className={lineClass}>
        <h4>Note:</h4>
        <div>{noteState}</div>
      </div>
      <div className={errorClass}></div>
      <div className={formClass}>
        <form action='' onSubmit={getNote}>
          <input type='text' name='url' className='form-control' />
          <button type='submit' className='btn btn-primary'>
            Искать Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default Note;
