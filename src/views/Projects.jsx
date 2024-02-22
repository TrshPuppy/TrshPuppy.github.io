const Projects = ({ projects }) => {

   const mapProjects = () => {
      if (projects !== undefined) {
         return (
            <div className="projects-container">
               <aside>
                  <nav></nav>
               </aside>

               <div className="projects">
                  {
                     projects.map((project, i) => {
                           const {
                              name,
                              topics,
                              updated_at,
                              watchers_count,
                              language,
                              archive_url,
                              clone_url,
                              description,
                              open_issues,
                              watchers
                           } = project;
                        return (
                           <div key={ `project-${ i }` }>
                              <h2>{ name }</h2>
                              <div className="project-meta">
                                 <div className="last-updated"><span>Last updated on: </span>{ updated_at }</div>
                                 <div className="watchers-count"><span>Watchers count: </span>{ watchers_count }</div>
                                 <div className="language"><span>Language: </span>{ language }</div>
                                 <a className="archive-url" aria-label={`View the ${name} project on github`}>View it on GitHub</a>
                                 <a className="open-issues" aria-label={`View the issues on github`}>{open_issues} open issues</a>
                              </div>
                              <p className="description">{ description }</p>
                              <ul className="topics">
                                 { topics.map((topic, i) => <li key={ `topic-${ i }` }>{ topic }</li>) }
                              </ul>
                           </div>
                        );
                     })
                  }
               </div>
            </div>
         );
      }
   };

   return (
      <article id="projects-view" className="view">
         { mapProjects() }
      </article>
   );
};

export default Projects;
