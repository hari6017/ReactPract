var React=require('react');

var Childcomponent=React.createClass({
  render:function(){
    return(
<div>
    <button className="btn-btn-primary success">{this.props.p2}</button>
</div>
  );
  }
});
module.exports=Childcomponent
