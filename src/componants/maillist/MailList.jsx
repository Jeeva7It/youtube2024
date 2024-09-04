import "./maillist.css"

const MailList = () => {
  return (
    <div className='mailList'>
        <h1 className="mailtitle">Save time,save money! </h1>
        <span className="maildesc">Sign up and we'll sent the best deals to you</span>
        <div className="mailinpurcontainer">
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
        </div>    
    </div>
  )
}

export default MailList