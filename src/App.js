import React, { useState } from 'react';
import { useUserContact } from './useUserContact';
import './App.css';

const App = () => {
  const { contacts, addContact, removeContact } = useUserContact();
  const [form, setForm] = useState({ username: '', phone: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="app-container">
      <div className="contacts-card">
        <h2>Список контактов</h2>

        <div className="inputs">
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Введите имя пользователя"
          />
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Введите номер телефона"
          />
          <button
            className="add-btn"
            onClick={() => {
              if (!form.username.trim() || !form.phone.trim()) return;
              addContact(form);
              setForm({ username: '', phone: '' });
            }}
          >
            Добавить контакт
          </button>
        </div>

        <ul>
          {contacts.map(({ id, username, phone }) => (
            <li key={id}>
              <span>
                <strong>{username}</strong> — {phone}
              </span>
              <button
                className="delete-btn"
                onClick={() => removeContact(id)}
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
