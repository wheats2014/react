import React, {Component} from 'react';

class QrCode extends Component{
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleClickQr = this.handleClickQr.bind(this);

        this.state = {
            active: false
        }
    }

    // dom存在于文档中
    componentDidMount() {
        document.body.addEventListener('click', e=>{
            console.log(e.target);
            if(e.target && e.target.matches('img')) {
                return;
            }
            this.setState({
                active: false
            });
        });
    } 

    componentWillUnmount() {
        document.body.removeEventListener('click');
    }

    handleClick() {
        this.setState({
            active: !this.state.active
        });
    }

    handleClickQr(e) {
        e.stopPropagation();
    }


    render() {
        return(
            <div className="qr-wrapper">
                <button className="qr" onClick={this.handleClick}>二维码</button>
                <div className="code" style={{display: this.state.active?'block': 'none'}} onClick={this.handleClickQr}>
                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4265900836,1888376305&fm=23&gp=0.jpg" alt="" width="200" height="200"/>
                </div>
            </div>
        );
    }
}

export default QrCode;