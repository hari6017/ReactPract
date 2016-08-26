 var React=require('react');


var Modalchild2=React.createClass({
appendToIframe: function(message)
{
var iFrameNode = this.refs.myIframe,
frameDoc = iFrameNode.contentWindow.document;
frameDoc.write(message);
},
render: function()
{

return(
   <div className="modal fade" id="myModal2" >
   <div className="modal-dialog">

     <div className="modal-content">
       <div className="modal-header">
         <button type="button" className="close" data-dismiss="modal">close</button>
         <h4 className="modal-title">Modal Header</h4>
       </div>

        <div className="modal-body">

              <form  className="form-horizontal">
                <div className="form-group">
                  <div className="col-lg-12">
                    {this.props.y1}
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-lg-12">
                  {this.props.y2}
                  </div>
                </div>
              <iframe id="iframe-message" ref="myIframe" >
</iframe>
              </form>


       </div>
       <div className="modal-footer">
         <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
 <button type="button" className="btn btn-success" onClick={this.textstore}>Reply</button>
       </div>
     </div>

   </div>
 </div>

);
},
componentDidMount: function(){
var encodedBody = this.props.y3;

encodedBody = encodedBody.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
encodedBody = decodeURIComponent(escape(window.atob(encodedBody)));
this.appendToIframe(encodedBody);
},
})

module.exports=Modalchild2
