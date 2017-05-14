import React from 'react';
import {Link} from 'react-router-dom';
class ScreenLyThuyet extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top show-scroll visible">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand navbar-link" href="1.html">BLX.vn</a>
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
                                <li role="presentation">
                                    <Link to='/'>
                                        <a>Thi thử trực tuyến</a>
                                    </Link>
                                </li>
                                <li className="active" role="presentation">
                                    <Link to='/ontap'>
                                        <a>Tài liệu ôn tập</a>
                                    </Link>
                                </li>
                                <li role="presentation">
                                    <Link to='/hoso'>
                                        <a>Hồ sơ</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
              <br/><br/><br/><br/>
                <div className="container">
                    <h1 className="text-center">Phần lý thuyết</h1>
                    <div className="row">
                           
                        <br/><br/><br/>
                        <div className="panel panel-success">
                            <div className="panel-rightbody">
                          
                               
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ScreenLyThuyet;