import Featured from "../../componants/featured/Featured";
import FeaturedProperties from "../../componants/feturedproperties/FeaturedProperties";
import Footer from "../../componants/footer/Footer";
import Header from "../../componants/header/Header";
import MailList from "../../componants/maillist/MailList";
import Navbar from "../../componants/navbar/Navbar";
import PropertyList from "../../componants/propertylist/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="hometitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="hometitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />

      </div>
       </div>
  )
}

export default Home