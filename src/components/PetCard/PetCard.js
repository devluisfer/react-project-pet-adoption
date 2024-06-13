import pets from "../../assets/pets";
import { Link } from "react-router-dom";



const PetCard = ({ id, name, type, race, gender, age, size, direction, description, images, status, others, isLink }) => {

    // const { id, name, type, race, gender, age, size, direction, description, images, status, others } = props;
    const pet = pets.find((pet) => pet.id === id);
    const cardContent = (
        <>
          <img
            src={images[0]}
            alt={name}
            className="w-[150px] h-[300px] object-cover"
          />
          <div>{name}</div>
        </>
      );

    return (<>
        {isLink ? (
          <Link to={`/details/${id}`}>
            {cardContent}
          </Link>
        ) : (
          <div className="w-[150px]">
            {cardContent}
          </div>
        )}
      </>
    )
};

export default PetCard