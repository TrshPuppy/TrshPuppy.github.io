import { useState, useEffect, useLayoutEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import PageTitle from '../components/PageTitle.jsx';
import ReloadOnNavigation from '../components/ReloadOnNavigation.jsx';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
import ArthTribute from '../components/ArthTribute.jsx';

const Blog = () => {
   const markdownFilesGlob = import.meta.glob('/public/md/*.md');
   const markdownFilePaths = Object.keys(markdownFilesGlob);
   const location = useLocation();
   const params = new URLSearchParams(location.search);
   const fileParam = params.get('file');
   const [currentFilePath, setCurrentFilePath] = useState(markdownFilePaths[0] || '');
   const [currentFile, setCurrentFile] = useState('');
   const [expanded, setExpanded] = useState(false);
   const [reHighlight, setReHighlight] = useState(false);

   const handleMDLinkClick = (path) => {
      window.scrollTo({
         top: 0,
      });

      setExpanded(false);
      setCurrentFilePath(path);
   };

   const fetchCurrentFileText = async () => {
      try {
         const publicPath = formatPublicPath(currentFilePath);
         let res = await fetch(publicPath);
         res = await res.text();
         setCurrentFile(res);
      } catch (err) {
         console.log(err);
      }
   };

   const formatPathToTitle = (path) => {
      let result = path;
      result = result.replace('/public/md', '');
      result = result.replace('.md', '');
      result = result.replace(/[^\w\s]/gi, ' ');
      result = result.replace(/\b\w/g, (match) => match.toUpperCase());
      result = result.replace(/_/g, ' ');
      return result.trim();
   };

   const formatTitleToSlug = (title) => {
      return title
         .toLowerCase()
         .replace(/[^a-z0-9\s-]/g, '')
         .replace(/\s+/g, '-')
         .replace(/-+/g, '-')
         .trim();
   };

   const formatPublicPath = (path) => path.replace('/public', '');

   function resetHLJS() {
      const $codes = document.querySelectorAll('code');

      /**
       * We need to "reset" HLJS for re-renders
       * The outerHTML => innerHTML unwraps the html from the text
       * I.E. <span>hi</span> => hi (unwrapped!)
       *
       * If we don't do this then HLJS will spam the console with warnings.
       */
      for (let i = 0; i < $codes.length; i++) {
         if ($codes[i].getAttribute('data-highlighted')) {
            $codes[i].removeAttribute('data-highlighted');
            $codes[i].classList.remove('hljs');

            const $spans = $codes[i].querySelectorAll('*');

            for (let j = 0; j < $spans.length; j++) {
               $spans[j].outerHTML = $spans[j].innerHTML;
               $spans[j].remove();
            }
         }
      }
   }

   useEffect(() => {
      void fetchCurrentFileText();
      resetHLJS();
   }, [currentFilePath]);

   useEffect(() => {
      if (fileParam) {
         for (const path of markdownFilePaths) {
            if (formatTitleToSlug(formatPathToTitle(path)) === fileParam) {
               setCurrentFilePath(path);
            }
         }
      } else {
         void fetchCurrentFileText();
      }
   }, []);

   useLayoutEffect(() => {
      /**
       * HLJS Please kindly STFU
       */
      const storeLogger = console.log;
      const storeWarn = console.warn;
      console.log = () => {};
      console.warn = () => {};

      hljs.highlightAll();

      /**
       * Restore the loggers
       */
      console.log = storeLogger;
      console.warn = storeWarn;
   });

   return (
      <>
         <ReloadOnNavigation />
         <PageTitle title="Blog" color="#ffffff" />
         <div id="blog-view" className="view">
            <aside className={expanded ? 'expanded' : ''}>
               <div className="blog-hero">
                  <h1>Blog</h1>
                  <button className="aside-expand" onClick={() => setExpanded(!expanded)}>
                     <div>Articles</div>
                  </button>
               </div>
               <nav>
                  <ul>
                     {markdownFilePaths.map((path, i) => {
                        const title = formatPathToTitle(path);
                        const slug = formatTitleToSlug(title);

                        return (
                           <li key={`aside-file-${i}`}>
                              <Link
                                 className={currentFilePath === path ? 'active' : ''}
                                 to={`?file=${slug}`}
                                 onClick={() => handleMDLinkClick(path)}
                              >
                                 {title}
                              </Link>
                           </li>
                        );
                     })}
                  </ul>
               </nav>
            </aside>
            <article>
               <div
                  className={`aside-mask ${expanded ? 'show' : ''}`}
                  onClick={() => setExpanded(!expanded)}
                  aria-hidden="true"
               ></div>
               <ReactMarkdown>{currentFile}</ReactMarkdown>
            </article>
         </div>
         <ArthTribute />
      </>
   );
};

export default Blog;
