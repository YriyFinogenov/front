import React from 'react';


class Submit extends React.Component {
    constructor(props) {
        super(props);
    }


    clickHandler = () => {
        this.props.validateData()
            .then((res) => {
                if (res) {
                    this.props.sendRequest()
                } else {
                    throw new Error();
                }
            })
            .catch(() => this.props.setValidationStatus());
    };

    render() {
        return (
            <div className="submitContainer" onClick={this.clickHandler}>
                Send Data
            </div>
        )
    }
}

export default Submit;