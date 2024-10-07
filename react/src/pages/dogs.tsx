import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Image, Spinner } from "react-bootstrap";

const Dogs = () => {
    const [loading, setLoading] = useState(true);
    const [dogImg, setDogImg] = useState("");
    const [reset, setReset] = useState(false)

    const searchAxios = () => {
        const url = "https://dog.ceo/api/breeds/image/random"
        axios.get(url)
        .then(function (response) {
            setDogImg(response.data.message);
            setLoading(false);
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    useEffect(() => {
        setLoading(true)
        searchAxios()
    }, [reset])

    return(
        <>  
            <Button onClick={() => {
                    setReset(!reset);       
            }}>Reset Dog</Button>
            
            {
                loading ? <Spinner></Spinner> : <Image src={dogImg} alt="Random dog image"></Image>
            }   
        </>
    )
}

export default Dogs;