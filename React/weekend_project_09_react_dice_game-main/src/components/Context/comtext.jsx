import { createContext, useState, useContext } from 'react';

function ContextProvider({ children }) {
  const [name, setName] = useState('Bob');
  const [last, setLast] = useState('');
  const [age, setAge] = useState(15);

  return (
    <myContext.Provider value={{ name, setName, last, setLast, age, setAge }}>
      {children}
    </myContext.Provider>
  );
}

export default ContextProvider;
