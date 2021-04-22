import React, {useState} from 'react'


import {Title, UploadForm, ImageGrid, Model} from './component/index'

function App() {

const [selectedImg, setselectedImg] = useState(null)

  return (
    <div className = 'App'>
      <Title />
      <UploadForm />
      <ImageGrid setselectedImg = {setselectedImg} />
      {selectedImg && (<Model selectedImg = {selectedImg}  setSelectedImg = {setselectedImg} />)}
    </div>
  );
}

export default App;
