import pets from "../../assets/pets";
import { Link } from "react-router-dom";



const PetCard = (props) => {

    const { id, name, type, race, gender, age, size, direction, description, images, status, others } = props;
    const pet = pets.find((pet) => pet.id === id);

    return (
        <>
            <Link to={`/details/${id}`}>
                <img
                    src={images[0]}
                    alt={name}
                    className="w-[150px] h-[300px] object-cover"
                />
                <span>{name}</span>
            </Link>
        </>
    )
};

export default PetCard