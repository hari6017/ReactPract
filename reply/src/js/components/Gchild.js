var React=require('react');
var Modalchild2=require('./Modalchild2')
var Gchild =React.createClass({
getInitialState:function()
{
return({status:false});
},
callModal:function()
{
this.setState({status:true});
},
  render:function(){
return(

<div className="list-group-item hari2">
     <div className="container-fluid">
          <div className="row">
                  <div className="col-lg-4">
                         {this.props.mFrom}
                  </div>
                     <div className="col-lg-4">
                         <a href="#myModal2"   data-target="#myModal2" data-toggle="modal" onClick={this.callModal}>    {this.props.mSubject}</a>
                         {this.state.status ? <Modalchild2 y1={this.props.mFrom} y2={this.props.mSubject} y3={this.props.ebc}/> : null}

                     </div>
                          <div className="col-lg-4">
                           {this.props.mDate}
                          </div>
             </div>
      </div>
  </div>

 );


}



});
module.exports=Gchild
