import React from 'react';
import {Link} from 'react-router-dom';
class ScreenSahinh extends React.Component {
    render() {
        return (
            <div>
                <header>
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
                                    <li role="presentation">
                                        <Link to='/ontap'>
                                            <a>Tài liệu ôn tập</a>
                                        </Link>
                                    </li>
                                    <li className="active" role="presentation">
                                        <Link to='/hoso'>
                                            <a>Hồ sơ</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                <hr/>
                <hr/>
                <form className="form-horizontal">
                    <fieldset>

                        <legend className="text-center">
                            <strong>TỜ KHAI ĐĂNG KÍ HỒ SƠ THI BẰNG LÁI XE</strong>
                        </legend>
                        <div className="form-group">
                            <label className="col-md-4 control-label" for="textinput">Họ và Tên:</label>
                            <div className="col-md-4">
                                <input
                                    id="textinput"
                                    name="textinput"
                                    type="text"
                                    placeholder="Nguyễn Văn A"
                                    className="form-control input-md"
                                    required/>
                                <span className="help-block">(Ghi đầy đủ Họ tên tiếng Việt có dấu)</span>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label" for="textinput">Ngày sinh:</label>
                            <div className="col-md-4">
                                <input
                                    id="textinput"
                                    name="textinput"
                                    type="text"
                                    placeholder="dd/mm/yy"
                                    className="form-control input-md"
                                    required/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label" for="textinput">Giới tính:</label>
                            <div className="col-md-4">
                                <label className="radio-inline" for="radios-0">
                                    <input type="radio" name="radios" id="radios-0" value="1" />
                                    Nữ
                                </label>
                                <label className="radio-inline" for="radios-1">
                                    <input type="radio" name="radios" id="radios-1" value="2"/>
                                    Nam
                                </label>
                                <label className="radio-inline" for="radios-2">
                                    <input type="radio" name="radios" id="radios-2" value="3"/>
                                    Khác
                                </label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label" for="textinput">Số CMND/Hộ chiếu:</label>
                            <div className="col-md-4">
                                <input
                                    id="textinput"
                                    name="textinput"
                                    type="text"
                                    placeholder="123456789"
                                    className="form-control input-md"
                                    required/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label" for="textinput">Ngày cấp:</label>
                            <div className="col-md-4">
                                <input
                                    id="textinput"
                                    name="textinput"
                                    type="text"
                                    placeholder="dd/mm/yy"
                                    className="form-control input-md"
                                    required/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label" for="textinput">Địa chỉ:</label>
                            <div className="col-md-4">
                                <input
                                    id="textinput"
                                    name="textinput"
                                    type="text"
                                    placeholder=""
                                    className="form-control input-md"
                                    required/>

                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label" for="textinput">Điện thoại:</label>
                            <div className="col-md-4">
                                <input
                                    id="textinput"
                                    name="textinput"
                                    type="text"
                                    placeholder=""
                                    className="form-control input-md"
                                    required/>

                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label" for="textinput">Email:</label>
                            <div className="col-md-4">
                                <input
                                    id="textinput"
                                    name="textinput"
                                    type="text"
                                    placeholder=""
                                    className="form-control input-md"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label" for="selectbasic">Địa điểm thi:</label>
                            <div className="col-md-4">
                                <select id="selectbasic" name="selectbasic" className="form-control">
                                    <option value="1">Hà Nội</option>
                                    <option value="2">Đà Nẵng</option>
                                    <option value="3">Thành phố Hồ Chí Minh</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label" for="filebutton">Ảnh làm thẻ</label>
                            <div className="col-md-4">
                                <input id="filebutton" name="filebutton" className="input-file" type="file"/>
                                <span className="help-block">(Chọn ảnh chân dung trong vòng 6 tháng trở lại đây)</span>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label" for="selectbasic">Phương thức thanh toán:</label>
                            <div className="col-md-4">
                                <select id="selectbasic" name="selectbasic" className="form-control">
                                    <option value="1">Tiền mặt</option>
                                    <option value="2">Thẻ</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label" for="checkboxes"></label>
                            <div className="col-md-4">
                                <label className="checkbox-inline" for="checkboxes-0">
                                    <input type="checkbox" name="checkboxes" id="checkboxes-0" value="1"/>
                                    Tôi đồng ý với các
                                    <a href="#condition">điều khoản</a>
                                    dịch vụ
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-4 control-label" for="singlebutton"></label>
                            <div className="col-md-4">
                                <button id="singlebutton" name="singlebutton" className="btn btn-success">
                                    <Link to='/success'>
                                        <a>Đăng ký</a>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </fieldset>
                </form>

            </div>
        )
    }
}
export default ScreenSahinh;