import { createContext, useState } from 'react';

 export const DataContext = createContext();

const DataProvider = ({ children }) => {  // Accept children as a prop
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  return (
    <DataContext.Provider
      value={{
        html,
        setHtml,
        css,
        setCss,
        js,
        setJs,
      }}
    >
      {children} {/* Render children inside the provider */}
    </DataContext.Provider>
  );
};

export default DataProvider;
