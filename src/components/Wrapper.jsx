import { useReducer, useEffect, useState } from 'react';
import SiteHeader from './SiteHeader.jsx';
import reducer from '../reducer.js';
import initialState from '../initialState.js';

const Wrapper = ({ View }) => {
   return (
      <div className="wrapper">
         <SiteHeader />
         <main>
            <View />
         </main>
      </div>
   );
};

export default Wrapper;
