import React from 'react'

function PrimaryButton({
  width=10,
  height=5,
  backgroundColor,
  color,
  border,
  borderColor,
  fontSize,
  buttonText,}) {
	return (
    	<button style={{width, height, backgroundColor, color, border, borderColor, fontSize}}>
           {buttonText}
        </button>
    )
}
  export default PrimaryButton


//   .btns {
//     margin-top: 12px;
//     background-color: #fff;
//     border-radius: 24px;
//     box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
//     cursor: pointer;
//     font-size: 14px;
//     width: auto;
//     position: absolute;
//     top: 0;
//     left: 5%;
//     transform: translate(-50%, -50%);
    
// }
