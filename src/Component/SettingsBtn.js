import { Link } from "react-router-dom";

const SettingsBtn = (props) => {
  return (
    <Link to="/settings"><i className="fa-solid fa-gear"></i></Link>
  )
}

export default SettingsBtn;