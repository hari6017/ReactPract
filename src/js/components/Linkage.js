var React =require('react');
var {Link} = require('react-router');


var Linkage = React.createClass({

	render : function()
	{
		return
		(
			<div>
				<div className="container-fluid">
					<ul className="nav navbar-nav">
						<li><Link to="/home">Home</Link></li>
						<li><Link to="/gmailbox">Gmail</Link></li>
						<li><Link to="/about">About us</Link></li>
					</ul>
				</div>
			</div>
		);
	}
});

module.exports=Linkage;
