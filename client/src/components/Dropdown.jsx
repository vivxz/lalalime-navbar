import React from 'react';
import Subheaders from './Subheaders.jsx';
import Miscellaneous from './Miscellaneous.jsx';
import Activities from './Activities.jsx';

class DropdownContent extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="drop-fullscreen">
        <div className="nav-wrapper" onMouseLeave={this.props.handleMouseLeave}>
          {this.props.dropdownItems.categories && <Activities listItems={this.props.dropdownItems.categories} />}
          {this.props.dropdownItems.misc && <Miscellaneous listItems={this.props.dropdownItems.misc} />}
          <Subheaders subHeaders={this.props.dropdownItems.subHeaders} />
        </div>
      </div>
    )
  }
}

export default DropdownContent;