// import React, { useState, useEffect } from 'react';

// const Articles = () => {
//     const [articles, setArticles] = useState([]);
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         // Load the JSON data
//         fetch('/src/assets/cyware_news.json')
//             .then(response => response.json())
//             .then(data => setArticles(data))
//             .catch(error => console.error('Error loading JSON:', error));
//     }, []);

//     const handlePrevious = () => {
//         setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : articles.length - 1));
//     };

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex < articles.length - 1 ? prevIndex + 1 : 0));
//     };

//     const currentArticle = articles[currentIndex];

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-800 text-white flex flex-col items-center justify-center py-10 px-4">
//             <h1 className="text-5xl font-extrabold tracking-tight mb-10 text-white drop-shadow-lg animate-pulse">News Explorer</h1>
//             {currentArticle ? (
//                 <div className="max-w-3xl w-full bg-white rounded-lg shadow-2xl p-8 text-gray-900 transition-transform duration-500 ease-in-out transform hover:scale-105">
//                     <h1 className="text-3xl font-bold mb-4 text-indigo-700">{currentArticle.title}</h1>
//                     <p className="text-lg text-gray-600 mb-6">{currentArticle.summary}</p>
//                     <a
//                         href={currentArticle.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-xl font-semibold text-indigo-600 hover:text-purple-600 transition-colors duration-300"
//                     >
//                         Read more
//                     </a>
//                     <p className="text-gray-500 mt-4 italic">{currentArticle.date}</p>

//                     <div className="flex justify-between items-center mt-8">
//                         <button
//                             onClick={handlePrevious}
//                             // disabled={currentIndex === 0}
//                             className={`px-5 py-2 rounded-full text-white font-semibold shadow-md ${
//                                 currentIndex === 0
//                                     ? 'bg-gray-400 cursor-not-allowed'
//                                     : 'bg-indigo-600 hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-300 transition-all duration-300'
//                             }`}
//                         >
//                             Previous
//                         </button>
//                         <button
//                             onClick={handleNext}
//                             //disabled={currentIndex === articles.length - 1}
//                             className={`px-5 py-2 rounded-full text-white font-semibold shadow-md ${
//                                 currentIndex === articles.length - 1
//                                     ? 'bg-gray-400 cursor-not-allowed'
//                                     : 'bg-purple-600 hover:bg-purple-500 focus:ring-4 focus:ring-purple-300 transition-all duration-300'
//                             }`}
//                         >
//                             Next
//                         </button>
//                     </div>
//                 </div>
//             ) : (
//                 <p className="text-xl text-white animate-bounce">Loading articles...</p>
//             )}
//         </div>
//     );
// };

// export default Articles;


// import React, { useState, useEffect } from 'react';

// const Articles = () => {
//     const [articles, setArticles] = useState([]);
//     const [visibleCount, setVisibleCount] = useState(5); // Number of articles to show
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         // Load the JSON data
//         fetch('/src/assets/cyware_news.json')
//             .then(response => response.json())
//             .then(data => {
//                 setArticles(data);
//                 setIsLoading(false);
//             })
//             .catch(error => {
//                 console.error('Error loading JSON:', error);
//                 setIsLoading(false);
//             });
//     }, []);

//     const handleLoadMore = () => {
//         setVisibleCount(prevCount => prevCount + 5); // Increase count by 5
//     };

//     const displayedArticles = articles.slice(0, visibleCount);

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-800 text-white flex flex-col items-center justify-center py-10 px-4">
//             <h1 className="text-5xl font-extrabold tracking-tight mb-10 text-white drop-shadow-lg animate-pulse">News Explorer</h1>
//             {isLoading ? (
//                 <p className="text-xl text-white animate-bounce">Loading articles...</p>
//             ) : (
//                 <>
//                     <div className="flex flex-col items-center w-full">
//                         {displayedArticles.length > 0 ? (
//                             displayedArticles.map((article, index) => (
//                                 <div key={index} className="max-w-3xl w-full bg-white rounded-lg shadow-2xl p-8 text-gray-900 mb-8 transition-transform duration-500 ease-in-out transform hover:scale-105">
//                                     <h1 className="text-3xl font-bold mb-4 text-indigo-700">{article.title}</h1>
//                                     <p className="text-lg text-gray-600 mb-6">{article.summary}</p>
//                                     <a
//                                         href={article.link}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="text-xl font-semibold text-indigo-600 hover:text-purple-600 transition-colors duration-300"
//                                     >
//                                         Read more
//                                     </a>
//                                     <p className="text-gray-500 mt-4 italic">{article.date}</p>
//                                 </div>
//                             ))
//                         ) : (
//                             <p className="text-xl text-white">No articles available.</p>
//                         )}
//                     </div>
//                     {visibleCount < articles.length && (
//                         <button
//                             onClick={handleLoadMore}
//                             className="px-5 py-2 rounded-full text-white font-semibold shadow-md bg-purple-600 hover:bg-purple-500 focus:ring-4 focus:ring-purple-300 transition-all duration-300"
//                         >
//                             Load More
//                         </button>
//                     )}
//                 </>
//             )}
//         </div>
//     );
// };

// export default Articles;

// import React, { useState, useEffect } from 'react';
// import './Article.css'; // Make sure to include your CSS file

// const Articles = () => {
//     const [articles, setArticles] = useState([]);
//     const [visibleCount, setVisibleCount] = useState(5); // Number of articles to show
//     const [fullscreenArticle, setFullscreenArticle] = useState(null);

//     useEffect(() => {
//         // Load the JSON data
//         fetch('/src/assets/cyware_news.json')
//             .then(response => response.json())
//             .then(data => setArticles(data))
//             .catch(error => console.error('Error loading JSON:', error));
//     }, []);

//     const handleLoadMore = () => {
//         setVisibleCount(prevCount => prevCount + 5); // Increase count by 5
//     };

//     const handleArticleClick = (index) => {
//         setFullscreenArticle(index);
//     };

//     const handleArticleDoubleClick = () => {
//         setFullscreenArticle(null);
//     };

//     const displayedArticles = articles.slice(0, visibleCount);

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-800 text-white flex flex-col items-center justify-center py-10 px-4">
//             <h1 className="text-5xl font-extrabold tracking-tight mb-10 text-white drop-shadow-lg animate-pulse">News Explorer</h1>
//             <div className="flex flex-col items-center w-full">
//                 {displayedArticles.length > 0 ? (
//                     displayedArticles.map((article, index) => (
//                         <div
//                             key={index}
//                             className={`article-container ${fullscreenArticle === index ? 'fullscreen' : ''}`}
//                             onClick={() => handleArticleClick(index)}
//                             onDoubleClick={handleArticleDoubleClick}
//                         >
//                             <h1 className="text-3xl font-bold mb-4 text-indigo-700 article-title">{article.title}</h1>
//                             <div className={`article-content ${fullscreenArticle === index ? 'show' : 'hide'}`}>
//                                 <p className="text-lg text-gray-600 mb-6">{article.summary}</p>
//                                 <a
//                                     href={article.link}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="text-xl font-semibold text-indigo-600 hover:text-purple-600 transition-colors duration-300"
//                                 >
//                                     Read more
//                                 </a>
//                                 <p className="text-gray-500 mt-4 italic">{article.date}</p>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <p className="text-xl text-white">No articles available.</p>
//                 )}
//             </div>
//             {visibleCount < articles.length && (
//                 <button
//                     onClick={handleLoadMore}
//                     className="px-5 py-2 rounded-full text-white font-semibold shadow-md bg-purple-600 hover:bg-purple-500 focus:ring-4 focus:ring-purple-300 transition-all duration-300 mt-6"
//                 >
//                     Load More
//                 </button>
//             )}
//         </div>
//     );
// };

// export default Articles;



// import React, { useState, useEffect } from 'react';
// import './Article.css'; // Make sure to include your CSS file

// const Articles = () => {
//     const [articles, setArticles] = useState([]);
//     const [visibleCount, setVisibleCount] = useState(5); // Number of articles to show
//     const [fullscreenArticle, setFullscreenArticle] = useState(null);
//     const [hoveredArticle, setHoveredArticle] = useState(null);

//     useEffect(() => {
//         // Load the JSON data
//         fetch('/src/assets/cyware_news.json')
//             .then(response => response.json())
//             .then(data => setArticles(data))
//             .catch(error => console.error('Error loading JSON:', error));
//     }, []);

//     const handleLoadMore = () => {
//         setVisibleCount(prevCount => prevCount + 5); // Increase count by 5
//     };

//     const handleArticleClick = (index) => {
//         if (fullscreenArticle === index) {
//             setFullscreenArticle(null); // Toggle off fullscreen if already in fullscreen
//         } else {
//             setFullscreenArticle(index); // Enter fullscreen
//         }
//     };

//     const handleArticleMouseEnter = (index) => {
//         setHoveredArticle(index);
//     };

//     const handleArticleMouseLeave = () => {
//         setHoveredArticle(null);
//     };

//     const displayedArticles = articles.slice(0, visibleCount);

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-800 text-white flex flex-col items-center justify-center py-10 px-4">
//             <h1 className="text-5xl font-extrabold tracking-tight mb-10 text-white drop-shadow-lg animate-pulse">News Explorer</h1>
//             <div className="flex flex-col items-center w-full">
//                 {displayedArticles.length > 0 ? (
//                     displayedArticles.map((article, index) => (
//                         <div
//                             key={index}
//                             className={`article-container ${fullscreenArticle === index ? 'fullscreen' : ''}`}
//                             onClick={() => handleArticleClick(index)}
//                             onMouseEnter={() => handleArticleMouseEnter(index)}
//                             onMouseLeave={handleArticleMouseLeave}
//                         >
//                             <h1 className="font-size: 2rem line-height: 5rem font-bold mb-4 text-indigo-700 article-title">{article.title}</h1>
//                             <div className={`article-content ${hoveredArticle === index || fullscreenArticle === index ? 'show' : 'hide'}`}>
//                                 <p className="text-lg text-gray-600 mb-6">{article.summary}</p>
//                                 <a
//                                     href={article.link}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="text-xl font-semibold text-indigo-600 hover:text-purple-600 transition-colors duration-300"
//                                 >
//                                     Read more
//                                 </a>
//                                 <p className="text-gray-500 mt-4 italic">{article.date}</p>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <p className="text-xl text-white">No articles available.</p>
//                 )}
//             </div>
//             {visibleCount < articles.length && (
//                 <button
//                     onClick={handleLoadMore}
//                     className="px-5 py-2 rounded-full text-white font-semibold shadow-md bg-purple-600 hover:bg-purple-500 focus:ring-4 focus:ring-purple-300 transition-all duration-300 mt-6"
//                 >
//                     Load More
//                 </button>
//             )}
//         </div>
//     );
// };

// export default Articles;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Article.css'; // Make sure to include your CSS file

const Articles = ({ category }) => {
    const [articles, setArticles] = useState([]);
    const [visibleCount, setVisibleCount] = useState(5); // Number of articles to show
    const [fullscreenArticle, setFullscreenArticle] = useState(null);
    const [hoveredArticle, setHoveredArticle] = useState(null);

    useEffect(() => {
        // Load the JSON data based on the category
        fetch('/src/assets/categorized_news_data.json')
            .then(response => response.json())
            .then(data => {
                if (category && data[category]) {
                    setArticles(data[category]);
                }
            })
            .catch(error => console.error('Error loading JSON:', error));
    }, [category]);

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 5); // Increase count by 5
    };

    const handleArticleClick = (index) => {
        if (fullscreenArticle === index) {
            setFullscreenArticle(null); // Toggle off fullscreen if already in fullscreen
        } else {
            setFullscreenArticle(index); // Enter fullscreen
        }
    };

    const handleArticleMouseEnter = (index) => {
        setHoveredArticle(index);
    };

    const handleArticleMouseLeave = () => {
        setHoveredArticle(null);
    };

    const displayedArticles = articles.slice(0, visibleCount);

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-800 text-white flex flex-col items-center justify-center py-10 px-4">
            <h1 className="text-5xl font-extrabold tracking-tight mb-10 text-white drop-shadow-lg animate-pulse">News Explorer</h1>
            <div className="flex flex-col items-center w-full">
                {displayedArticles.length > 0 ? (
                    displayedArticles.map((article, index) => (
                        <div
                            key={index}
                            className={`article-container ${fullscreenArticle === index ? 'fullscreen' : ''}`}
                            onClick={() => handleArticleClick(index)}
                            onMouseEnter={() => handleArticleMouseEnter(index)}
                            onMouseLeave={handleArticleMouseLeave}
                        >
                            <h1 className="font-size: 2rem line-height: 5rem font-bold mb-4 text-indigo-700 article-title">{article.title}</h1>
                            <div className={`article-content ${hoveredArticle === index || fullscreenArticle === index ? 'show' : 'hide'}`}>
                                <p className="text-lg text-gray-600 mb-6">{article.summary}</p>
                                <a
                                    href={article.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl font-semibold text-indigo-600 hover:text-purple-600 transition-colors duration-300"
                                >
                                    Read more
                                </a>
                                <p className="text-gray-500 mt-4 italic">{article.date}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-xl text-white">No articles available.</p>
                )}
            </div>
            {visibleCount < articles.length && (
                <button
                    onClick={handleLoadMore}
                    className="px-5 py-2 rounded-full text-white font-semibold shadow-md bg-purple-600 hover:bg-purple-500 focus:ring-4 focus:ring-purple-300 transition-all duration-300 mt-6"
                >
                    Load More
                </button>
            )}
        </div>
    );
};

const AboutUs = () => {
    const teamMembers = [
        { name: 'Arkaprabha Chakraborty', email: 'arkaprabha@example.com', linkedin: 'https://linkedin.com/in/arkaprabha', github: 'https://github.com/arkaprabha' },
        { name: 'Aritra Routh', email: 'aritra@example.com', linkedin: 'https://linkedin.com/in/aritra', github: 'https://github.com/aritra' },
        { name: 'Pamela Pal', email: 'pamela@example.com', linkedin: 'https://linkedin.com/in/pamela', github: 'https://github.com/pamela' },
        { name: 'Soham Goswami', email: 'soham@example.com', linkedin: 'https://linkedin.com/in/soham', github: 'https://github.com/soham' },
        { name: 'Roshni Koley', email: 'roshni@example.com', linkedin: 'https://linkedin.com/in/roshni', github: 'https://github.com/roshni' },
        { name: 'Srija Majumdar', email: 'srija@example.com', linkedin: 'https://linkedin.com/in/srija', github: 'https://github.com/srija' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-700 to-gray-900 text-white flex flex-col items-center justify-center py-10 px-4">
            <h1 className="text-4xl font-extrabold tracking-tight mb-10 text-white drop-shadow-lg animate-pulse">About Us</h1>
            <div className="flex flex-col items-center w-full">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-gray-800 p-6 mb-6 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
                        <p className="text-lg mb-2">Email: <a href={`mailto:${member.email}`} className="text-indigo-500 hover:text-purple-400">{member.email}</a></p>
                        <p className="text-lg mb-2">LinkedIn: <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-purple-400">LinkedIn Profile</a></p>
                        <p className="text-lg mb-2">GitHub: <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-purple-400">GitHub Profile</a></p>
                    </div>
                ))}
                <div className="bg-gray-800 p-6 mt-6 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-2">Project GitHub Repository</h2>
                    <p className="text-lg">
                        <a href="https://github.com/random-repo" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-purple-400">
                            View Repository
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

const Navbar = () => (
    <nav className="bg-indigo-700 p-4 text-white w-full">
        <ul className="flex space-x-6 justify-center">
            <li><Link to="/" className="hover:text-purple-300">Phishing</Link></li>
            <li><Link to="/malware" className="hover:text-purple-300">Malware</Link></li>
            <li><Link to="/ransomware" className="hover:text-purple-300">Ransomware</Link></li>
            <li><Link to="/about" className="hover:text-purple-300">About Us</Link></li>
        </ul>
    </nav>
);

const App = () => (
    <Router>
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Articles category="phishing" />} />
                <Route path="/malware" element={<Articles category="malware" />} />
                <Route path="/ransomware" element={<Articles category="ransomware" />} />
                <Route path="/about" element={<AboutUs />} />
            </Routes>
        </div>
    </Router>
);

export default App;

