var React=require('react');
var Childcomponent=require('./childcomponent');
var ChildComponent2 =React.createClass({

  render:function(){
var target1=this.props.p3.map(function(i)
{
return(
<div className="list-group-item">
     <button className="btn-btn-primary success">{i.id}</button>
</div>
);
}
);
return(
<div>
{target1}
</div>
);
}



});
module.exports=ChildComponent2
