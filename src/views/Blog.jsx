import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const Blog = () => {
    const [mdFiles, setmdFiles] = useState([]);
    const markdownFiles = [];
    const markdownFilesGlob = import.meta.glob('/public/md/*.md');
    for (const path in markdownFilesGlob) markdownFiles.push(path);

    useEffect(() => {
        const fetchMDFiles = async () => {
            for (const path of markdownFiles) {
                try {
                    const publicPath = path.replace('/public', '');
                    let res = await fetch(publicPath);
                    res = await res.text();
                    setmdFiles([...mdFiles, res])
                } catch(err) {
                    console.log(err);
                }
            }
        }
        fetchMDFiles().finally();
    }, [])

    return (
        <article id="about-view" className="view">
            { mdFiles.map((text, i) => {
                return (
                    <ReactMarkdown key={ `path-${ i }` }>{ text }</ReactMarkdown>
                )
            }) }
        </article>
    );
};

export default Blog;