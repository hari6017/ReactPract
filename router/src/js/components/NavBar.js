var React=require('react');

var {Link}=require('react-router');
var NavLink=require('./NavLink');
var NavBar=React.createClass({
  render:function(){
    return(

<div className="container-fluid">
  <ul className="nav navbar-nav">
    <li><NavLink to="/home">Home12</NavLink></li>
    <li><NavLink to="/gmailbox">GmailBox</NavLink></li>
    <li><NavLink to="/about/React">About react</NavLink></li>
<li><NavLink to="/about/Router">About router</NavLink></li>
  </ul>
</div>
  );
  }
});
module.exports=NavBar
