import React, { useState } from 'react';
import env from '../env.json';

const Create = () => {
  const [url, setUrl] = useState('');
  const [lineClass, setLineClass] = useState('hide'); //скрываем
  const [formClass, setFormClass] = useState(''); //скрываем
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
        console.log(response);
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
      alert('Заметка не может быть пустой');
      return false;
    }
    sendData({ note: note });
  };

  return (
    <div>
      <form onSubmit={loadDataFromForm} className={formClass}>
        <label htmlFor=''>Введите заметку</label>
        <textarea name='note' id='note' defaultValue='test'></textarea>
        <button type='submit'>Создать</button>
      </form>
      <div className={lineClass}>
        <div>{url}</div>
        <div>
          <button
            onClick={function () {
              window.location.reload();
            }}>
            Создать новую заметку
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;
