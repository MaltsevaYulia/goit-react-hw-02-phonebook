import { ContactItem } from '../ContactItem/ContactItem';
 
export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id}>
                <ContactItem name={name} number={number} id={id} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};
