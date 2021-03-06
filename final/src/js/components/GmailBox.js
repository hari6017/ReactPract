
var React = require('react');
var Child2=require('./Child2')
var Child1=require('./Child1')
var loadedData = false;
var GmailBox = React.createClass({
 getInitialState: function()
   {
     return({allLabelsData:[],inboxData:[]});
   },
 gmailLogin: function()
 {
   var acToken, tokenType, expiresIn;
   var OAUTHURL    =   'https://accounts.google.com/o/oauth2/v2/auth?';
   var SCOPE       =   'https://mail.google.com/ https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/gmail.readonly';
   var CLIENTID    =   '714845489112-2gbqo9d297lnlon4t8n75li5iq920mpr.apps.googleusercontent.com';
   var REDIRECT    =   'http://localhost:8080';
   var TYPE        =   'token';
   var _url        =   OAUTHURL + 'scope=' + SCOPE + '&client_id=' + CLIENTID + '&redirect_uri=' + REDIRECT + '&response_type=' + TYPE;
   var win         =   window.open(_url, "windowname1", 'width=800, height=600');

   var pollTimer   =   window.setInterval(function()
   {

       try
       {
           if (win.document.URL.indexOf(REDIRECT) != -1)
           {
               window.clearInterval(pollTimer);
               var url =   win.document.URL;
               acToken =   gup(url, 'access_token');
               tokenType = gup(url, 'token_type');
               expiresIn = gup(url, 'expires_in');
               localStorage.setItem('gToken',acToken);
               localStorage.setItem('gTokenType',tokenType);
               localStorage.setItem('gExprireIn',expiresIn);
               function gup(url, name) {
                   name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
                   var regexS = "[\\#&]"+name+"=([^&#]*)";
                   var regex = new RegExp( regexS );
                   var results = regex.exec( url );
                   if( results == null )
                       return "";
                   else
                       return results[1];
               }
               win.close();
           }
       }
       catch(e)
       {
         console.log(e);
       }
   }, 500);
   this.allLabels();
this.getInbox1('INBOX');
 },


 allLabels: function()
 {
     var accessToken = localStorage.getItem('gToken');
     $.ajax({
      url: 'https://www.googleapis.com/gmail/v1/users/me/labels?key={AIzaSyArIqYSASShl1dGwLXfhQ7fsovd8q3_87g}',
      dataType: 'json',
      type: 'GET',
      async:false,
      beforeSend: function (request)
      {
        request.setRequestHeader("Authorization", "Bearer "+accessToken);
      },
      success: function(data)
      {
        this.setState({allLabelsData:data.labels});
        loadedData=true;
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(err.toString());
      }.bind(this)
   });

 },






   getInbox1: function(Label)
{
  var accessToken=localStorage.getItem('gToken');

$.ajax({
  url: 'https://www.googleapis.com/gmail/v1/users/rhnr17%40gmail.com/messages?labelIds='+Label+'&maxResults=10&key={AIzaSyArIqYSASShl1dGwLXfhQ7fsovd8q3_87g}',
  dataType: 'json',
  type: 'GET',
async:false,
  beforeSend: function (request)
  {
    request.setRequestHeader("Authorization", "Bearer "+accessToken);
  },
  success: function(data)
  {
var temp=[];

tmp=data.messages;

  var arr=[];
for(var i=0;i<tmp.length;i++){
arr.push(this.gmaildata(tmp[i].id));
}
this.setState({inboxData:arr});

  }.bind(this),
  error: function(xhr, status, err) {
    console.error(err.toString());
  }.bind(this)
});





},
gmaildata:function(id)
{

var accessToken = localStorage.getItem('gToken');




var message=$.ajax({
  url: 'https://www.googleapis.com/gmail/v1/users/rhnr17%40gmail.com/messages/'+id+'?key={AIzaSyArIqYSASShl1dGwLXfhQ7fsovd8q3_87g}',
  dataType: 'json',
  type: 'GET',
async:false,





    beforeSend: function (request)
    {
  request.setRequestHeader("Authorization", "Bearer "+accessToken);
    },
    success: function(data1)
    {

      // this.setState({inboxData:data});
// this.state.inboxData.push(data1);
//console.log(inboxData);
    //  loadedData=true;
    }.bind(this),
    error: function(xhr, status, err) {
      console.error(err.toString());
    }.bind(this)
 });
return message.responseJSON;

},

 render:function()
 {
   var leftPanel;
   var rightPanel;

   if(loadedData){
     leftPanel =  <Child2  p3={this.state.allLabelsData} tempf={this.getInbox1}/>
     rightPanel=  <Child1 p4={this.state.inboxData}/>
   }

     return(
       <div className="GmailBox">
           <div className="container-fluid">
             <div className="row">
                 <div className="col-lg-1">
                  <button id="authorize-button" onClick={this.gmailLogin} className="btn btn-primary pull-left">login1234</button>
                  </div>
                  <div className="col-lg-8 pull-right">
                    <h2>ReactMails5</h2>
                  </div>
              </div>
               <div className="row">
                 <div className="col-lg-2">

                    {leftPanel}

                  </div>
                 <div className="col-lg-10">
                 {rightPanel}
                 </div>
               </div>
         </div>
     </div>
     );
 }
 });

module.exports = GmailBox
