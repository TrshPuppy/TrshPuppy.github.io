import { useState, useEffect } from 'react';

const Projects = ({ projects }) => {
   const [filteredProjects, setFilteredProjects] = useState(projects);
   const [projectFilter, setProjectFilter] = useState('');

   let topicSet = new Set();
   let languageSet = new Set();

   const handleFilterOnClick = topic => {
      if (projectFilter === topic) {
         setFilteredProjects(projects);
         setProjectFilter('');
         return;
      }
      setProjectFilter(topic);

      const newFilteredProjects = projects.filter(project => project.topics.includes(topic) || project.language === topic);
      setFilteredProjects(newFilteredProjects);
   }

   if (projects) {
      let allTopics = [];
      let allLanguages = [];

      projects.forEach(project => {
         const { topics, language } = project;

         if (language) allLanguages.push(language);

         if (topics.length > 0) {
            topics.forEach(topic => {
               allTopics.push(topic);
            });
         }
      });

      topicSet = new Set(allTopics);
      languageSet = new Set(allLanguages);
   }

   const mapProjects = () => {
      if (filteredProjects !== undefined) {
         return (
            <div className="projects-container">
               <aside className="filters">
                  <nav>
                     { languageSet.size > 0 &&
                        <ul className="language-list">
                           {[...languageSet].map((topic, i) => {
                              return (
                                 <button key={`topic-${i}`} onClick={() => handleFilterOnClick(topic)}>{topic}</button>
                              )
                           })}
                        </ul>
                     }
                     { topicSet.size > 0 &&
                        <ul className="language-list">
                           {[...topicSet].map((topic, i) => {
                              return (
                                 <button key={`topic-${i}`} onClick={() => handleFilterOnClick(topic)}>{topic}</button>
                              )
                           })}
                        </ul>
                     }
                  </nav>
               </aside>

               <div className="projects">
                  {
                     filteredProjects.map((project, i) => {
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
                           watchers,
                        } = project;
                        return (
                           <div key={ `project-${ i }` }>
                              <h2>{ name }</h2>
                              <div className="project-meta">
                                 <div className="last-updated"><span>Last updated on: </span>{ updated_at }</div>
                                 <div className="watchers-count"><span>Watchers count: </span>{ watchers_count }</div>
                                 <div className="language"><span>Language: </span>{ language }</div>
                                 <a className="archive-url" aria-label={ `View the ${ name } project on github` }>View
                                    it on GitHub</a>
                                 <a className="open-issues"
                                    aria-label={ `View the issues on github` }>{ open_issues } open issues</a>
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
      <article id="projects-view" className="projects view">
         { mapProjects() }
      </article>
   );
};

export default Projects;
