import * as React from 'react';
import { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage } from '@ionic/react';
import Header from '../components/Header/Header';
import VideoFinder from './VideoFinder/VideoFinder';
import About from './About/About';
import './Index.css';

const Index: React.FC = () => {
  // State for the active section based on the URL
  const [activeSection, setActiveSection] = useState<string>('home');

  // Function to update the section based on the URL
  const updateSectionFromURL = () => {
    const hash = window.location.hash.replace('#', '') || 'home'; // Default: 'home'
    setActiveSection(hash);
  };

  // Detect changes in the URL
  useEffect(() => {
    updateSectionFromURL(); // Start
    window.addEventListener('hashchange', updateSectionFromURL); // Hash event
    return () => window.removeEventListener('hashchange', updateSectionFromURL); // Cleanup
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <Header
          title={`TetoCatch - ${
            activeSection === 'home' ? 'Home' : activeSection === 'about' ? 'About' : '???'
          }`}
          showBackButton={activeSection !== 'home'}
          onBackButtonClick={() => (window.location.hash = 'home')}
        />
      </IonHeader>
      <IonContent fullscreen>
        <div className="content">
          {activeSection === 'home' && <VideoFinder />}
          {activeSection === 'about' && <About />}
          {activeSection === 'options' && (
            <div className="options-section">
              <h1>Options</h1>
              <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
              </ul>
            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Index;
