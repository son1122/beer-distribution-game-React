import "./Main.css";

const Main = (props) => {
  let list = props.countryCode.map((loop,index)=>{

    return(
      <p key={index} onClick={()=>{
        props.setCountry(loop.code)
      }}>{"code "+loop.code+" : "+loop.name}</p>
    )
  })
  return (
    <div className="main-container">
      <div>
        <h1 style={{textAlign: 'center'}}>This is the homepage!</h1>
        <h3>&emsp;&emsp;&emsp;&emsp;&emsp; Beer Distribution Game is Financial Simulation Game that simulate product distribution across 
          4 player that act as Retailer Wholesale Distributor Manufactoring (Player 1 to 4 in order) to simulate and show 
          the problem in Distribution System. This Website aim to improve Beer Game with more function and plannig for user to
          gain more fun with adaptive Simulation game you can find source code <a target="_blank" href="https://github.com/son1122/beer-distribution-game-React">HERE</a>
          If you have any Suggestion or anything Please let me know.Thank you every one for your attention        
        </h3>
        <img src="https://zensimu.com/assets/static/beergame-header-visual.06976bc.0a1ff2bb7cc7457c115dd1b15a568c0c.png"/>
      </div>
      <div className="country">
        <h2>This is Country List For you to Select</h2>
        {props.country==null&&<input type="text" id="search" name="Search Country" placeholder="Search Country"></input>}
        {props.country==null&&
        <div className="country-list">
        {list}
        </div>}
        {props.country!=null&&<h2>Your country code is {props.country}</h2>}
        {props.country!=null&&<button onClick={()=>{props.setCountry(null)}} style={{width: "30%",height: "25%"}}>Press this to clear</button>}
      </div>
    </div>
  );
};

export default Main;
