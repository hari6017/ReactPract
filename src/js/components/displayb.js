var React = require('react');

var displayb = React.createClass({
render : function()
{
return(
<div>
	                 <button className="btn btn-success" type="submit" onClick={this.updating}>Update2</button>
	                   <button className="btn btn-success" type="submit" onClick={this.deleting}>Delete</button>
</div>
);
}
});

module.exports = displayb
