import { useState, useEffect } from 'react';
import MappedProjects from '../components/MappedProjects.jsx';
import Loader from "../components/Loader.jsx";

const Projects = () => {
   const [repos, setRepos] = useState([]);
   const [loading, setLoading] = useState(true);
   const [responseOK, setResponseOK] = useState(false);

   useEffect(() => {
      const fetchData = async () => {
         if (!loading) return;

         try {
            const response = await fetch('https://api.github.com/users/trshpuppy/repos?visibility=public&sort=updated&direction=desc&per_page=999');
            if (response.ok) {
               setResponseOK(true);
            }
            const data = await response.json();
            console.log('fetched');
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
         { loading && <Loader/> }
         {
            !loading && responseOK &&
            <MappedProjects repos={ repos } />
         }
         {
            !responseOK && !loading &&
             <div>Something went wrong</div>
         }
      </article>
   );
};

export default Projects;