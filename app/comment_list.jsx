import React, {Component} from 'react';
import axios from 'axios';

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: null,
            value: {commentList: []}
        };
    }

    componentDidMount() {
        var _this = this;
        axios.get('./resource.json')
            .then(response=>response.data)
            .then(data=>{
                _this.setState({
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
                <div>
                    <ul className="comment-box">
                        {commentList.map((entry, index) => (
                            <li key={`response-${index}`} className="comment-item">
                                <p className="comment-item name">{entry.name}</p>
                                <p className="comment-item content">{entry.content}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

export default CommentList;