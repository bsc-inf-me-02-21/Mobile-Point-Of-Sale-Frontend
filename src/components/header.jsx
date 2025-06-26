import "../styles/header.css";

const Header = ({name, icon}) => {
  
  return (
    
  <div className="header-container">
    <img src={icon} alt="icon" className="header-icon" />
    <h1 className="header-title">{name}</h1>
   </div>
    )
  
}


export default Header; 



