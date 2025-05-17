import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'FitnFrame',
    description:
      'An Internet Computer-based fitness companion template using Motoko and JavaScript, scaffolded with DFX; includes posture tracking and gamified incentives.',
    image: 'https://static.mygov.in/static/s3fs-public/mygov_169321819950183151.jpg',
    tags: ['Motoko', 'JavaScript', 'Internet Computer', 'DFX','Blockchain','Web 3.0'],
    liveUrl: 'http://localhost:8080',
    githubUrl: 'https://github.com/Kaif2684/FitnFrame',
  },
  {
    id: 2,
    title: 'Brawler',
    description:
      'A 2D offline multiplayer fighting game built with Python and Pygame featuring sprite animations, health bars, sound effects, and victory screens.',
    image: 'https://raw.githubusercontent.com/Kaif2684/Brawler/refs/heads/main/assets/images/Background/background.jpg',
    tags: ['Python', 'Pygame', 'Game Development'],
    liveUrl: '',
    githubUrl: 'https://github.com/Kaif2684/Brawler',
  },
  {
    id: 3,
    title: 'Cognitive Decline Detector',
    description:
      'An end-to-end speech analysis pipeline using FastAPI, Transformers, Librosa, and Scikit-Learn to detect cognitive markers from audio samples.',
    image: 'https://raw.githubusercontent.com/Kaif2684/Cognitive_decline_detector/refs/heads/main/cognitive_results/feature_importance.png',
    tags: ['Python', 'FastAPI', 'Transformers', 'Librosa', 'Scikit-Learn','NLP'],
    liveUrl: 'https://your-deployment-url.com/api',
    githubUrl: 'https://github.com/Kaif2684/Cognitive_decline_detector',
  },
  {
    id: 4,
    title: 'Internship-Placement-Assistant',
    description:
      'A Python-based web scraper and NLP-powered chatbot that extracts internship listings from Internshala, stores them in CSV, and uses semantic search to recommend the best matches in a conversational UI.', 
    image: 'https://private-user-images.githubusercontent.com/170238066/428281181-68eb560b-1c73-41b5-a601-57c132225441.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDc1MTg3NTMsIm5iZiI6MTc0NzUxODQ1MywicGF0aCI6Ii8xNzAyMzgwNjYvNDI4MjgxMTgxLTY4ZWI1NjBiLTFjNzMtNDFiNS1hNjAxLTU3YzEzMjIyNTQ0MS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTE3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUxN1QyMTQ3MzNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lODU4M2FiNzFhYmJjODIwM2FmNWEwMWYyMDM0MWExOTU4ZjJmOTJiMmIwMzJjOGE2MzVhYjAwZTczM2M5NjZjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.1OYqPUXek2BJA3X07MHWh2gX4SR6gh-bh5AiIZ1Efb8',
    tags: [
      'Python',
      'Web Scraping (BeautifulSoup4, Requests)',
      'Pandas',
      'SentenceTransformers',
      'NLTK',
      'Chatbot'
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/Priyanshu0714/Internship-Placement-Assistant',
  },
];
