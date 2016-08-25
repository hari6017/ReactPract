var React=require('react');

var Gchild3=require('./Gchild3');
var Child2 =React.createClass({
 mediator:function(id){

     this.props.tempf(id);
},



  render:function(){
var target1=this.props.p3.map(function(i)
{
if(i.id=="INBOX" || i.id=="IMPORTANT" || i.id=="SENT" || i.id=="DRAFT"){

return(
<div>
     <Gchild3 h1={i.id} h2={this.mediator} h3={i.name}></Gchild3>
</div>

);
}
},this
);
return(
<div>
{target1}
</div>
);
}



});
module.exports=Child2
