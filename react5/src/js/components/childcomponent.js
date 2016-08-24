var React=require('react');
var Gchild=require('./Gchild');
var childcomponent =React.createClass({








  render:function(){
var f,s,d;

var target1=this.props.p4.map(function(msg)
{
for (var i = 0; i < msg.payload.headers.length; i++) {
  if(msg.payload.headers[i].name=="From"){
f=msg.payload.headers[i].value;

}
if(msg.payload.headers[i].name=="Subject"){
s=msg.payload.headers[i].value;
}
if(msg.payload.headers[i].name=="Date"){
d=msg.payload.headers[i].value;
}
}
return(

<Gchild mFrom={f} mSubject={s} mDate={d}></Gchild>


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
module.exports=childcomponent
