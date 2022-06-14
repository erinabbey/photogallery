import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useFirestore from "../hook/useFirestore";
import { photoStorage } from "../firebase/config";
import { useState } from "react/cjs/react.production.min";

const ImageGrid = ({ setselectedImg }) => {
    const {docs} = useFirestore("images")
    console.log(docs)
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
            onMouseOver={() => handleDeletePhoto(doc.url)}
            onClick={() => setselectedImg(doc.url)}
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
