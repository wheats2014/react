import React, {Component} from 'react';
import axios from 'axios';
import CommentList from './comment_list1.jsx';

export default class CommentListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            error: null,
            value: null
        }
    }

    componentDidMount() {
        var _this = this;
        axios.get('./resource.json')
            .then(response=>response.data)
            .then(data=>{
                _this.setState({
                    loading:false,
                    value: data
                })
            })
            .catch(function (error) {
                _this.setState({loading: false, error});
            });
    }

    render() {
        if (this.state.loading) {
            return <span>Loading...</span>
        } else if (this.state.error != null) {
            return <span>Error: {this.state.error}</span>
        } else {
            const {commentList} = this.state.value;

            return (
                <CommentList comments = {commentList}/>
            );
        }
    }
}