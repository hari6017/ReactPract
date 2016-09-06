var React = require('react');
var Modalchild4 = require('./Modalchild4');
var Displayl = React.createClass({
getInitialState:function()
{
return({status:false});
},
callModal:function()
{
this.setState({status:true});
},
callModal1 : function()
{
this.setState({status:false});
},

render : function()
{
console.log("hari");
console.log(this.props.l1.msgfrmaddress);
console.log(this.props.l1.msgsubject);
console.log(this.props.l1._id);

return(
<div className="list-group-item hari2">
     <div className="container-fluid">
          <div className="row">
                  <div className="col-lg-4">
                         {this.props.l1.msgfrmaddress}
                  </div>
                     <div className="col-lg-4">
												<a href="#myModal3"   data-target="#myModal3" data-toggle="modal" onClick={this.callModal}>    {this.props.l1.msgsubject}</a>
                               {this.state.status ? <Modalchild4 y1={this.props.l1.msgfrmaddress} y2={this.props.l1.msgsubject} y3={this.props.l1.msgdate} y4={this.props.l1.msgbody} id1={this.props.l1._id} c ={this.callModal1}/> : null}
                     </div>
                          <div className="col-lg-4">
                          {this.props.l1.msgdate}
                          </div>
             </div>
      </div>
  </div>
);
}
});

module.exports = Displayl
