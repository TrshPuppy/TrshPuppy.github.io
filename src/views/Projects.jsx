import { useEffect, useReducer } from 'react';
import reducer from '../reducer.js';
import initialState from '../initialState.js';

const Projects = () => {
   const [state, dispatch] = useReducer(reducer, initialState);

   const getProjects = async () => {
      if (!state.projects) {
         console.log('fetched');
         try {
            const response = await fetch('https://api.github.com/users/trshpuppy/repos?visibility=public&sort=updated&direction=desc');
            const fetchedProjects = await response.json();
            console.log(fetchedProjects)
            dispatch({ type: 'FETCH_PROJECTS', payload: fetchedProjects });
         } catch (error) {
            console.error('Error fetching projects:', error);
         }
      }
   };

   useEffect(() => {
      getProjects();
   }, []);

   const mapProjects = () => {
      if (state.projects !== undefined) {
         return (
            <div className="projects">
               {
                  state.projects.map((project, i) => {
                     return (
                        <div key={ `project-${ i }` }>
                           <h2>{ project.full_name }</h2>
                        </div>
                     );
                  })
               }
            </div>
         );
      }
   };

   return (
      <article id="projects-view" className="view">
         {mapProjects()}
      </article>
   );
};

export default Projects;
