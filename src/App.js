import React from 'react';
import RatingsContextProvider from './context/RatingsContext';
import RatingList from './components/RatingList/RatingList';



const App = () => {
  return ( 
    <RatingsContextProvider>
      <RatingList/>
    </RatingsContextProvider>
   );
}
 
export default App;