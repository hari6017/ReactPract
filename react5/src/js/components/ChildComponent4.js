 var React=require('react');
var ReactDom=require('react-dom');
var ChildComponent3=require('./ChildComponent3.js')
var ChildComponent4=React.createClass({
childhandleclick:function(){
this.props.prop1;
},
render: function()
{
return(
<div>
<h1>Hello from child

This is footer3
</h1>
<h3>{this.props.tdata}</h3>
<button onClick={this.props.prop1}>Cilck it</button>
</div>
);
}
})

module.exports=ChildComponent4
