import React, { useState } from 'react'
import { useUserContact } from './useUserContact'

const App = () => {
  const [phone, setPhone] = useState('')
  const [username, setUserName] = useState('')
  const { contacts, removeContact, addContact } = useUserContact();
  
  console.log(contacts)

  return (
    <div>
      <div>
        <h2>Список </h2>

        <input
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Добавьте имя пользователя"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Добавьте телефон номер"
        />
        <button onClick={() => {
          addContact({ username, phone })
        }}>Добавьте имя </button>

        <ul>
          {contacts.map((item) => (
            <li key={item.id}>
              {item.username}
              -
              {item.phone}
              <button onClick={() => removeContact(item.id)}>Удалить</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App