import React, { Component } from "react";

class LoadingSpinner extends Component {
    render() {
        return (
            <div>
				<i className="fa fa-spinner fa-spin" /> Loading...
			</div>
        );
    }
}

export default LoadingSpinner;