import React from 'react';
import {Link} from 'react-router-dom';
class ListTest extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1 className="text-center">Chọn đề thi</h1>
                    <dl className="thumbnails">
                        <dd className="col-md-4">
                            <div className="thumbnail">
                                <a href="#"><img src="http://placehold.it/320x200" alt="ALT NAME"/></a>
                                <div className="caption">
                                    <Link to='/test'>
                                        <a>
                                            <h3>Đề số 1</h3>
                                        </a>
                                    </Link>
                                    <p>Description</p>
                                    <p align="center">
                                        <Link to='/test'>
                                            <a className="btn btn-primary btn-block">Bắt đầu thi</a>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </dd>
                        <dd className="col-md-4">
                            <div className="thumbnail">
                                <a href="#"><img src="http://placehold.it/320x200" alt="ALT NAME"/></a>
                                <div className="caption">
                                   <Link to='/test'>
                                        <a>
                                            <h3>Đề số 2</h3>
                                        </a>
                                    </Link>
                                    <p>Description</p>
                                    <p align="center">
                                        <Link to='/test'>
                                            <a className="btn btn-primary btn-block">Bắt đầu thi</a>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </dd>
                        <dd className="col-md-4">
                            <div className="thumbnail">
                                <a href="#"><img src="http://placehold.it/320x200" alt="ALT NAME"/></a>
                                <div className="caption">
                                     <Link to='/test'>
                                        <a>
                                            <h3>Đề số 3</h3>
                                        </a>
                                    </Link>
                                    <p>Description</p>
                                    <p align="center">
                                        <Link to='/test'>
                                            <a className="btn btn-primary btn-block">Bắt đầu thi</a>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </dd>
                        <dd className="col-md-4">
                            <div className="thumbnail">
                                <a href="#"><img src="http://placehold.it/320x200" alt="ALT NAME"/></a>
                                <div className="caption">
                                     <Link to='/test'>
                                        <a>
                                            <h3>Đề số 4</h3>
                                        </a>
                                    </Link>
                                    <p>Description</p>
                                    <p align="center">
                                        <Link to='/test'>
                                            <a className="btn btn-primary btn-block">Bắt đầu thi</a>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </dd>
                        <dd className="col-md-4">
                            <div className="thumbnail">
                                <a href="#"><img src="http://placehold.it/320x200" alt="ALT NAME"/></a>
                                <div className="caption">
                                     <Link to='/test'>
                                        <a>
                                            <h3>Đề số 5</h3>
                                        </a>
                                    </Link>
                                    <p>Description</p>
                                    <p align="center">
                                        <Link to='/test'>
                                            <a className="btn btn-primary btn-block">Bắt đầu thi</a>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </dd>
                        <dd className="col-md-4">
                            <div className="thumbnail">
                                <a href="#"><img src="http://placehold.it/320x200" alt="ALT NAME"/></a>
                                <div className="caption">
                                     <Link to='/test'>
                                        <a>
                                            <h3>Đề số 6</h3>
                                        </a>
                                    </Link>
                                    <p>Description</p>
                                    <p align="center">
                                        <Link to='/test'>
                                            <a className="btn btn-primary btn-block">Bắt đầu thi</a>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </dd>
                    </dl>
                </div>
            </div>
        )
    }
}
export default ListTest;