import "./searchitem.css"

const Searchitem = () => {
  return (
    <div className="searchitem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1" 
        alt="" 
        className="siimg" />
        <div className="sidesc">
            <h1 className="sititle">Town Hall Apartment</h1>
            <span className="sidistance">500m from center</span>
            <span className="sitaxiop">Free Airport taxi</span>
            <span className="sisubtitle">
                Studio Apartment with Air conditioning
            </span>
            <span className="ifeatures">
                Entire Studio &bull; 1 batroom &bull; 21m&sup2; 1 full bed
            </span>
            <span className="siCancelOp">Free cancellation </span>
            <span className="siCancelOpSubtitle">
             You can cancel later, so lock in this great price today!
             </span>

        </div>
        <div className="sidetails">
              <div className="sirating">
                <span>Excellent</span>
                <button>8.9</button>
              </div>
              <div className="sidetailtexts">
                <span className="siprice">₹2000</span>
                <span className="sitaxop">Includes taxes and fees</span>
                <button className="sicheckbtn">See availability</button>
              </div>
        </div>
    </div>
  )
}

export default Searchitem