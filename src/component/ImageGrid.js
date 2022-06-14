import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useFirestore from "../hook/useFirestore";
import { photoStorage } from "../firebase/config";
// import {getStorage} from 'firebase/storage'
import  firebase from 'firebase/app';
// const storage = getStorage();
const ImageGrid = ({ setselectedImg }) => {
  const { docs } = useFirestore("images");
  console.log(docs);
  //   const [images, setImages] = useState([]);

  //   useEffect(() => {
  //     getFromFirebase();
  //   }, []);

  // const getFromFirebase = () => {
  //     let storageRef = photoStorage.ref();
  //     storageRef.listAll().then(function (res) {
  //         console.log(res)
  //         res.items.forEach((imageRef) => {
  //           imageRef.getDownloadURL().then((url) => {
  //               setImages((allImages) => [...allImages, url]);
  //           });
  //         });
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   };
  const handleDownLoadFile = (url) => {
    // photoStorage.ref(url).getDownloadURL().then(function (url) {
    //     var link = document.createElement("a");
    //     if (link.download !== undefined) {
    //         link.setAttribute("href", url);
    //         link.setAttribute("target", "_blank");
    //         link.style.visibility = 'hidden';
    //         document.body.appendChild(link);
    //         link.click();
    //         document.body.removeChild(link);
    //     }
    // })

    const storage = firebase.storage();
    storage.child(url).download(url)
    var a = document.createElement("a")
    document.body.appendChild(a)
    a.style = "display: none"
    a.href = url
    a.download = 'file'
    a.click()
    // const link = document.createElement('a');
    //         link.href = window.URL.createObjectURL();
    //         link.download = url;
    //         link.click();
    // Firebase.storage().ref('file.jpg').getDownloadURL().then((url) => {
    //     var a = document.createElement("a")
    //     document.body.appendChild(a)
    //     a.style = "display: none"
    //     a.href = url
    //     a.download = 'file'
    //     a.click()
    //  }).catch(function(msg) {
    //  })
    // const storage = getStorage();
    // getDownloadURL(ref(storage, "images/stars.jpg"))
    //   .then((url) => {
    //     // `url` is the download URL for 'images/stars.jpg'

    //     // This can be downloaded directly:
    //     const xhr = new XMLHttpRequest();
    //     xhr.responseType = "blob";
    //     xhr.onload = (event) => {
    //       const blob = xhr.response;
    //     };
    //     xhr.open("GET", url);
    //     xhr.send();

    //     // Or inserted into an <img> element
    //     const img = document.getElementById("myimg");
    //     img.setAttribute("src", url);
    //   })
    //   .catch((error) => {
    //     // Handle any errors
    //   });
  };
  const handleDeletePhoto = async (url) => {
    // let pictureRef = photoStorage.refFromURL(url);
    // pictureRef
    //   .delete()
    //   .then(() => {
    //     docs.filter((img) => img.url !== url);
    //     console.log("Picture is deleted successfully!");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <>
            <motion.div
              className="img-wrap"
              key={doc.id}
              layout
              whileHover={{ opacity: 1 }}
              s
              // onMouseOver={() => handleDeletePhoto(doc.url)}
              onClick={() => handleDownLoadFile(doc.url)}
            >
              <motion.img
                src={doc.url}
                alt="upload picture"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
            <p>{doc.name}</p>
          </>
        ))}
    </div>
  );
};

export default ImageGrid;
