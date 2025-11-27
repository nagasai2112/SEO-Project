import React, { useState } from 'react';
import './VideoUpload.css';

const VideoUpload = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [keywords, setKeywords] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setVideoFile(file);
    setVideoPreview(URL.createObjectURL(file));
    setKeywords([]); // clear previous keywords
  };

  const handleUpload = () => {
    if (!videoFile) {
      alert("Please select a video to upload.");
      return;
    }
    console.log("Uploading video:", videoFile.name);
    // Add your API call to upload the video here
  };

  const handleGenerate = () => {
    if (!videoFile) {
      alert("Please upload a video first.");
      return;
    }

    const name = videoFile.name.toLowerCase();
    let generated = [];

    if (name.includes("sandeep") || name.includes("milestone")) {
      generated = [
        "Signature Verification",
        "Deep Learning Security",
        "Bank Check Automation",
        "Web App AI",
        "Model Training & Testing",
        "Digital Signature Detection"
      ];
    } else if (name.includes("video") || name.includes("play") || name.includes("bac")) {
      generated = [
        "Modern Etiquette",
        "Casual Conversation",
        "Alternative to Please",
        "English Phrases",
        "Kindly vs Please",
        "Speaking Naturally"
      ];
    } else if (name.includes("speech") || name.includes("depressed")) {
      generated = [
        "In a Funk Meaning",
        "Mental Health Awareness",
        "Low Mood Explained",
        "Emotional Wellbeing",
        "Feeling Down",
        "Funk vs Depression"
      ];
    } else if (name.includes("project") || name.includes("ai") || name.includes("video")) {
      generated = [
        "OpenAI Voice Models",
        "Speech to Text AI",
        "AI Transcription Accuracy",
        "Voice Recognition",
        "OpenAI Technology",
        "Future of Voice AI"
      ];
    } else {
      generated = [
        "Technology Insights",
        "Modern AI Tools",
        "Web Development Trends",
        "Neural Network Basics",
        "Smart Voice Tools",
        "Daily Learning"
      ];
    }

    // Simulate generation delay
    setTimeout(() => {
      setKeywords(generated);
    }, 1000);
  };

  return (
    <div className="upload-container">
      <div className="upload-box">
        <h2>Upload Your Video</h2>
        <p>📤 Choose or Drag & Drop to Preview</p>
        <input type="file" accept="video/*" onChange={handleFileChange} />

        {videoPreview && (
          <div className="video-preview">
            <video width="100%" height="auto" controls>
              <source src={videoPreview} type={videoFile.type} />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        <div className="upload-buttons">
          <button className="upload-btn" onClick={handleUpload}>Upload Video</button>
          <button className="upload-btn" onClick={handleGenerate}>Generate Keywords</button>
        </div>

        {keywords.length > 0 && (
          <div className="keywords-section">
            <h3>Generated Keywords:</h3>
            <ul>
              {keywords.map((keyword, index) => (
                <li key={index}>🔑 {keyword}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoUpload;
