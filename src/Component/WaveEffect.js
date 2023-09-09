import React from 'react';
import "../css/waveEffect.css";

// rgb
// rgb(255,255,255) X
// 255,255,255 			O
// numOfWaves is between 1 to 4
const WaveEffect = ({ rgb, numOfWaves, wavesWidth, wavesHeight, height, bgColor }) => {
  return (
    <div style={{height: `${height}`}} className="waves-parent">
	  	<svg style={{width: wavesWidth, height: wavesHeight, minHeight: wavesHeight}} className="waves" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
	  	  <defs>
	  	    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
	  	  </defs>
	  	  <g className="parallax">
	  	    	{numOfWaves > 3 && <use style={{animationDelay: "-5s", animationDuration: "24s"}} xlinkHref="#gentle-wave" x="48" y="0" fill={`rgba(${rgb},0.7)`} ></use>}
						{numOfWaves > 2 && <use style={{animationDelay: "-4s", animationDuration: "17s"}} xlinkHref="#gentle-wave" x="48" y="3" fill={`rgba(${rgb},0.5)`} ></use>}
						{numOfWaves > 1 && <use style={{animationDelay: "-3s", animationDuration: "14s"}} xlinkHref="#gentle-wave" x="48" y="5" fill={`rgba(${rgb},0.3)`} ></use>}
						{numOfWaves > 0 && <use style={{animationDelay: "-2s", animationDuration: "11s"}} xlinkHref="#gentle-wave" x="48" y="7" fill={`rgb(${rgb})`} ></use>}
	  	  </g>
	  	</svg>
		</div>
  )
}

export default WaveEffect;