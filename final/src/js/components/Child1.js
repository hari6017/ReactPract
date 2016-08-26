var React=require('react');
var Gchild=require('./Gchild');
var Child1 =React.createClass({


getHTMLPart: function(arr)
{
console.log("in html part");
 for(var x = 0; x <= arr.length; x++)
 {
   if(typeof arr[x].parts === 'undefined')
   {
     if(arr[x].mimeType === 'text/html')
     {
       return arr[x].body.data;
     }
   }
   else
   {
     return this.getHTMLPart(arr[x].parts);
   }
 }
 return '';
},






  render:function(){
var f,s,d;
var that=this;
var target1=this.props.p4.map(function(msg)
{
if(typeof msg.payload.parts === 'undefined')
 {
   encodedBody = msg.payload.body.data;
 }
 else
 {
console.log("ji");
   encodedBody = that.getHTMLPart(msg.payload.parts);
console.log(msg.payload.parts);
 }
var bodyData=msg.payload.body.data;
for (var i = 0; i < msg.payload.headers.length; i++)
{
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

 <Gchild mFrom={f} mSubject={s} mDate={d} encodedBodyToChild={encodedBody}></Gchild>


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
module.exports=Child1
