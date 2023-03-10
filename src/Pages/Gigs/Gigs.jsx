import React ,{useState}from "react";
import "./Gigs.scss";
import {gigs} from "../../data"
import GigCard from "../../Components/GigCard/GigCard"
const Gigs = () => {
  const [Open, setOpen] = useState(false)
  const [sort, setSort] = useState("sales")

  const reSort = (type)=>{
    setSort(type)
    setOpen(false)
  }
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">FIVERR > GRAPHICS & DESIGN ></span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr's AI Artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="Min" />
            <input type="text" placeholder="Max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortby">Sort By</span>
            <span className="sorttype" onClick={()=>{setOpen(!Open)}}>{ sort === "sales"?"Best Selling":"Newest"}</span>
            <img src="./img/down.png" alt=""   />
            {Open && (<div className="rightmenu">
              { sort === "sales" ? <span onClick={()=>{reSort("createdAt")}}>Newest</span> :
              <span onClick={()=>{reSort("sales")}}>Best Selling</span>}
            </div>)}
          </div>
        </div>
        <div className="cards">
         {gigs.map(gig=>{
          return <GigCard item={gig} key={gig.id}/>
         })}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
