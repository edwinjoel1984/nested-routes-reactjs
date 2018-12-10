import React, { Component } from 'react'
import './SegmentCard.css'
class SegmentCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        
        const survey = this.props.segment;
        return (
            <div className="col-xs-4 card-element">
                <div className="content-card">
                    <div className="background-survey" style={{ backgroundImage: `url(${survey.attributes.meta_image})`, backgroundSize: 'cover' }}>
                       
                    </div>
                    <p>{survey.attributes.name}</p>
                    <p>{survey.attributes.meta_image}</p>
                </div>
            </div>
        );
    }
}

export default SegmentCard;

