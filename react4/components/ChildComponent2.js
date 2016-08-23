 var React=require('react');
// var ReactDom=require('react-dom');

var ChildComponent2=React.createClass({
 clickchange:function(event){
    console.log("Triggered by: "+event.target.value);
    if(event.target.value=='Home'){
      this.props.p1('Home','This is home');
    }
  else  if(event.target.value=='AboutUs'){
      this.props.p1('Aboutus','This is About');
    }
  else  if(event.target.value=='ContactUs'){
      this.props.p1('Contactus','This is Contact');
    }
  },

render: function()
{
return(

			<div className="btn-group btn-group-vertical btn-group-lg">

				<button className="btn btn-default" type="button" value="Home" onClick={this.clickchange}>

				</button>
				<button className="btn btn-default" type="button" value="AboutUs" onClick={this.props.clickchange}>

				</button>
				<button className="btn btn-default" type="button" value="ContactUs" onClick={this.props.clickchange}>

				</button>

			</div>

);
}
})
module.exports=ChildComponent2
//ReactDom.render(<MainComponent/>,document.getElementById('app'));
