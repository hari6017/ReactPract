var React=require('react');

var Gchild3=require('./Gchild3');
var Modal1=require('./Modalchild');
var Child2 =React.createClass({
getInitialState:function()
{
return({status:false});
},
 mediator:function(id){

     this.props.tempf(id);
},
change:function()
{
this.setState({status:true});

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
var hari=this.state.status?<Modal1/>:null;
return(
<div>
<div className="list-group-item hari3">
<button className="btn btn-danger btn-md" data-target="#myModal"  data-toggle="modal" onClick={this.change}>Compose</button>
{hari}
</div>
{target1}
</div>
);
}



});
module.exports=Child2
