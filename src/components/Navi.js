import React from 'react'


class Navi extends React.Component {
	
    render() {
        const notDone =() => {alert("Sorry, still work in progress")}
        const {onAboutClick} = this.props
    	return (
    		<nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco_navbar ftco-navbar-light" id="ftco-navbar">
			    <div className="container d-flex align-items-center">
			    	<a className="navbar-brand" href="index.html">The Bot Crew</a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
					        <span className="oi oi-menu"></span> MENU
					    </button>
				    
			        <div className="collapse navbar-collapse" id="ftco-nav">
				        <ul className="navbar-nav ml-auto">
				        	<li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
				        	<li className="nav-item active"><a  href="#" onClick={onAboutClick} className="nav-link">About</a></li>
				        	<li className="nav-item active"><a href="#" onClick={notDone} className="nav-link">Porjects</a></li>
				          <li className="nav-item active"><a href="#" onClick={notDone} className="nav-link">Contact</a></li>
				        </ul>
			        </div>
			        
			    </div>
			 </nav>
    	)
	}
}

export default Navi;

