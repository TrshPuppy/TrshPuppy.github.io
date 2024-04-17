import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link, useLocation } from 'react-router-dom';
import PageTitle from '../components/PageTitle.jsx';
import ReloadOnNavigation from '../components/ReloadOnNavigation.jsx';

const Blog = () => {
   const markdownFilesGlob = import.meta.glob('/public/md/*.md');
   const markdownFilePaths = Object.keys(markdownFilesGlob);
   const location = useLocation();
   const params = new URLSearchParams(location.search);
   const fileParam = params.get('file');
   const [asideHidden, setAsideHidden] = useState(false);
   const [currentFilePath, setCurrentFilePath] = useState(markdownFilePaths[0] || '');
   const [currentFile, setCurrentFile] = useState('');
   const [expanded, setExpanded] = useState(false);

   const handleMDLinkClick = path => {
      window.scrollTo({
         top: 0
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

   const formatPathToTitle = path => {
      let result = path;
      result = result.replace('/public/md', '');
      result = result.replace('.md', '');
      result = result.replace(/[^\w\s]/gi, ' ');
      result = result.replace(/\b\w/g, match => match.toUpperCase());
      result = result.replace(/_/g, ' ');
      return result.trim();
   };

   const formatTitleToSlug = title => {
      return title
         .toLowerCase()
         .replace(/[^a-z0-9\s-]/g, '')
         .replace(/\s+/g, '-')
         .replace(/-+/g, '-')
         .trim();
   };


   const formatPublicPath = path => path.replace('/public', '');

   useEffect(() => {
      void fetchCurrentFileText();
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

   return (
      <>
         <ReloadOnNavigation />
         <PageTitle title="Blog" color="#ffffff" />
         <div id="blog-view" className="view">
            <aside className={expanded ? "expanded" : ""}>
               <div className="blog-hero">
                  <h1>Blog</h1>
                  <button className="aside-expand" onClick={ () => setExpanded(!expanded) }>
                     <div>Articles</div>
                  </button>
               </div>
               <nav>
                  <ul>
                     { markdownFilePaths.map((path, i) => {
                        const title = formatPathToTitle(path);
                        const slug = formatTitleToSlug(title);

                        return (
                           <li key={ `aside-file-${ i }` }>
                              <Link className={ currentFilePath === path ? 'active' : '' } to={ `?file=${ slug }` }
                                    onClick={ () => handleMDLinkClick(path) }>{ title }</Link>
                           </li>
                        );
                     }) }
                  </ul>
               </nav>
            </aside>
            <article>
               <ReactMarkdown>{ currentFile }</ReactMarkdown>
            </article>
         </div>
      </>
   );
};

export default Blog;
