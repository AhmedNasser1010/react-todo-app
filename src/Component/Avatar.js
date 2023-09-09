const Avatar = ({ img }) => {

  return (
    {
      img ? <img className="avatar" src="../image/sully.jpg" alt="avatar" /> : <img className="avatar" src={img} alt="avatar" />
    }
  )
}

export default Avatar;

// i stop here in this component
// im lokking for how to display the default image