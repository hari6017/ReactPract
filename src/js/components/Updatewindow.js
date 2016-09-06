var React = require('react');
var Updatewindow=React.createClass({
  getInitialState:function(){
    console.log(this.props.to+"inside initial state "+this.props.subject);
    return({from:this.props.to,subject:this.props.subject,id:this.props.id});
  },
  handleFrom:function(event){
    this.setState({from:event.target.value});
  },
  handleSubject:function(event){
    this.setState({subject:event.target.value});
  },
  updateData:function(){
  console.log(this.state);

      $.ajax({
        url: '/update',
        dataType: 'json',
        type: 'PUT',
        data:this.state,
        async:false,
        success: function(response)
        {
        //   this.setState({status:response.message});
        //  console.log(response.message);
console.log("success update");

        }.bind(this),
        error: function(xhr, status, err) {
          console.error(err.toString());
        }.bind(this)
      });
    },


  render:function (){
    return(
      <div>

      <div className="modal fade" id="myUpdatemodal">
        <div className="modal-dialog" id="reply">
          <div className="modal-content">
            <div className="modal-header">
              <button className="close" data-dismiss="modal" onClick={this.props.a}>&times;</button>
              <h4 className="modal-title">Update Message</h4>
            </div>

            <div className="modal-body">

              <form  className="form-horizontal">
                <div className="form-group">
                  <div className="col-lg-12">
                    <input className="form-control" id="From" defaultValue={this.props.to}  placeholder="To" type="email"  onChange={this.handleFrom} />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-lg-12">
                    <input className="form-control" id="Subject"  defaultValue={this.props.subject} placeholder="Subject" type="text"   onChange={this.handleSubject}/>
                  </div>
                </div>
              </form>

            </div>
            <div className="modal-footer">

              <button className="btn btn-default" type="button"  onClick={this.updateData}>OK</button>
            </div>
          </div>

        </div>
      </div>
</div>
    );
  }
});
module.exports=Updatewindow
