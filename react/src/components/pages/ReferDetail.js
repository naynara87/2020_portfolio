import React from 'react';

// function ReferDetail(props) {
//     console.log(props);
//     return <span>props</span>;
// }

class ReferDetail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/reference');
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <div>
                    <span>{location.state.title}</span>
                    <span>{location.state.desc}</span>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default ReferDetail;