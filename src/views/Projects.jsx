import { useState, useEffect } from 'react';
import MappedProjects from '../components/MappedProjects.jsx';

const Projects = () => {
   const [repos, setRepos] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      if (loading) {
         fetch('https://api.github.com/users/trshpuppy/repos?visibility=public&sort=updated&direction=desc&per_page=999')
            .then(res => res.ok ? res.json() : undefined)
            .then(data => setRepos(data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
      }

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
