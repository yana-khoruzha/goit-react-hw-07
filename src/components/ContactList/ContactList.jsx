import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import style from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name.toLowerCase());

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul className={style.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={style.contactItem}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
}
