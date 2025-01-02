import * as React from 'react';
import './VideoFinder.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const VideoFinder: React.FC = () => {
    const [isVideoVisible, setIsVideoVisible] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [videoData, setVideoData] = React.useState<{ thumbnail: string, url: string } | null>(null);
    const [url, setUrl] = React.useState('');

    const handleSearchClick = async () => {
        setIsLoading(true);
        const response = await fetch('http://localhost:3001/reel', { // Replace with real API endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url })
        });
        const data = await response.json();
        setVideoData(data[0]);
        setIsLoading(false);
        setIsVideoVisible(true);
    };

    const handleBackClick = () => {
        setIsVideoVisible(false);
        setVideoData(null);
    };

    return (
        <div className="container home-section">
            {isLoading && <div className="loading-screen">Loading...</div>}
            {!isVideoVisible ? (
                <>
                    <img src="/assets/img/TetoCatch-Logo.png" alt="TetoCatch-Logo" />
                    <div className="search-bar">
                        <input 
                            type="text" 
                            className="search-input" 
                            placeholder="Paste a valid URL..." 
                            value={url} 
                            onChange={(e) => setUrl(e.target.value)} 
                        />
                        <button className="search-button" onClick={handleSearchClick}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                    <p className="info-text">Supports multiple social networks!</p>
                </>
            ) : (
                <div className="video-section">
                    <img src={videoData?.thumbnail} alt="Video Thumbnail" className="video-thumbnail" />
                    <div className="video-info">
                        <h3>Video title</h3>
                        <p>00:00</p>
                        <div className="download-buttons">
                            <a href={videoData?.url} className="btn btn-download" download>Download</a>
                            <button className="btn btn-back" onClick={handleBackClick}>
                                <FontAwesomeIcon icon={faArrowLeft} /> Back
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoFinder;
