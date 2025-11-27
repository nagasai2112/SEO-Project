import React, { useState } from 'react';
import './VideoUpload.css';

const VideoUpload = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [keywords, setKeywords] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setVideoFile(file);
    setVideoPreview(URL.createObjectURL(file));
    setKeywords([]); // Clear previous keywords
  };

  const handleUpload = async () => {
    if (!videoFile) {
      alert("Please select a video to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("video", videoFile);

    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/process-video", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data = await response.json();
      setKeywords(data.keywords || []);
      setLoading(false);
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to process video.");
      setLoading(false);
    }
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
          <button className="upload-btn" onClick={handleUpload} disabled={loading}>
            {loading ? "Processing..." : "Upload & Generate Keywords"}
          </button>
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
