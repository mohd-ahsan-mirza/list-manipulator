(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),s=n(8),r=n.n(s),o=(n(15),n(1)),l=n(2),u=n(4),c=n(3),d=n(5),m=(n(16),n(6)),p=n.n(m),h=function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(u.a)(this,Object(c.a)(e).call(this,t))).state={originalList:"",manipulatedList:""},n.originalListArray=[],n.manipulatedlistArray=[],n.notSelected="btn btn-info",n.isSelected="btn btn-danger",n.options=[],n.options.push({id:"1",option:'"',selected:!1,button:a.a.createElement("button",{id:"button1",key:"1",type:"button",className:n.notSelected,onClick:function(){return n.updateButtonProperties("1")}},'""')}),n.options.push({id:"2",option:"'",selected:!1,button:a.a.createElement("button",{id:"button2",key:"2",type:"button",className:n.notSelected,onClick:function(){return n.updateButtonProperties("2")}},"''")}),n.options.push({id:"3",option:",",selected:!1,button:a.a.createElement("button",{id:"button3",key:"3",type:"button",className:n.notSelected,onClick:function(){return n.updateButtonProperties("3")}},",")}),n.options.push({id:"4",option:"(",selected:!1,button:a.a.createElement("button",{id:"button4",key:"4",type:"button",className:n.notSelected,onClick:function(){return n.updateButtonProperties("4")}},"(")}),n.options.push({id:"5",option:")",selected:!1,button:a.a.createElement("button",{id:"button5",key:"5",type:"button",className:n.notSelected,onClick:function(){return n.updateButtonProperties("5")}},")")}),n.options.push({id:"6",option:"),",selected:!1,button:a.a.createElement("button",{id:"button6",key:"6",type:"button",className:n.notSelected,onClick:function(){return n.updateButtonProperties("6")}},"),")}),n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"setManipulatedList",value:function(t,e){this.manipulatedlistArray=t,this.setState({manipulatedList:e})}},{key:"addDoubleQuotesAroundListElements",value:function(){var t="",e=[];if(0!==this.options.filter(function(t){return"1"===t.id&&!0===t.selected}).length){for(var n=0;n<this.manipulatedlistArray.length;n++){var i='"'+this.manipulatedlistArray[n]+'"';e.push(i),t=t+i+"\r\n"}this.setManipulatedList(e,t)}}},{key:"addSingleQuotesAroundListElements",value:function(){var t="",e=[];if(0!==this.options.filter(function(t){return"2"===t.id&&!0===t.selected}).length){for(var n=0;n<this.manipulatedlistArray.length;n++){var i="'"+this.manipulatedlistArray[n]+"'";e.push(i),t=t+i+"\r\n"}this.setManipulatedList(e,t)}}},{key:"addCommaBetweenListElements",value:function(){var t="",e=[];if(0!==this.options.filter(function(t){return"3"===t.id&&!0===t.selected}).length){for(var n=0;n<this.manipulatedlistArray.length;n++){var i=this.manipulatedlistArray[n]+",";e.push(i),t=t+i+"\r\n"}var a=t.lastIndexOf(",");t=t.substring(0,a),this.setManipulatedList(e,t)}}},{key:"addOpenParenthesinListELements",value:function(){var t="",e=[];if(0!==this.options.filter(function(t){return"4"===t.id&&!0===t.selected}).length){for(var n=0;n<this.manipulatedlistArray.length;n++){var i="("+this.manipulatedlistArray[n];e.push(i),t=t+i+"\r\n"}this.setManipulatedList(e,t)}}},{key:"addCloseParenthesinListELements",value:function(){var t="",e=[];if(0!==this.options.filter(function(t){return"5"===t.id&&!0===t.selected}).length){for(var n=0;n<this.manipulatedlistArray.length;n++){var i=this.manipulatedlistArray[n]+")";e.push(i),t=t+i+"\r\n"}this.setManipulatedList(e,t)}}},{key:"addCloseParenthesAndCommaInListELements",value:function(){var t="",e=[];if(0!==this.options.filter(function(t){return"6"===t.id&&!0===t.selected}).length){for(var n=0;n<this.manipulatedlistArray.length;n++){var i=this.manipulatedlistArray[n]+"),";e.push(i),t=t+i+"\r\n"}this.setManipulatedList(e,t)}}},{key:"manipulateList",value:function(){this.manipulatedlistArray=this.originalListArray,this.addDoubleQuotesAroundListElements(),this.addSingleQuotesAroundListElements(),this.addCommaBetweenListElements(),this.addOpenParenthesinListELements(),this.addCloseParenthesinListELements(),this.addCloseParenthesAndCommaInListELements()}},{key:"resetManipulatedList",value:function(){this.manipulatedlistArray=[],this.setState({manipulatedList:""})}},{key:"reset",value:function(){this.originalListArray=[],this.setState({originalList:""}),this.resetManipulatedList()}},{key:"demo",value:function(){var t=Math.floor(100*Math.random()+1);this.originalListArray.push(t);var e="";0!==this.state.originalList.length&&(e=this.state.originalList+"\n"),this.setState({originalList:e+t}),0!==this.options.filter(function(t){return!0===t.selected}).length&&this.manipulateList()}},{key:"updateButtonProperties",value:function(t){var e=this.options.find(function(e){return e.id===t}),n=this.options.findIndex(function(e){return e.id===t});e.selected?(e.selected=!1,p()("#"+e.button.props.id).attr("class",this.notSelected)):(e.selected=!0,p()("#"+e.button.props.id).attr("class",this.isSelected)),this.options[n]=e,this.setState(this.options),0!==this.options.filter(function(t){return!0===t.selected}).length?this.manipulateList():this.resetManipulatedList()}},{key:"renderOption",value:function(t){return a.a.createElement("div",{className:"row mb-4"},a.a.createElement("div",{className:"col text-center"},t.button))}},{key:"renderOptions",value:function(){var t=this;return this.options.map(function(e){return t.renderOption(e)})}},{key:"updateOriginalList",value:function(t){if(t.preventDefault(),this.setState({originalList:t.target.value}),0==this.state.originalList.length){var e=t.target.value.split("\n");this.originalListArray=e}else this.originalListArray=this.state.originalList.split("\n");this.originalListArray=this.originalListArray.filter(function(t){return""!=t}),this.manipulateList()}},{key:"render",value:function(){var t=this;return a.a.createElement("form",{className:"row"},a.a.createElement("div",{className:"form-group col-lg-4 col-md-4 col-sm-12"},a.a.createElement("h4",{className:"text-center col-lg-12 col-md-12 col-sm-12"},"Original List"),a.a.createElement("textarea",{value:this.state.originalList,onChange:function(e){return t.updateOriginalList(e)},className:"form-control col-lg-12 col-md-12 col-sm-12",rows:"20"})),a.a.createElement("div",{className:"form-group col-lg-4 col-md-4 col-sm-12"},a.a.createElement("h4",{className:"text-center col-lg-12 col-md-12 col-sm-12 mb-4"},"Options"),this.renderOptions(),a.a.createElement("div",{className:"row mb-4"},a.a.createElement("div",{className:"col text-center"},a.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){return t.reset()}},"RESET"))),a.a.createElement("div",{className:"row mb-4"},a.a.createElement("div",{className:"col text-center"},a.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:function(){return t.demo()}},"DEMO")))),a.a.createElement("div",{className:"form-group col-lg-4 col-md-4 col-sm-12"},a.a.createElement("h4",{className:"text-center col-lg-12 col-md-12 col-sm-12"},"Result"),a.a.createElement("textarea",{value:this.state.manipulatedList,className:"form-control col-lg-12 col-md-12 col-sm-12",rows:"20",readOnly:!0})))}}]),e}(i.Component),f=function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(u.a)(this,Object(c.a)(e).call(this,t))).manipulator=new h,n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"container"},a.a.createElement("h2",{className:"text-center"},"Manipulate List"),a.a.createElement(h,null))}}]),e}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(17);r.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,n){t.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.cbb93734.chunk.js.map