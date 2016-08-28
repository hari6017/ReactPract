var React=require('react');
var ReactDOM=require('react-dom');
var GmailBox=require('./components/GmailBox.js')



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
