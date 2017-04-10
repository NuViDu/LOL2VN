import React from 'react';
import {Link} from 'react-router-dom';
class ScreenSahinh extends React.Component {
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
                    <h1 className="text-center">Phần sa hình</h1>
                    <div className="row">
                        <img
                            className="text-center"
                            src="http://lorempixel.com/1170/400/sports"
                            alt="Ảnh ví dụ minh họa phần sa hình"/>
                        <br/><br/><br/>
                        <div className="panel panel-success">
                            <div className="panel-rightbody">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ScreenSahinh;