var React=require('react');

var Gchild =React.createClass({

  render:function(){
return(
<div className="list-group-item">

<div className="container-fluid">
  <div className="row">
      <div className="col-lg-4">
 {this.props.mFrom}
      </div>
      <div className="col-lg-4">
    {this.props.mSubject}
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
