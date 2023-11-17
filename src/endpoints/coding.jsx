import { Link } from "@reach/router";


export default function Coding(){
  return (
    <>
    <div className="section-row" id="port-nav-container">
    <p> /home/trshpuppy</p>
    <Link to='portfolio'>
      <p>/portfolio</p>
    </Link>
      <Link to="/portfolio">
        <button>Back</button>
      </Link>
    </div>      
      <div className="section-column">
        <h1>Coding</h1>
      </div>
    </>
  )
}