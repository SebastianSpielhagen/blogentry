import React from 'react';
import BlogEntry from './BlogEntry';
import Profile from './Profile';

const App: React.FC = () => {
    return (
        <div>
            <Profile />
            <BlogEntry title="Erster Blogbeitrag" content="Dies ist mein erster Blogbeitrag." />
            <BlogEntry title="Zweiter Blogbeitrag" content="Dies ist mein zweiter Blogbeitrag." />
        </div>
    );
};

export default App;