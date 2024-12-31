import * as React from 'react';
import './VideoFinder.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const VideoFinder: React.FC = () => {
    return (
        <div className="container">
            <img src="/assets/img/TetoCatch-Logo.png" alt="TetoCatch-Logo" />
            <div className="search-bar">
                <input type="text" className="search-input" placeholder="Paste a valid URL..." />
                <button className="search-button">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            <p className="info-text">Supports multiple social networks!</p>
        </div>
    );
};

export default VideoFinder;