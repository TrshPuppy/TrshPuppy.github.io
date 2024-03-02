import { useState, useEffect } from 'react';
import MappedProjects from '../components/MappedProjects.jsx';

const Projects = () => {
   const [repos, setRepos] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchData = async () => {
         if (!loading) return;

         try {
            const response = await fetch('https://api.github.com/users/trshpuppy/repos?visibility=public&sort=updated&direction=desc&per_page=999');
            if (!response.ok) {
               throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setRepos(data);
         } catch (error) {
            console.error("Fetching error: ", error);
         } finally {
            setLoading(false);
         }
      };

      void fetchData();
   }, []);

   return (
      <article id="projects-view" className="projects view">
         { loading && <div>loading</div> }
         {
            !loading &&
            <MappedProjects repos={ repos } />
         }
      </article>
   );
};

export default Projects;