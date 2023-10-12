import { useState } from "react";
import { storage } from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";



function Uploadimage(){
    const currUser = localStorage.getItem('username');
    const {imageUpload, setImageUpload} = useState(null);
    function uploadImg(){
        if(imageUpload == null) return;
        
        const imageRef = ref(storage, `images/${currUser + v4()}`);
        uploadBytes(imageRef, imageUpload).then(()=>{
            alert("image uploded");
        })
    }

    return(
        <div>
            <input type="file" onChange={(event) => {setImageUpload(event.target.files[0])}} />
            <button onClick={ uploadImg }>Upload</button>
        </div>
    )
}

export default Uploadimage;