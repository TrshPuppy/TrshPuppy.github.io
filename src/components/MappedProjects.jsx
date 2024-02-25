import { useState } from 'react';

const MappedProjects = ({ repos }) => {
   const [filteredRepos, setFilteredRepos] = useState(repos);
   const [repoFilter, setRepoFilter] = useState('');
   let languageSet = new Set([]);
   let topicSet = new Set([]);

   /**
    * Pull the topics and language from projects for the filter and aside buttons
    *
    * @type {Set<any>}
    */

   if (repos) {
      const allTopics = [];
      const allLanguages = [];

      repos.forEach(project => {
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

   /**
    * Handles filtering the projects
    *
    * @param topic
    */
   const handleFilterOnClick = topic => {
      if (repoFilter === topic) {
         setFilteredRepos(repos);
         setRepoFilter('');
         return;
      }

      setRepoFilter(topic);

      const newFilteredRepos = repos.filter(repo => repo.topics.includes(topic) || repo.language === topic);
      setFilteredRepos(newFilteredRepos);
   };

   /**
    * The "updated-last" gives us a weird format (<year>-<month>-<day>T<hour24>:<minute>:<second>Z)
    * let's clean it up.
    *
    * @param dateTime
    * @returns {string}
    */
   const formatUpdatedLastDate = dateTime => {
      const date = new Date(dateTime);

      return new Intl.DateTimeFormat('en-US', {
         year: 'numeric',
         month: '2-digit',
         day: '2-digit',
         hour: '2-digit',
         minute: '2-digit',
         second: '2-digit',
         hour12: false,
         timeZone: 'UTC',
      }).format(date);
   };

   if (filteredRepos.length > 0) {
      return (
         <div className="projects-container">
            <aside className="filters">
               <nav>
                  { languageSet.size > 0 &&
                     <ul className="language-list">
                        { [...languageSet].map((topic, i) => {
                           return (
                              <button key={ `topic-${ i }` }
                                      onClick={ () => handleFilterOnClick(topic) }>{ topic }</button>
                           );
                        }) }
                     </ul>
                  }
                  { topicSet.size > 0 &&
                     <ul className="language-list">
                        { [...topicSet].map((topic, i) => {
                           return (
                              <button key={ `topic-${ i }` }
                                      onClick={ () => handleFilterOnClick(topic) }>{ topic }</button>
                           );
                        }) }
                     </ul>
                  }
               </nav>
            </aside>

            <div className="projects">
               {
                  filteredRepos.map((project, i) => {
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
                              <div className="last-updated">
                                 <span>Last updated on: </span>{ formatUpdatedLastDate(updated_at) }</div>
                              <div className="watchers-count"><span>Watchers count: </span>{ watchers_count }</div>
                              <div className="language"><span>Language: </span>{ language }</div>
                              <a href={ archive_url } className="archive-url"
                                 aria-label={ `View the ${ name } project on github` }>View
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

export default MappedProjects;