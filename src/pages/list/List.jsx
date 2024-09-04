import "./list.css"
import Navbar from '../../componants/navbar/Navbar'
import Header from '../../componants/header/Header'
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { format, setDate } from "date-fns"
import { DateRange } from "react-date-range"
import Searchitem from "../../componants/searchitem/Searchitem"

const List = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setdate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setoptions] = useState(location.state.options)

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listcontainer">
        <div className="listwrapper">
          <div className="listsearch">
               <h1 className="listtitle">Search</h1>
               <div className="lsitem">
                <label>Destination</label>
                <input  placeholder={destination} type="text"/>
               </div>
               <div className="lsitem">
                <label>Check-in Date</label>
                <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}` }</span>
               {openDate && (
                <DateRange 
                onChange={item=>setDate([item.selection])} 
                minDate={new Date()}
                ranges={date}
                 />)}
               </div>
             <div className="lsitem">
              <label>Options</label>
              <div className="lsoptions">
              <div className="lsoptionitem">
                <span className="lsoptiontext">
                  Min price <small>per night</small>
                </span>
                <input type="number" className="lsoptioninput" placeholder=""/>
              </div>
              <div className="lsoptionitem">
                <span className="lsoptiontext">
                  Max price <small>per night</small>
                </span>
                <input type="number" className="lsoptioninput" />
              </div>
              <div className="lsoptionitem">
                <span className="lsoptiontext">
                  adult  
                </span>
                <input type="number" min={1} className="lsoptioninput"  placeholder={options.adults}/>
              </div>
              <div className="lsoptionitem">
                <span className="lsoptiontext">
                  Children 
                </span>
                <input type="number"  min={0} className="lsoptioninput" placeholder={options.Children} />
              </div>
              <div className="lsoptionitem">
                <span className="lsoptiontext">
                  Room 
                </span>
                <input type="number"  min={1} className="lsoptioninput" placeholder={options.room}/>
              </div>
             </div>
          </div>
          <button>Search</button>
          </div>
          <div className="listresult">
           <Searchitem />
           <Searchitem />
           <Searchitem />
           <Searchitem />
           <Searchitem />
           <Searchitem />
           <Searchitem />
           <Searchitem />
           <Searchitem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default List