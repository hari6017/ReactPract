var React=require('react');

var Check=React.createClass({
	render:function(){
console.log("ACC");
return(
<div>
{this.props.ac}
</div>
);
}

});


module.exports=Check;
