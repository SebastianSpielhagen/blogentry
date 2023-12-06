import React from 'react';

interface BlogEntryProps {
    title: string;
    content: string;
}

const BlogEntry: React.FC<BlogEntryProps> = ({ title, content }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
};

export default BlogEntry;