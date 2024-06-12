
import "../../App.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MainSlider from "../../components/MainSlider/MainSlider";
import PostFooter from "../../components/PostFooter/PostFooter";
// import SecondSlider from "../../components/SecondSlider/SecondSlider";
import pets from "../../assets/pets";
import PetCard from "../../components/PetCard/PetCard";


function Home() {
  return (
    <>
      <Header />
      <MainSlider autoplay={true} autoplayInterval={5000} slidesToShow={2}/>
      {/* <SecondSlider autoplay={false}/> */}
      <main>
        <div className="flex justify-center">
        {pets.map((pet) => (
          <PetCard key={pet.id} {...pet} />
        ))}
        </div>

      </main>
      <Footer />
      <PostFooter />
    </>
  );
}

export default Home;
