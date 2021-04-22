import React from 'react'
import {motion} from 'framer-motion'
import useFirestore  from '../hook/useFirestore'

const ImageGrid = ({setselectedImg}) => {
    const {docs} = useFirestore('images')
    return (
        <div className ="img-grid">
            {docs && docs.map(doc =>(
                <motion.div className ="img-wrap" key = {doc.id}
                layout
                whileHover={{opacity: 1}}s
                onClick ={()=> setselectedImg(doc.url)}>

                    <motion.img src ={doc.url} alt = "upload picture"
                    initial ={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1}}
                    />
                </motion.div> 
            ))}
        </div>
    )
}

export default ImageGrid
