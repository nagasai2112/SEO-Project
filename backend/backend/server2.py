from flask import Flask, jsonify, request

app = Flask(__name__)

# Endpoint to receive and store keywords
received_keywords = []

@app.route('/receive_keywords', methods=['POST'])
def receive_keywords():
    global received_keywords
    data = request.json
    if "keywords" in data:
        received_keywords = data["keywords"]
        return jsonify({"message": "Keywords received successfully"}), 200
    return jsonify({"error": "Invalid data format"}), 400

@app.route('/process-video', methods=['POST'])
def process_video():
    if 'video' not in request.files:
        return jsonify({"error": "No video file received"}), 400

    video = request.files['video']
    video_path = os.path.join("temp_videos", video.filename)

    # 🔥 Save Video Temporarily
    os.makedirs("temp_videos", exist_ok=True)
    video.save(video_path)

    # 🧠 Call Your Video Processing Model Here
    print(f"Processing video: {video_path}")

    # ✅ Dummy Response
    response = {"message": "Video processed successfully", "filename": video.filename}

    # 🚀 Delete the temp video after processing (optional)
    os.remove(video_path)

    return jsonify(response)

@app.route('/home', methods=['GET'])
def home():
    return jsonify({"keywords": received_keywords})

if __name__ == '__main__':
    app.run(debug=True)