import React from 'react';
import { Link } from 'react-router-dom';
class ScreenListOnTap extends React.Component {
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
                                    <Link to='/'><a>Thi thử trực tuyến</a></Link>
                                </li>
                                <li className="active" role="presentation">
                                    <Link to='/ontap'><a>Tài liệu ôn tập</a></Link>
                                </li>
                                <li role="presentation">
                                     <Link to='/hoso'><a>Hồ sơ</a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <hr/><hr/>
                <div className="projects-horizontal">
                    <div className="container">
                        <div className="row">
                            <legend className="text-center">TÀI LIỆU ÔN TẬP</legend>
                            <div className="col-xs-12 bg-info">
                                <div className="carousel slide" id="myCarousel">
                                    <dl className="thumbnails">
                                        <dd className="col-sm-3">
                                            <div className="fff">
                                                <div className="thumbnail">
                                                   <Link to='/sahinh'> <img src="http://sv1.upsieutoc.com/2017/04/05/anh_sa_hinh.jpg" alt=""/></Link>
                                                </div>
                                                <div className="caption">
                                                    <h4>Phần sa hình</h4>
                                                    <p>Nullam Condimentum Nibh Etiam Sem</p>
                                                    <Link to='/sahinh'> <a className="btn btn-mini">» Xem thêm</a></Link>
                                                </div>
                                            </div>
                                        </dd>
                                        <dd className="col-sm-3">
                                            <div className="fff">
                                                <div className="thumbnail">
                                                    <Link to='/bienbao'><img src="http://sv1.upsieutoc.com/2017/04/05/anh_bien_bao.png" alt=""/></Link>
                                                </div>
                                                <div className="caption">
                                                    <h4>Phần biển báo</h4>
                                                    <p>Nullam Condimentum Nibh Etiam Sem</p>
                                                    <Link to='/bienbao'> <a className="btn btn-mini">» Xem thêm</a></Link>
                                                </div>
                                            </div>
                                        </dd>
                                        <dd className="col-sm-3">
                                            <div className="fff">
                                                <div className="thumbnail">
                                                   <Link to='/lythuyet'><img src="http://sv1.upsieutoc.com/2017/04/05/anh_ly_thuyet.jpg" alt=""/></Link>
                                                </div>
                                                <div className="caption">
                                                    <h4>Phần lý thuyết</h4>
                                                    <p>Nullam Condimentum Nibh Etiam Sem</p>
                                                    <Link to='/lythuyet'> <a className="btn btn-mini">» Xem thêm</a></Link>
                                                </div>
                                            </div>
                                        </dd>
                                        <dd className="col-sm-3">
                                            <div className="fff">
                                                <div className="thumbnail">
                                                    <a href="#"><img src="http://sv1.upsieutoc.com/2017/04/05/anh_thuc_hanh.jpg" alt=""/></a>
                                                </div>
                                                <div className="caption">
                                                    <h4>Phần thực hành</h4>
                                                    <p>Nullam Condimentum Nibh Etiam Sem</p>
                                                    <a className="btn btn-mini" href="#">» Xem thêm</a>
                                                </div>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ScreenListOnTap;