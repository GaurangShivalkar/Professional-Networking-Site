import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useContext,  useState } from "react";

export default function Pphoto() {
    const { user } = useContext(AuthContext);
    
    const [file, setFile] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        const newPimage = {
          userId: user._id,
          
        };
        if (file) {
          const data3 = new FormData();
          const fileName = Date.now() + file.name;
          data3.append("name", fileName);
          data3.append("file", file);
          newPimage.profilePicture = fileName;
          console.log(newPimage);
          try {
            await axios.post("/upload", data3);
            //window.location.reload(false);
          } catch (err) {
            console.log(err);
          }
        }
        try {
            await axios.put(`/users/${user._id}`, newPimage);
          window.location.reload();
          
        } catch (err) {}
      };

    /*const imageclick = async (e) => {
        e.preventDefault();
        const image = {
            profilePicture: pimage.current.value,
        };
        try {

            await axios.put("/users/:id", image);
            console.log("image uploaded");
        } catch (err) {
            console.log(err);
        }
    }*/

    return (
        
        <form className="uploadImage" onSubmit={submitHandler}>

            <label htmlFor="file" className="shareOption">
            <span className="shareOptionText">Photo or Video</span>
                <input style={{ display: "none" }} type="file" id="file" accept=".png,.jpeg,.jpg"  onChange={(e) => setFile(e.target.files[0])} />
            </label>
            
            <button className="uploadbutton" type="submit" > upload </button>


        </form>
      
  );
}