import { useParams } from "react-router-dom";
import pets from "../../assets/pets";
import Header from "../../components/Header/Header";

const Details = () => {
    const { petId } = useParams();
    const pet = pets.find((pet) => pet.id === petId);
    return (
        <>
            
            <Header />
            <div>
                {
                    pet ? (<p>{pet.name}</p>) : <p>No pet found</p>
                }
            </div>
        </>
    )
};

export default Details