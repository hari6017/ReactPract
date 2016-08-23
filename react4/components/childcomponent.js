 var React=require('react');
// var ReactDom=require('react-dom');

var ChildComponent=React.createClass({
render: function()
{
return(
<div>
<h1>{this.props.w1}</h1>
<p>{this.props.w2}</p>
</div>
);
}
})
module.exports=ChildComponent
//ReactDom.render(<MainComponent/>,document.getElementById('app'));
