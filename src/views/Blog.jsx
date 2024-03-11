import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link, useLocation } from 'react-router-dom';

const Blog = () => {
    const markdownFilesGlob = import.meta.glob('/public/md/*.md');
    const markdownFilePaths = [];

    for (const path in markdownFilesGlob) markdownFilePaths.push(path);

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const filePath = params.get('filePath');

    const [currentFilePath, _] = useState(filePath || markdownFilePaths[0] || '');
    const [currentText, setCurrentText] = useState('');

    const fetchCurrentFileText = async () => {
        try {
            const publicPath = formatPublicPath(currentFilePath);
            let res = await fetch(publicPath);
            res = await res.text();
            setCurrentText(res);
        } catch (err) {
            console.log(err);
        }
    }

    const formatPathToTitle = path => {
        let result = path;
        result = result.replace('/public/md', '');
        result = result.replace('.md', '');
        result = result.replace(/[^\w\s]/gi, ' ');
        result = result.replace(/\b\w/g, match => match.toUpperCase());
        return result.trim();
    }

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
        void fetchCurrentFileText();
    }, []);

    return (
       <div id="about-view" className="view">
           <aside>
               <nav>
                   <ul>
                       {markdownFilePaths.map((path, i) => {
                           const title = formatPathToTitle(path);
                           const slug = formatTitleToSlug(title);

                           return (
                              <li key={`aside-file-${i}`}>
                                  <Link to={`?file=${slug}`}>{title}</Link>
                              </li>
                           );
                       })}
                   </ul>
               </nav>
           </aside>
           <article>
               <ReactMarkdown>{currentText}</ReactMarkdown>
           </article>
       </div>
    );
};

export default Blog;
