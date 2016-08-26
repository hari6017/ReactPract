 var React=require('react');


var Gchild3=React.createClass({
changeevent:function()
{

  this.props.h2(this.props.h1);
},
render: function()
{

return(
<div  className="list-group-item">
<button onClick={this.changeevent}>{this.props.h3}</button>

</div>
);
}
})
module.exports=Gchild3
