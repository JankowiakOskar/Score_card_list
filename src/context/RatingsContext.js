import React, {createContext, useReducer } from  'react'
import { ratingsReducer } from '../store/reducer/ratingsReducer';
import { initialState } from '../store/reducer/ratingsReducer';

export const RatingsContext = createContext();

const RatingsContextProvider = (props) => {
  const [ratings, dispatch] = useReducer(ratingsReducer, initialState)
  return ( 
    <RatingsContext.Provider value={{ratings, dispatch}}>
      {props.children}
    </RatingsContext.Provider>
   );
}
 
export default RatingsContextProvider;