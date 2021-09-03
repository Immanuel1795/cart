import React from 'react';
 


function Star(props) { 
  const stars = Array.from({length: props.count}, () => '🟊')

  const handleChange = (value) => {
    props.onChange(value + 1);
  }

  return (
    <div>
      {stars.map((s, index) => {
        let style = props.inactiveColor;
        if (index < props.value) {
          style=props.activeColor;
        }
        return (
          <span className={"star"}  
            key={index}
            style={{color: style, width:props.size, height:props.size, fontSize: props.size}}
            onClick={()=>handleChange(index)}>{s}</span>
        )
      })}
    </div>
  )
}

export default Star;
