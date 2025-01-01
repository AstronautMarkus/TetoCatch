import * as React from 'react';
import './VideoFinder.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../components/Modal/Modal';

const VideoFinder: React.FC = () => {
    const [isVideoVisible, setIsVideoVisible] = React.useState(false);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [quality, setQuality] = React.useState('MP4 720');

    const handleSearchClick = () => {
        setIsVideoVisible(true);
    };

    const handleBackClick = () => {
        setIsVideoVisible(false);
    };

    const handleQualityChange = (newQuality: string) => {
        setQuality(newQuality);
        setIsModalOpen(false);
    };

    return (
        <div className="container home-section">
            {!isVideoVisible ? (
                <>
                    <img src="/assets/img/TetoCatch-Logo.png" alt="TetoCatch-Logo" />
                    <div className="search-bar">
                        <input type="text" className="search-input" placeholder="Paste a valid URL..." />
                        <button className="search-button" onClick={handleSearchClick}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                    <p className="info-text">Supports multiple social networks!</p>
                </>
            ) : (
                <div className="video-section">
                    <img src="/assets/img/video_thumbnail.jpg" alt="Video Thumbnail" className="video-thumbnail" />
                    <div className="video-info">
                        <h3>Video title</h3>
                        <p>00:00</p>
                        <div className="download-buttons">
                            <div className="download-button">
                                <button className="btn btn-download" onClick={() => setIsModalOpen(true)}>Download</button>
                                <span>{quality}</span>
                            </div>
                            <button className="btn btn-back" onClick={handleBackClick}>
                                <FontAwesomeIcon icon={faArrowLeft} /> Back
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h3>Select Quality</h3>
                <ul>
                    <li onClick={() => handleQualityChange('MP4 720')}>MP4 720</li>
                    <li onClick={() => handleQualityChange('MP4 1080')}>MP4 1080</li>
                    <li onClick={() => handleQualityChange('MP3 128')}>MP3 128</li>
                    <li onClick={() => handleQualityChange('MP3 320')}>MP3 320</li>
                </ul>
            </Modal>
        </div>
    );
};

export default VideoFinder;
