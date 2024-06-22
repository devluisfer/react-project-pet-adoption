import { useParams } from "react-router-dom";
import pets from "../../assets/pets";
import Header from "../../components/Header/Header";
import PetCard from "../../components/PetCard/PetCard";
import Footer from "../../components/Footer/Footer";

const Details = () => {
    const { petId } = useParams();
    const pet = pets.find((pet) => pet.id === petId);
    return (
        <>
            
            <Header />
            <main className="w-full pt-[200px] pb-[100px]">
                <div className="flex justify-center">
                    {pet ? (
                        // <PetCard {...pet} isLink={false} />
                        <div>
                            <div>
                                <div>
                                <img src={pet.images[0]} alt={pet.name}/>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    ):""}
                </div>

            </main>

            <Footer />

        </>
    )
};

export default Details