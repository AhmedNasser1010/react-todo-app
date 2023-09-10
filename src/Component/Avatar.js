const Avatar = ({ img }) => {
  return (
    <img className="avatar" src={img ? img : "/image/sully.jpg"} alt="avatar" />
  )
}

export default Avatar;