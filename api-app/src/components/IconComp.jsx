import React, { useState } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAddressBook, faPenToSquare, faUser } from "@fortawesome/free-regular-svg-icons";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faCloud } from "@fortawesome/free-solid-svg-icons"

export default function IconComp(props) {
  const { style } = props;

  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  }

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  }


  return (
    <ul className='icon_wrap'>
      <li>
        <FontAwesomeIcon
          icon={faAddressBook}
          style={{ 
            ...style, 
            display: "inline-block", 
            color: hoveredIcon === faAddressBook ? "tomato" : "black", 
            width: "30px", 
            height: "30px"
          }}
          onMouseEnter={()=>{handleMouseEnter(faAddressBook)}}
          onMouseLeave={handleMouseLeave}
        />
      </li>
      <li>
        <FontAwesomeIcon
          icon={faPenToSquare}
          style={{ 
            ...style, 
            display: "inline-block", 
            color: hoveredIcon === faPenToSquare ? "orange" : "black", 
            width: "30px", 
            height: "30px"
          }}
          onMouseEnter={()=>{handleMouseEnter(faPenToSquare)}}
          onMouseLeave={handleMouseLeave}
        />
      </li>
      <li>
        <FontAwesomeIcon
          icon={faUser}
          style={{ 
            ...style, 
            display: "inline-block", 
            color: hoveredIcon === faUser ? "gold" : "black", 
            width: "30px", 
            height: "30px"
          }}
          onMouseEnter={()=>{handleMouseEnter(faUser)}}
          onMouseLeave={handleMouseLeave}
        />
      </li>
      <li>
      <FontAwesomeIcon 
        icon={faInstagram}
        style={{ 
          ...style, 
          display: "inline-block", 
          color: hoveredIcon === faInstagram ? "green" : "black", 
          width: "30px", 
          height: "30px"
        }}
        onMouseEnter={()=>{handleMouseEnter(faInstagram)}}
        onMouseLeave={handleMouseLeave}
      />
      </li>
      <li>
      <FontAwesomeIcon 
        icon={faTwitter}
        style={{ 
          ...style, 
          display: "inline-block", 
          color: hoveredIcon === faTwitter ? "dodgerblue" : "black", 
          width: "30px", 
          height: "30px"
        }}
        onMouseEnter={()=>{handleMouseEnter(faTwitter)}}
        onMouseLeave={handleMouseLeave}
      />
      </li>
      <li>
        <FontAwesomeIcon
          icon={faHeart}
          style={{ 
            ...style, 
            display: "inline-block", 
            color: hoveredIcon === faHeart ? "navy" : "black", 
            width: "30px", 
            height: "30px"
          }}
          onMouseEnter={()=>{handleMouseEnter(faHeart)}}
          onMouseLeave={handleMouseLeave}
        />
      </li>
      <li>
        <FontAwesomeIcon
          icon={faCloud}
          style={{ 
            ...style, 
            display: "inline-block", 
            color: hoveredIcon === faCloud ? "purple" : "black", 
            width: "30px", 
            height: "30px"
          }}
          onMouseEnter={()=>{handleMouseEnter(faCloud)}}
          onMouseLeave={handleMouseLeave}
        />
      </li>
    </ul>
  )
}
