import { useEffect, useState } from 'react';

const Projects = () => {
   const [projects, setProjects] = useState(null);
   const [page, setPage] = useState(1);

   const getProjects = async () => {
      try {
         const response = await fetch('https://api.github.com/users/trshpuppy/repos?visibility=public&sort=updated&direction=desc&per_page=10');
         if (!response.ok) {
            new Error('Failed to fetch projects');
         }
         const fetchedProjects = await response.json();
         setProjects(fetchedProjects);
      } catch (error) {
         console.error('Error fetching projects:', error);
      }
   };


   const mapProjects = () => {
      if (projects !== null) {
         console.log(projects)
         return (
            <div className="projects">
               {
                  projects.map((project, i) => {
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

   useEffect(() => {
      getProjects().finally();

      return setProjects(null);
   }, []);

   return (
      <article id="projects-view" className="view">
         {mapProjects()}
      </article>
   );
};

export default Projects;