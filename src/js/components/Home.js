var React=require('react');
var ReplyMail=require('./Modalchild2');
var Displayb = require('./displayb');
var Displayl = require('./displayl');
var Check=require('./Check');
var Home=React.createClass({

getInitialState:function(){
 return ({message:[]});
},




 deleting:function(){



  $.ajax({
         url: '/delete',
         dataType: 'json',
         type: 'DELETE',
       //  data: JSON.stringify({'from':this.props.mailFrom,'subject':this.props.mailsub,'body':this.props.body}),
         // beforeSend: function (request)
         // {
         //   request.setRequestHeader("Authorization", "Bearer "+accessToken);
         // },
   success: function(data)
   {
     this.setState({message:data.message});
     console.log("Success");
     alert("message sent");
   }.bind(this),

   error: function(xhr, status, err) {
     console.error("Error.."+err.toString());
   }.bind(this)
 });

 },

updating : function()
{
    $.ajax({
           url: '/update',
           dataType: 'json',
           type: 'PUT',
         //  data: JSON.stringify({'from':this.props.mailFrom,'subject':this.props.mailsub,'body':this.props.body}),
           // beforeSend: function (request)
           // {
           //   request.setRequestHeader("Authorization", "Bearer "+accessToken);
           // },
     success: function(data)
     {

       this.setState({message:data.message});
       console.log("Success");


     }.bind(this),

     error: function(xhr, status, err) {
       console.error("Error.."+err.toString());
     }.bind(this)
   });

},







 render:function(){
var target = this.state.message.map(function(i){
console.log("CHEKK",i.msgfrmaddress);
  return(
  <Displayl l1={i}/>
);

});

   return(
   <div>


{target}



    </div>
);





 },
 componentDidMount: function(){

     $.ajax({
            url: '/save',
            dataType: 'json',
            type: 'GET',
          //  data: JSON.stringify({'from':this.props.mailFrom,'subject':this.props.mailsub,'body':this.props.body}),
            // beforeSend: function (request)
            // {
            //   request.setRequestHeader("Authorization", "Bearer "+accessToken);
            // },

      success: function(data)
      {
        this.setState({message:data});
        console.log("Success HEROO",data);


      }.bind(this),

      error: function(xhr, status, err) {
        console.error("Error.."+err.toString());
      }.bind(this)
    });

},
});
module.exports=Home;
