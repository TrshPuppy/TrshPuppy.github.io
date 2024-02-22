import React, { useState, useRef, useReducer, useEffect } from 'react';
import SiteHeader from './SiteHeader.jsx';
import reducer from '../reducer.js';
import initialState from '../initialState.js';

const Wrapper = ({ View }) => {
   const [state, dispatch] = useReducer(reducer, initialState);
   let hasRun = false;

   const getProjects = async () => {
      if (!state.projects) {
         console.log('fetched');
         try {
            const response = await fetch('https://api.github.com/users/trshpuppy/repos?visibility=public&sort=updated&direction=desc&per_page=999');
            const fetchedProjects = await response.json();
            console.log(fetchedProjects);
            dispatch({ type: 'FETCH_PROJECTS', payload: fetchedProjects });
         } catch (error) {
            console.error('Error fetching projects:', error);
         }
      }
   };

   /**
    * So here's the deal. This useEffect will run twice. Do I need to make the API call twice? No. Hence the hasRun.
    * So why does it have to run twice? I'll get back to you on that one...
    */
   useEffect(() => {
      if (hasRun) {
         getProjects().finally();
      } else {
         hasRun = true;
      }
   }, []);

   return (
      <div className="wrapper">
         <SiteHeader />
         <main>
            <View projects={state.projects}/>
         </main>
      </div>
   );
};

export default Wrapper;
