import React, { useState } from 'react';
import env from '../env.json';

function Create() {
  const [url, setUrl] = useState('');
  const [lineClass, setLineClass] = useState('hide');
  const [formClass, setFormClass] = useState('');

  let sendData = (obj) => {
    setFormClass('hide');
    setLineClass('');
    fetch(env.urlBackend, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.result) {
          setUrl(env.url + '/' + response.url);
        }
      });
  };

  let loadDataFromForm = (event) => {
    event.preventDefault();
    let note = event.target.elements.note.value;
    note = note.trim();
    if (note === '') {
      alert('Заполните поля');
      return false;
    }
    sendData({ note: note });
  };

  return (
    <div className='container mt-4'>
      <form onSubmit={loadDataFromForm} className={formClass}>
        <label htmlFor=''>Введите заметку</label>
        <textarea
          name='note'
          id='note'
          defaultValue='Test'
          className='form-control mt-2'></textarea>
        <button type='submit' className='btn btn-success mt-2'>
          Создать
        </button>
      </form>
      <div className={lineClass}>
        <div>{url}</div>
        <div>
          <button className='btn btn-secondary mt-2' onClick={() => window.location.reload()}>
            Создать новую заметку
          </button>
        </div>
      </div>
    </div>
  );
}

export default Create;
