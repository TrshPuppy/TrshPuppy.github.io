import { useState } from 'react';
import GitHub from './svg/GitHub.jsx';
import Star from "./svg/Star.jsx";

const MappedProjects = ({repos}) => {
    const [filteredRepos, setFilteredRepos] = useState(repos);
    const [repoFilter, setRepoFilter] = useState('');
    const [asideHidden, setAsideHidden] = useState(true);
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
            const {topics, language} = project;

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
            <>
                <div className="projects-container">
                    <div
                        className={`aside-mask ${asideHidden ? '' : 'show'}`}
                        onClick={() => setAsideHidden(!asideHidden)}
                        aria-hidden="true">
                    </div>
                    <aside className={asideHidden ? 'filters hidden' : 'filters'}>
                        <div aria-hidden="true" className="projects-hero">
                            <h1>Projects</h1>
                        </div>
                        <h2>Languages</h2>
                        <nav>
                            { languageSet.size > 0 &&
                                <ul className="language-list">
                                    { [...languageSet].map((topic, i) => {
                                        return (
                                            <li key={ `language-${ i }` }>
                                                <button
                                                    className={ repoFilter === topic ? `${ topic } active` : `${ topic }` }
                                                    onClick={ () => handleFilterOnClick(topic) }>{ topic }</button>
                                            </li>
                                        );
                                    }) }
                                </ul>
                            }
                            <h2>Topics</h2>
                            { topicSet.size > 0 &&
                                <ul className="topic-list">
                                    { [...topicSet].map((topic, i) => {
                                        return (
                                            <li key={ `topic-${ i }` }>
                                                <button
                                                    className={ repoFilter === topic ? `${ topic } active` : `${ topic }` }
                                                    onClick={ () => handleFilterOnClick(topic) }>{ topic }</button>
                                            </li>
                                        );
                                    }) }
                                </ul>
                            }
                        </nav>
                        <button className="aside-expand" onClick={() => setAsideHidden(!asideHidden)}>Filters</button>
                    </aside>

                    <div className="projects-list">
                        {
                            filteredRepos.map((project, i) => {
                                const {
                                    name,
                                    topics,
                                    updated_at,
                                    watchers_count,
                                    language,
                                    description,
                                    open_issues,
                                    html_url,
                                } = project;

                                return (
                                    <div className={ `project ${ language }` } key={ `project-${ i }` }>
                                        <div className="title">
                                            <h2>
                                                <span>{ name }</span>
                                            </h2>
                                            <div className="language">{ language }</div>
                                        </div>
                                        <div className="project-meta">
                                            <div className="last-updated">
                                                <span>Last updated on: </span>{ formatUpdatedLastDate(updated_at) }
                                            </div>
                                            <div className="watchers-count">
                                                <span><Star/></span>
                                                <span>Stars: </span>
                                                <span>{ watchers_count }</span>
                                            </div>
                                            <div className="open-issues"
                                                 aria-label={ `View the issues on github` }>Issues: { open_issues }</div>
                                        </div>
                                        <a href={ html_url } className="repo-link"><GitHub/> View on GitHub</a>
                                        <p className="description">{ description || <i>(no description)</i> }</p>
                                        <div className="footer">
                                            { topics.length > 0 &&
                                                <ul className="topics">
                                                    { topics.map((topic, i) => <li
                                                        key={ `topic-${ i }` }>{ topic }</li>) }
                                                </ul>
                                            }
                                        </div>
                                    </div>

                                );
                            })
                        }
                    </div>
                </div>
            </>
        );
    }
};

export default MappedProjects;