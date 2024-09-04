import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Header from "../../componants/header/Header"
import Navbar from "../../componants/navbar/Navbar"
import MailList from "../../componants/maillist/MailList"
import Footer from "../../componants/footer/Footer"
import "./hotel.css"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Hotel = () => {

  const [sildeNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (index) =>{
    setSlideNumber(index);
    setOpen(true)
  }
  const handleMove= (direction) =>{
    let setNew ;
    if(direction === "l")
      {
       setNew = sildeNumber === 0 ? 5 : sildeNumber -1
    }
    else{
      setNew = sildeNumber === 5 ? 0 : sildeNumber + 1
    }
    setSlideNumber(setNew)

  }
  
  return (
    <div>
      <Navbar />
      <Header type ="list"/>
      <div className="hotelcontainer">
      { open && <div className="slider">
       <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)} />
       <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
       <div className="sliderwrapper">
        <img src={photos[sildeNumber].src} alt="" className="sliimg"/>
       </div>
       <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
       </div>}
        <div className="hotelwrapper">
          <button className="booknow">Reserve or Book Now!</button>
          <h1 className="hoteltitle">Grand Hotel</h1>
          <div className="hoteladdress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>OMR st Chennai</span>

          </div>
          <span className="hoteldistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelpricehighlight">
            Book a stay over &#8377;2000 at this property and get a free airport taxi
          </span>
          <div className="hotelimages">
              {photos.map((photo,index)=>(
                <div className="hotelimgwrapper">
                <img onClick={()=>handleOpen(index)} src={photo.src} alt="" className="hotelimg" />
                </div>
              ))}
          </div>
          <div className="hoteldetails">
            <div className="hoteldetailstexts">
               <h1 className="hoteltitle">Stay in the heart of Krakow</h1>
               <p className="hoteldesc">
               Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków-Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
               </p>
            </div>
            <div className="hoteldetailprice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow,this property has an 
                excellent location score of 9.8! 
              </span>
              <h2>
                <b>₹17000</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel