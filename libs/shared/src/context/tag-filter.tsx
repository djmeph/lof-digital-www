import { createContext, useContext } from 'react';

const TagFilterContext = createContext(undefined);

export function TagFilterProvider({ children }) {
  const [state, setState] = useState();
  return (
    <TagFilterContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </TagFilterContext.Provider>
  );
}

export function useTagFilter() {
  const context = useContext(TagFilterContext);

  if (!context) {
    throw Error('useTagFilter must be used inside a `TagFilterProvider`');
  }
  return context;
}
