import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const Blog = () => {
    const markdownFilesGlob = import.meta.glob('/public/md/*.md');
    const markdownFilePaths = [];

    for (const path in markdownFilesGlob) markdownFilePaths.push(path);

    const [currentFilePath, setCurrentFilePath] = useState(markdownFilePaths[0] || '');
    const [currentText, setCurrentText] = useState('');

    const fetchCurrentFileText = async () => {
        try {
            const publicPath = formatPublicPath(currentFilePath);
            let res = await fetch(publicPath);
            console.log(res);
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
        return result;
    }

    const formatPublicPath = path => path.replace('/public', '');

    useEffect(() => {
        fetchCurrentFileText().finally();
    }, [currentFilePath]);

    useEffect(() => {
        fetchCurrentFileText().finally();
    }, []);

    return (
        <div id="about-view" className="view">
            <aside>
                <nav>
                    <ul>
                        { markdownFilePaths.map((path, i) => {
                            return (
                                <li key={ `aside-file-${ i }` }>
                                    <button onClick={() => setCurrentFilePath(path)}>{ formatPathToTitle(path) }</button>
                                </li>
                            );
                        }) }
                    </ul>
                </nav>
            </aside>
            <article>
                <ReactMarkdown>{ currentText }</ReactMarkdown>
            </article>
        </div>
    );
};

export default Blog;