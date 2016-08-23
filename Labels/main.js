var React=require('react');
var ReactDOM=require('react-dom');
var GmailBox=require('./components/GmailBox.js')




var example={
 "labels": [



  {
   "id": "SENT",
   "name": "SENT",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "INBOX",
   "name": "INBOX",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "TRASH",
   "name": "TRASH",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelHide",
   "type": "system"
  },

  {
   "id": "DRAFT",
   "name": "DRAFT",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "SPAM",
   "name": "SPAM",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelHide",
   "type": "system"
  },

 ]
};

var i;
var result=[];
for (i=0;i<example.labels.length;i++)
{
	if(example.labels[i].type=="system")
	{
		result.push({"id":example.labels[i].id,"name":example.labels[i].name});
	}
}







var MainComponent=React.createClass({


  render:function(){
        return(
      <div>
      <div className="row">
      <div className="col-12">
      <h1></h1>
      </div>
      </div>
      <div className="row">
      <div className="col-2">

      <GmailBox/>

       </div>
       <div className="col-8">

        </div>
       </div>
       <div className="row">
       <div className="col-12">


       </div>
       </div>
      </div>
    );
  }
});
ReactDOM.render(<MainComponent/>,document.getElementById('app'));
