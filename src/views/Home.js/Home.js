
import "../../App.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MainSlider from "../../components/MainSlider/MainSlider";
import PostFooter from "../../components/PostFooter/PostFooter";
// import SecondSlider from "../../components/SecondSlider/SecondSlider";
import pets from "../../assets/pets";
import PetCard from "../../components/PetCard/PetCard";


function Home() {

  const petsWaiting = pets.filter((pet) => pet.status === "Waiting");
  return (
    <>
      <Header />

      {/* <SecondSlider autoplay={false}/> */}
      <main className="w-full pt-[200px] pb-[100px] font-['helvetica']">
      <MainSlider autoplay={true} autoplayInterval={5000} slidesToShow={2}/>
        <div className="flex justify-center flex-wrap gap-4">
        {petsWaiting?.map((pet) => (
          <PetCard key={pet.id} {...pet} isLink={true} />
        ))}
        </div>

      </main>
      <Footer />
      <PostFooter />
    </>
  );
}

export default Home;
