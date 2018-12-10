import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {getSegments, resetSegments} from '../actions/segmentation.actions'
import SegmentCard from './SegmentCard';
import './SegmentCard.css'

class SegmentList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount(){
        console.info("----->>LLAMANDO LOS SEGMENTS")
        this.props.getSegments()
    }
    componentWillUnmount(){
        // this.props.resetSegments();
    }
    renderSegmentList(segment){
        return (
            <SegmentCard key={segment.id} segment={segment}/>
        )
    }
    render() {
        console.info(this.props);
        return (
            <div>
                <h1>
                Segment List
                </h1>
                <div className="content-cards">
                    {this.props.segments.map((segment)=>this.renderSegmentList(segment))}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.info("state in mpstp",state)
    return {
        segments: state.segments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSegments: bindActionCreators(getSegments, dispatch),
        resetSegments: bindActionCreators(resetSegments, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SegmentList);
