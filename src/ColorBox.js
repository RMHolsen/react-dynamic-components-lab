import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
  // put the if/then directly in the render function
  // the control structure goes off immediately when the render function is called
      if(this.props.opacity >= 0.2) {
        return (
        // if the opacity is greater than or equal to, etc create the color box in HTML and then 
        // call the ColorBox JS again feeding a lower opacity into it
        // THIS CREATES A RECURSIVE FUNCTION. DO NOT FORGET THE BREAK CONDITION. LACK OF BREAK CONDITIONS IS BAD. 
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={this.props.opacity - 0.1} />
        </div>
        )
      } else {
        return null 
    }
  }

  // end ColorBox 
}

