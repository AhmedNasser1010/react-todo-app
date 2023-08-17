import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook } from '@fortawesome/free-solid-svg-icons';
import {
	faFacebook
} from '@fortawesome/free-brands-svg-icons'

const Awesome = ({ icon }) => {
  // return (<FontAwesomeIcon icon={icon} />)
  return (<FontAwesomeIcon icon={['fab', 'facebook-f']} />)
}

export default Awesome;