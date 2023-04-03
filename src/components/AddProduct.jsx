import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const AddProduct = () => {
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");
    const [image, setImage] = useState('');
    const [imageLink, setImageLink] = useState('')
    const [value, setValue] = useState("");
    const [showProgressBar, setShowProgressBar] = useState(false);
    const [progressValue, setProgressValue] = useState('');

    let navigate = useNavigate();


    useEffect(() => {
        if (localStorage.getItem('adminLoggedIn') !== null){
        } else {
           navigate("/")
        }

        const uploadFile = () => {
            const name = new Date().getTime() + image.name;
            console.log(name)
            const storageRef = ref(storage, image.name)
            const uploadTask = uploadBytesResumable(storageRef, image);


        uploadTask.on('state_changed', 
        (snapshot) => {
            setShowProgressBar(true)

            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            setProgressValue(progress)
            switch (snapshot.state) {
            case 'paused':
                console.log('Upload is paused');
                break;
            case 'running':
                console.log('Upload is running');
                break;
                default:
                    break;
            }
        }, 
        (error) => {
        
        }, 
        () => {
            
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log("downloadUrl", downloadURL)
                setImageLink(downloadURL)
                setValue('true')
            });
        }
        );
                }
                image && uploadFile();
            }, [image])

    const postsCollectionRef = collection(db, "product-posts")

    
    const id = Math.random().toString(16).slice(2);
    
    const createProduct = async () => {
        console.log("image", imageLink)
        await addDoc(postsCollectionRef, {
            id: id,
            title: title,
            postText: postText,
            image: imageLink
        });
         navigate("/products")
         console.log("firebase called")
    }

    return(
    <>
        <div className="centered">

            <input type="text" name="name" placeholder="Emri i produktit" onChange={(e) => setTitle(e.target.value)} />
            <textarea name="name"  rows="4" placeholder="Përshkrimi i produktit" onChange={(e) => setPostText(e.target.value)}></textarea>
            <input type="file" id="file" onChange={(e) => setImage(e.target.files[0])} />
            <button disabled={!value}  type="submit"onClick={createProduct}>Shto</button>
            {showProgressBar && <p>{progressValue}</p>}
       </div>
    </>
    )
}

export default AddProduct;