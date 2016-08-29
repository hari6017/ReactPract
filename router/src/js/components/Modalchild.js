 var React=require('react');


var Modalchild=React.createClass({
getInitialState:function()
{
return({to:"",subject:"",message:""});
},
handlechange1:function(event)
{

this.setState({to:event.target.value});
},
handlechange2:function(event)
{

this.setState({subject:event.target.value});
},
handlechange3:function(event)
{

this.setState({message:event.target.value});
},
textstore:function()
{
      var accessToken = localStorage.getItem('gToken');
console.log("Access token: "+accessToken);
var email = '';
var Headers = {'To': this.state.to,'Subject': this.state.subject};
for(var header in Headers)
{
  email += header += ": "+Headers[header]+"\r\n";
  console.log("email---"+email);
  console.log("header---"+header);
  console.log("Headers[header]---"+Headers[header]);
 }
email += "\r\n" + this.state.message;
console.log("constructed email: " +email);
var encodedMessage =  window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_');
$.ajax({
       url: 'https://www.googleapis.com/gmail/v1/users/rhnr17%40gmail.com/messages/send?key={AIzaSyArIqYSASShl1dGwLXfhQ7fsovd8q3_87g}',
       dataType: 'json',
       contentType: "application/json",
       type: 'POST',
       data: JSON.stringify({'raw': encodedMessage}),
       beforeSend: function (request)
       {
         request.setRequestHeader("Authorization", "Bearer "+accessToken);
       },
 success: function(data)
 {
   console.log("Success");
 }.bind(this),
 async: false,
 error: function(xhr, status, err) {
   console.error("Error.."+err.toString());
 }.bind(this)
});




},
render: function()
{

return(
<div className="container">


     <div className="modal fade" id="myModal" role="dialog">
   <div className="modal-dialog">

     <div className="modal-content">
       <div className="modal-header">
         <button type="button" className="close" data-dismiss="modal">X</button>
         <h4 className="modal-title">Modal Header</h4>
       </div>

        <div className="modal-body">

              <form  className="form-horizontal">
                <div className="form-group">
                  <div className="col-lg-12">
                    <input className="form-control" id="To"   onChange={this.handlechange1} placeholder="To" type="email"/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-lg-12">
                    <input className="form-control" id="Subject"  onChange={this.handlechange2} placeholder="Subject" type="text"/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-lg-12">
                    <textarea className="form-control" id="Message"  onChange={this.handlechange3} placeholder="Message" row="20"></textarea>
                  </div>
                </div>
                   <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.textstore}>Send</button>
              </form>


       </div>
       <div className="modal-footer">
         <button type="button" className="btn btn-default" data-dismiss="modal">X</button>
       </div>
     </div>

   </div>
 </div>
 </div>
);
}
})

module.exports=Modalchild;
