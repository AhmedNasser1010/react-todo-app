import React from 'react';
import styled, { keyframes } from 'styled-components';

// rgb
// rgb(255,255,255) X
// 255,255,255 			O
// numOfWaves is between 1 to 4
const WaveEffect = ({ rgb, numOfWaves, wavesWidth, wavesHeight, height, bgColor }) => {

	const WavesParent = styled.div`
		height: ${height};
	`;

	const WaveStyles = styled.svg`
		width: ${wavesWidth};
  	height: ${wavesHeight};
    min-height: ${wavesHeight};
	`;

	const moveForever = keyframes`
  	0% {
  	  transform: translate3d(-90px, 0, 0);
  	}
  	100% {
  	  transform: translate3d(85px, 0, 0);
  	}
  `;

	const AnimatedWave = styled.use` 
  	animation: ${moveForever} 25s cubic-bezier(.55, .5, .45, .5) infinite;

  	&:nth-child(1) {
  		animation-delay: -2s;
  		animation-duration: 11s;
  	}

  	&:nth-child(2) {
  		animation-delay: -3s;
  		animation-duration: 14s;
  	}

   	&:nth-child(3) {
   		animation-delay: -4s;
  		animation-duration: 17s;
   	}

   	&:nth-child(4) {
   		animation-delay: -5s;
  		animation-duration: 24s;
		}
  `;

  return (
    <WavesParent className="waves-parent">
	  	<WaveStyles className="waves" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
	  	  <defs>
	  	    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
	  	  </defs>
	  	  <g className="parallax">
	  	    	{numOfWaves > 3 && <AnimatedWave xlinkHref="#gentle-wave" x="48" y="0" fill={`rgba(${rgb},0.7)`} ></AnimatedWave>}
						{numOfWaves > 2 && <AnimatedWave xlinkHref="#gentle-wave" x="48" y="3" fill={`rgba(${rgb},0.5)`} ></AnimatedWave>}
						{numOfWaves > 1 && <AnimatedWave xlinkHref="#gentle-wave" x="48" y="5" fill={`rgba(${rgb},0.3)`} ></AnimatedWave>}
						{numOfWaves > 0 && <AnimatedWave xlinkHref="#gentle-wave" x="48" y="7" fill={`rgb(${rgb})`} ></AnimatedWave>}
	  	  </g>
	  	</WaveStyles>
		</WavesParent>
  )
}

export default WaveEffect;