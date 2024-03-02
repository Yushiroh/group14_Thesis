import { useState, useEffect } from "react";
import { storage, db } from './firebase';
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { ref as dbRef, push } from "firebase/database";
import { v4 } from "uuid";

function FileManagement() {
  const [fileUpload, setFileUpload] = useState(null);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const isPDF = (file) => {
    return file.type === "application/pdf";
  };

  const uploadFile = () => {
    if (fileUpload == null) return;

    
    if (!isPDF(fileUpload)) {
      alert("Please select a PDF file.");
      return;
    }

    const fileRef = storageRef(storage, `files/${v4()}`);
    const databaseRef = dbRef(db, 'uploadedFiles');


    uploadBytes(fileRef, fileUpload).then(() => {
      getDownloadURL(fileRef).then((downloadURL) => {
        const fileData = {
          name: fileUpload.name,
          url: downloadURL,
          timestamp: Date.now(),
          colortype: color,
          papersize: size,
        };

        push(databaseRef, fileData).then(() => {
          alert("File Uploaded");
        })
        .catch((error) => {
          console.error("Error pushing data to database:", error);
        });
      });
    })
    .catch((error) => {
      console.error("Error uploading file to storage:", error);
    });
  };


  return (
    <div className="home">
      <input 
        type="file" 
        accept=".pdf"  
        onChange={(event) => {
          setFileUpload(event.target.files[0]);
        }}
      />
      <h3>Color Mode: </h3>
      <input
        type="radio"
        name="color"
        value="Colored"
        id="colored"
      />
      <label htmlFor="colored">Colored</label>
      <input
        type="radio"
        name="color"
        value="BnW"
        id="bnw"
      />
      <label htmlFor="bnw">Black & White</label>
      <h3>Paper Size: </h3>
      <input
        type="radio"
        name="size"
        value="Long"
        id="long"
      />
      <label htmlFor="colored">Long</label>
      <input
        type="radio"
        name="size"
        value="Short"
        id="short"
      />
      <label htmlFor="short">Black & White</label>
      <button onClick={uploadFile}>Generate Ticket</button>
      

    </div>
  );
}

export default FileManagement;

