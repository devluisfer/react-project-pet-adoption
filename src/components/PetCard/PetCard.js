import pets from "../../assets/pets";
import { Link } from "react-router-dom";

const PetCard = ({
  id,
  name,
  type,
  race,
  gender,
  age,
  size,
  direction,
  description,
  images,
  status,
  others,
  isLink,
}) => {
  // const { id, name, type, race, gender, age, size, direction, description, images, status, others } = props;
  const pet = pets.find((pet) => pet.id === id);

  const cardContent = (
    <>
      <div className="rounded-lg bg-[#d6f7ff]">
      <img
        src={images[0]}
        alt={name}
        className="w-[200px] h-[250px] object-cover rounded-t-lg"
      />
      <div className="font-['helvetica'] p-[15px]">
        <div className="font-bold text-[32px] text-[#0e3b5d]">{name}</div>
        <div className="text-base">{type}</div>
        <div className="text-base">{race}</div>
        <div className="text-base">{gender}</div>
        <div className="text-base">{age}</div>
        <div className="text-base">{size}</div>
        <div className="text-base">{direction}</div>
        <div className="text-base">{description}</div>
        {/* <div>{status}</div> */}
        <div className="text-base">{others}</div>
      </div>
      </div>

    </>
  );

  return (
    <>
      {isLink ? (
        <Link to={`/details/${id}`} className="p-[20px]">{cardContent}</Link>
      ) : (
        <div className="w-[200px]">{cardContent}</div>
      )}
    </>
  );
};

export default PetCard;
