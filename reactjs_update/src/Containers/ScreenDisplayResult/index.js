import React from 'react';
import {Link} from 'react-router-dom';
class ScreenDisplayResult extends React.Component {

    render() {
        console.log(this.props.match.params.id);
        return (
            <div>
                <header>
                    <nav className="navbar navbar-default navbar-fixed-top show-scroll visible">
                        <div className="container">
                            <div className="navbar-header">
                                <a className="navbar-brand navbar-link" href="#">BLX.vn</a>
                                <button
                                    className="navbar-toggle collapsed"
                                    data-target="#navcol-1"
                                    data-toggle="collapse">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>
                            <div id="navcol-1" className="collapse navbar-collapse">
                                <ul className="nav navbar-nav">
                                    <li className="active" role="presentation">
                                        <a href="#Test">Thi thử trực tuyến</a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#Docs">Tài liệu ôn tập</a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#Signup">Hồ sơ</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="container">
                    <div className="row text-center">
                        <div className="panel panel-success panel-pricing">
                            <div className="panel-heading">
                                <i className="fa fa-desktop"></i>
                                <h2>KẾT QUẢ THI THỬ</h2>
                            </div>
                            <div className="panel-body text-center">
                                <p>
                                    <strong>{`${this.props.match.params.id}/20`}</strong>
                                </p>
                            </div>

                            <div className="panel-footer">
                                <Link to='/'>
                                <a className="btn btn-lg btn-block btn-success">
                                    <span className="glyphicon glyphicon-hand-left"></span>
                                    Quay lại trang chủ</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ScreenDisplayResult;