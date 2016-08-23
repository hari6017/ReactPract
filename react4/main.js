var React=require('react');
var ReactDom=require('react-dom');
var ChildComponent=require('./components/childcomponent.js');
var ChildComponent2=require('./components/ChildComponent2.js')
var ChildComponent3=require('./components/ChildComponent3.js')
var ChildComponent4=require('./components/ChildComponent4.js')
var MainComponent=React.createClass({
getInitialState:function()
{
return({stitle:"title",sdesc:"description"});
},
handleclick1:function(title,desc)
{
this.setState({stitle:title,sdesc:desc});
},

render: function()
{
return(
  <div className="container">

		         <div className="col-lg-2">

     <ChildComponent2 p1={this.handleclick}/>
	          </div>



      <div className="col-md-10">
      <ChildComponent w1={this.state.stitle} w2={this.state.sdesc}/>
      </div>
</div>
);
}
})
ReactDom.render(<MainComponent/>,document.getElementById('app'));
