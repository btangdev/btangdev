import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

class AppbarBottom extends React.Component {
    constructor(props){
		super(props);
		this.state = {
			selectedIndex: 0
		}
	  
	//   this.handleClick = this.handleClick.bind(this);
      this.select = (index) => this.setState({selectedIndex: index});
	}
	
	// handleClick(index) {
    //     this.select = (index) => this.setState({selectedIndex: index});
    // }

    render() {
        return(
			<BottomNavigation selectedIndex={this.state.selectedIndex}>
				<BottomNavigationItem label="Recents" icon={recentsIcon} onClick={this.select(0)} />
				<BottomNavigationItem label="Favorites" icon={favoritesIcon} onClick={this.select(1)} />
				<BottomNavigationItem label="Nearby" icon={nearbyIcon} onClick={() => this.select(2)} />
			</BottomNavigation>
        );
    }
}

export default AppbarBottom;