import {Shaders,Node,GLSL} from 'gl-react'
import React,{Component} from "react";

const shaders = Shaders.create({
  helloGL: {
    frag: GLSL`
precision highp float;
varying vec2 uv; // This variable vary in all pixel position (normalized from vec2(0.0,0.0) to vec2(1.0,1.0))
void main () { // This function is called FOR EACH PIXEL
  gl_FragColor = vec4(uv.x, uv.y, 0.5, 1.0); // red vary over X, green vary over Y, blue is 50%, alpha is 100%.
}
    `
  }
});

export default class HelloGl extends Component{
	render() {
		inputImageTexture = this.props.children;
		return <Node shader={shaders.helloGL} uniforms={{inputImageTexture}} />
	}
}   
;