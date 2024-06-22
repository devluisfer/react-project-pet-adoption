
import "../../App.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MainSlider from "../../components/MainSlider/MainSlider";
import PostFooter from "../../components/PostFooter/PostFooter";
// import SecondSlider from "../../components/SecondSlider/SecondSlider";
import pets from "../../assets/pets";
import PetCard from "../../components/PetCard/PetCard";
import { Link } from "react-router-dom";



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

        <div className="relative flex justify-center items-center bg-[url('https://images.ctfassets.net/gynu23gx3hnw/70eTxvmSx2zB0m3wMrHHQN/06621cfc65579240938be407ac01c4f4/adopt-callut-min-3.webp?w=1920&fm=webp')] h-[400px] bg-center bg-cover bg-no-repeat w-full  ">
          <div className="absolute bg-[#000] h-[400px] w-full bg-opacity-40">
            <div className="flex flex-col items-center justify-center text-center w-full h-full">
            <h2 className="text-[#f8f8f8] text-[40px]">Got <span className="font-extrabold">Love?</span> Give <span className="font-extrabold">Love</span></h2>
            <Link to="/adopt" className="no-underline text-[#0096FF] bg-[#b5f3ff] hover:bg-[#0096FF] hover:text-[#f8f8f8] px-[20px] py-[10px] rounded-full">Adopt</Link>
            </div>

          </div>
        </div>
        
      </main>
      <Footer />
      <PostFooter />
    </>
  );
}

export default Home;
