import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

function UploadForm() {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleUpload = () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const storageRef = ref(storage, `uploads/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setUploadStatus(`Uploading... ${progress}%`);
      },
      error => {
        alert("Upload failed");
        console.error(error);
        setUploadStatus("Upload failed");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
          setUploadStatus("✅ File uploaded successfully!");
          console.log("Download URL:", downloadURL);
        });
      }
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Upload Your Document</h2>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
      <p>{uploadStatus}</p>
    </div>
  );
}

export default UploadForm;
