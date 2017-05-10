import React form 'react';
import {Link} from 'react-router-dom';
class PhanBienBao extends React.Component {
    render(){
		return(
			<div>
				<header>
					<nav className="navbar navbar-default navbar-fixed-top show-scroll visible">
						<div className="container">
							<div className="navbar-header">
								<a className="navbar-brand navbar-link" href="#">BLX.vn</a>
								<button className="navbar-toggle collapsed" data-target="#navcol-1" data-toggle="collapse">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
							</div>
							<div id="navcol-1" className="collapse navbar-collapse">
								<ul className="nav navbar-nav">
									<li role="presentation">
										<Link to ='/'>
							    			<a>Thi thử trực tuyến</a>
										</Link>
									</li>
									<li className="active" role="presentation">
										<Link to = '/ontap'>
											<a>Tài liệu ôn tập</a>
										</Link>
									</li>
									<li role="presentation">
										<Link to = '/hoso'>
											<a>Hồ sơ</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</header>
				<br><br><br><br>
				<div className="container">
					<h1 className="text-center">Phần biển báo</h1>
					<div className="row">
					<br><br><br>
						<div className="panel panel-success">
							<div className="panel-rightbody">
								<h2 style="text-align: justify;"><span style="color: #000000;">B. Mẹo thi phần biển báo</span></h2>
								<p>
									<span style="color: #000000;">Phần biển báo bạn buộc phải nhớ <a style="color: #000000;" href="http://thibanglaixehn.com/cac-bien-bao-giao-thong/">tên và ý nghĩa của từng biển báo</a> thì mới làm được vì đây là phần rất dễ nhầm lẫn. Tuy nhiên bạn cần chú ý một vài quy tắc sau đây:</span>
								</p>
								<ul style="text-align: justify;">
									<li>
										<span style="color: #000000;">Chú ý phân biệt 3 biển báo sau:</span>
									</li>
								</ul>
								<div id="attachment_440" style="width: 484px" className="wp-caption aligncenter">
									<img className="wp-image-440 size-full" 
										 src="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-hoc-ly-thuyet-lai-xe3.jpg" 
										 alt="Mẹo thi phần biển báo" 
										 width="474" height="346" 
										 srcset="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-hoc-ly-thuyet-lai-xe3.jpg 474w, http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-hoc-ly-thuyet-lai-xe3-300x219.jpg 300w" 
										 sizes="(max-width: 474px) 100vw, 474px" />
									<p className="wp-caption-text">Mẹo thi phần biển báo</p>
								</div>
								<p style="text-align: justify;">
									<span style="color: #000000;">Biển 1: Có tên là <strong>&#8220;Giao nhau v</strong><strong>ớ</strong><strong>i </strong><strong>đ</strong><strong>ườ</strong><strong>ng kh</strong><strong>ô</strong><strong>ng </strong><strong>ư</strong><strong>u ti</strong><strong>ê</strong><strong>n&#8221;</strong>, nghĩa là mình đang đi trên đường lớn (ưu tiên) mà gặp đường bé (ko ưu tiên) cắt ngang qua. <strong>G</strong><strong>ặ</strong><strong>p bi</strong><strong>ể</strong><strong>n n</strong><strong>à</strong><strong>y m</strong><strong>ì</strong><strong>nh </strong><strong>đ</strong><strong>ượ</strong><strong>c quy</strong><strong>ề</strong><strong>n qua n</strong><strong>ơ</strong><strong>i giao nhau(được đi trước).</strong></span>
								</p>
								<p style="text-align: justify;">
									<span style="color: #000000;">Biển 2: Có tên là <strong>&#8220;Giao nhau v</strong><strong>ớ</strong><strong>i </strong><strong>đ</strong><strong>ườ</strong><strong>ng </strong><strong>ư</strong><strong>u ti</strong><strong>ê</strong><strong>n&#8221;</strong>, biển này ngược lại với biển 1, nghĩa là mình đang đi trên đường bé (ko ưu tiên) gặp đường lớn cắt ngang qua (đường ưu tiên). <strong>G</strong><strong>ặ</strong><strong>p bi</strong><strong>ể</strong><strong>n n</strong><strong>à</strong><strong>y m</strong><strong>ì</strong><strong>nh ph</strong><strong>ả</strong><strong>i d</strong><strong>ừ</strong><strong>ng l</strong><strong>ạ</strong><strong>i nh</strong><strong>ườ</strong><strong>ng </strong><strong>đ</strong><strong>ườ</strong><strong>ng.</strong></span>
								</p>
								<p style="text-align: justify;">
									<span style="color: #000000;">Biển 3: Có tên là <strong>&#8220;Bắt đầu đoạn đường ưu tiên&#8221;</strong>, gặp biển này người đang đi trên đường được quyền đi trước.</span>
								</p>
								<p style="text-align: justify;">
									<span style="color: #000000;"><strong>Lưu ý tên và ý nghĩa của 3 biển tiếp theo:</strong></span>
								</p>
								<p style="text-align: justify;">
									<img className="aligncenter wp-image-1612" 
										 src="http://thibanglaixehn.com/wp-content/uploads/2016/05/bien-bao-cam-nguoi-di-bo.jpg" 
										 alt="Biển báo cấm người đi bộ" 
										 width="480" height="305" 
										 srcset="http://thibanglaixehn.com/wp-content/uploads/2016/05/bien-bao-cam-nguoi-di-bo.jpg 790w, http://thibanglaixehn.com/wp-content/uploads/2016/05/bien-bao-cam-nguoi-di-bo-300x191.jpg 300w" 
										 sizes="(max-width: 480px) 100vw, 480px" />
								</p>
								<ol>
									<li style="text-align: justify;">
										<span style="color: #000000;">Biển số 1 có tên là <strong>&#8220;Nhường đường cho người đi bộ&#8221;</strong>, Gặp biển này các phương tiện chú ý quan sát và nhường đường cho người đi bộ.</span>
									</li>
									<li style="text-align: justify;">
										<span style="color: #000000;">Biển số 2 có tên là &#8220;cấm người đi bộ&#8221;. Gặp biển này người đi bộ không được phép đi vào.</span>
									</li>
									<li style="text-align: justify;">
										<span style="color: #000000;">Biển số 3 có tên là &#8220;Chỉ dành cho người đi bộ&#8221;, gặp biển này các loại phương tiện khác không được phép đi vào.</span>
									</li>
								</ol>
								<p>
									<span style="color: #000000;"><strong>Lưu ý:</strong> Câu hỏi này thường dễ bị nhầm ở chỗ &#8220;<strong>Biển số 2 nhưng đáp án lại là 3</strong>&#8220;. Mong các bạn hết sức lưu ý.</span>
								</p>
								<p>
									<strong><span style="color: #000000;">Lưu ý tiếp tên và ý nghĩa của 3 biển sau:</span></strong>
								</p>
								<p>
									<span style="color: #000000;">
										<img className="aligncenter wp-image-1616" 
											 src="http://thibanglaixehn.com/wp-content/uploads/2016/05/bien-bao-duong-hai-chieu.jpg" 
											 alt="biển báo đường hai chiều" 
											 width="494" height="314" 
											 srcset="http://thibanglaixehn.com/wp-content/uploads/2016/05/bien-bao-duong-hai-chieu.jpg 789w, http://thibanglaixehn.com/wp-content/uploads/2016/05/bien-bao-duong-hai-chieu-300x190.jpg 300w" 
											 sizes="(max-width: 494px) 100vw, 494px" />
									</span>
								</p>
								<ol>
									<li>							
										<span style="color: #000000;">Biển 1 có tên là &#8220;Biển báo hiệu đường 2 chiều&#8221;.</span>
									</li>
									<li>
										<span style="color: #000000;">Biển 2 có tên là &#8220;Nhường đường cho xe cơ giới đi ngược chiều qua đường hẹp&#8221;.</span>
									</li>
									<li>
										<span style="color: #000000;">Biển 3 có tên là &#8220;Ưu tiên qua đường hẹp&#8221;.</span>
									</li>
								</ol>
								<p>
									<span style="color: #000000;">Câu hỏi &#8220;<strong>Biển nào báo hiệu nguy hiểm giao nhau với đường sắt?</strong>&#8220;. Câu này rất nhiều bạn chọn đáp án là biển 1 và 2. Đáp án phải là biển 1 và 3.</span>
								</p>
								<p>
									<img className="aligncenter wp-image-1613" 
										 src="http://thibanglaixehn.com/wp-content/uploads/2016/05/bien-bao-giao-nhau-voi-duong-sat.jpg" 
										 alt="Biển báo giao nhau với đường sắt" 
										 width="492" height="312" 
										 srcset="http://thibanglaixehn.com/wp-content/uploads/2016/05/bien-bao-giao-nhau-voi-duong-sat.jpg 790w, http://thibanglaixehn.com/wp-content/uploads/2016/05/bien-bao-giao-nhau-voi-duong-sat-300x191.jpg 300w" 
										 sizes="(max-width: 492px) 100vw, 492px" />
								</p>
								<p>
									<span style="color: #000000;">Câu hỏi:<strong> &#8220;Biển nào báo hiệu &#8220;Đường giao nhau&#8221; của các tuyến đường cùng cấp?&#8221;. </strong>Biển nào có dấu cộng là biểu thị tuyến đường cùng cấp với nhau. 
										<img className="aligncenter wp-image-1614" 
											 src="http://thibanglaixehn.com/wp-content/uploads/2016/05/bien-cac-tuyen-duong-cung-cap.jpg" 
											 alt="Biển các tuyến đường cùng cấp" width="493" height="312" 
											 srcset="http://thibanglaixehn.com/wp-content/uploads/2016/05/bien-cac-tuyen-duong-cung-cap.jpg 788w, http://thibanglaixehn.com/wp-content/uploads/2016/05/bien-cac-tuyen-duong-cung-cap-300x190.jpg 300w" 
											 sizes="(max-width: 493px) 100vw, 493px" />
									</span>
								</p>
								<p>
									<span style="color: #000000;">Câu hỏi: <strong>&#8220;Biển nào báo hiệu cấm xe mô tô ba bánh đi vào?&#8221;</strong>. </span>
								</p>
								<p>
									<span style="color: #000000;"><strong>Lưu ý câu này:</strong> Mẹo cho dễ nhớ là <strong>&#8220;cấm xe con thì cấm luôn cả 3 bánh&#8221;. </strong>Cấm xe mô tô 3 bánh thì đương nhiên cũng cấm luôn cả xe mô tô 2 bánh.</span>
								</p>
								<p>
									<img className="aligncenter wp-image-1618" 
										 src="http://thibanglaixehn.com/wp-content/uploads/2016/05/bien-cam-xe-moto-3-banh.jpg" 
										 alt="biển cấm xe moto 3 bánh" 
										 width="496" height="317" 
										 srcset="http://thibanglaixehn.com/wp-content/uploads/2016/05/bien-cam-xe-moto-3-banh.jpg 789w, http://thibanglaixehn.com/wp-content/uploads/2016/05/bien-cam-xe-moto-3-banh-300x192.jpg 300w" 
										 sizes="(max-width: 496px) 100vw, 496px" />
								</p>
								<p>
									<span style="color: #000000;">Câu hỏi &#8220;Khi gặp biển nào thì xe mô tô 2 bánh được đi vào?&#8221;</span>
								</p>
								<p>
									<img className="aligncenter wp-image-1619" 
										 src="http://thibanglaixehn.com/wp-content/uploads/2016/05/bien-cam-xe-mo-to-2-banh.jpg" 
										 alt="biển cấm xe mô tô 2 bánh" 
										 width="503" height="318" 
										 srcset="http://thibanglaixehn.com/wp-content/uploads/2016/05/bien-cam-xe-mo-to-2-banh.jpg 790w, http://thibanglaixehn.com/wp-content/uploads/2016/05/bien-cam-xe-mo-to-2-banh-300x189.jpg 300w" sizes="(max-width: 503px) 100vw, 503px" />
								</p>
								<p>
									<span style="color: #000000;">Chỉ có biển 1 cấm xe mô tô 2 bánh, 2 biển còn lại không cấm nên vẫn được phép đi vào.</span>
								</p>
								<p>
									<span style="color: #000000;">Câu hỏi: <strong>&#8220;Biển nào xe mô tô hai bánh được đi vào?&#8221; </strong></span>
								</p>
								<p>
									<span style="color: #000000;"><strong>
										<img className="aligncenter wp-image-1620" 
											 src="http://thibanglaixehn.com/wp-content/uploads/2016/05/bien-nao-xe-mo-to-2-banh-duoc-di-vao.jpg" 
											 alt="biển nào xe mô tô 2 bánh được phép đi vào" 
											 width="503" height="321" 
											 srcset="http://thibanglaixehn.com/wp-content/uploads/2016/05/bien-nao-xe-mo-to-2-banh-duoc-di-vao.jpg 789w, http://thibanglaixehn.com/wp-content/uploads/2016/05/bien-nao-xe-mo-to-2-banh-duoc-di-vao-300x191.jpg 300w" 
											 sizes="(max-width: 503px) 100vw, 503px" /></strong>
									</span>
								</p>
								<p>
									<span style="color: #000000;">Biển loại này ý nghĩa của nó là <strong>&#8220;Cấm các loại xe ở biển phụ đi vào&#8221;</strong>.</span>
								</p>
								<p>
									<span style="color: #000000;">Câu hỏi: <strong>&#8220;Biển nào báo hiệu cầu vượt liên thông?&#8221;</strong></span>
								</p>
								<p> 
									<img className="aligncenter wp-image-1621" 
										 src="http://thibanglaixehn.com/wp-content/uploads/2016/05/bien-bao-cau-vuot-lien-thong.jpg" 
										 alt="biển báo cầu vượt liên thông" 
										 width="503" height="319" 
										 srcset="http://thibanglaixehn.com/wp-content/uploads/2016/05/bien-bao-cau-vuot-lien-thong.jpg 789w, http://thibanglaixehn.com/wp-content/uploads/2016/05/bien-bao-cau-vuot-lien-thong-300x190.jpg 300w" 
										 sizes="(max-width: 503px) 100vw, 503px" />
								</p>
								<p>	
									<span style="color: #000000;">Câu này chọn 2 cái biển giống nhau.</span>
								</p>
								<p>
									<span style="color: #000000;">Câu hỏi: <strong>&#8220;Biển nào báo hiệu tuyến đường cầu vượt cắt qua?&#8221; </strong></span>
								</p>
								<p>
									<span style="color: #000000;">Câu này tương tự câu trên, chọn 2 biển giống nhau.</span>
								</p>
								<p>
									<img className="aligncenter wp-image-1623" 
										 src="http://thibanglaixehn.com/wp-content/uploads/2016/05/bien-bao-cau-vuot-cat-qua.jpg" 
										 alt="biển báo cầu vượt cắt qua" 
										 width="501" height="319" 
										 srcset="http://thibanglaixehn.com/wp-content/uploads/2016/05/bien-bao-cau-vuot-cat-qua.jpg 790w, http://thibanglaixehn.com/wp-content/uploads/2016/05/bien-bao-cau-vuot-cat-qua-300x191.jpg 300w" 
										 sizes="(max-width: 501px) 100vw, 501px" />
								</p>
								<p>
									<span style="color: #000000;">Câu hỏi: <strong>&#8220;Biển nào báo hiệu đoạn đường hay xảy ra tai nạn?&#8221; </strong></span>
								</p>
								<p>
									<img className="aligncenter wp-image-1622" 
										 src="http://thibanglaixehn.com/wp-content/uploads/2016/05/bien-bao-doan-duong-hay-xay-ra-tai-nan.jpg" 
										 alt="biển báo đoạn đường hay xảy ra tai nạn" 
										 width="500" height="320" 
										 srcset="http://thibanglaixehn.com/wp-content/uploads/2016/05/bien-bao-doan-duong-hay-xay-ra-tai-nan.jpg 790w, http://thibanglaixehn.com/wp-content/uploads/2016/05/bien-bao-doan-duong-hay-xay-ra-tai-nan-300x192.jpg 300w" 
										 sizes="(max-width: 500px) 100vw, 500px" />
								</p>
								<p>
									<span style="color: #000000;">Câu này rất dễ làm sai, thường nhiều bạn hay chọn đáp án 3, biển 2 và 3. Biển 3 báo hiệu đoạn đường gồ ghề.</span>
								</p>
								<p>
									<span style="color: #000000;">Câu hỏi: <strong>&#8220;Biển nào chỉ dẫn tên đường trên các tuyến đường đối ngoại?&#8221;</strong></span>
								</p>
								<p>
									<span style="color: #000000;">
										<img className="aligncenter wp-image-1624" 
											 src="http://thibanglaixehn.com/wp-content/uploads/2016/05/bien-chi-dan-ten-duong-tren-cac-tuyen-duong-doi-ngoai.jpg" 
											 alt="biển chỉ dẫn tên đường trên các tuyến đường đối ngoại" 
											 width="494" height="316" 
											 srcset="http://thibanglaixehn.com/wp-content/uploads/2016/05/bien-chi-dan-ten-duong-tren-cac-tuyen-duong-doi-ngoai.jpg 789w, http://thibanglaixehn.com/wp-content/uploads/2016/05/bien-chi-dan-ten-duong-tren-cac-tuyen-duong-doi-ngoai-300x192.jpg 300w" 
											 sizes="(max-width: 494px) 100vw, 494px" />
									</span>
								</p>
								<p>Câu này chọn <strong>Biển AH112</strong></p>
								<p>
									<strong><span style="color: #000000;">Hỏi về biển nào được quay đầu xe, biển nào được rẽ trái?</span></strong>
								</p>
								<p style="text-align: justify;">
									<span style="color: #000000;">Nhớ quy tắc sau: <strong>&#8220;C</strong><strong>ấ</strong><strong>m r</strong><strong>ẽ</strong><strong> tr</strong><strong>á</strong><strong>i thì c</strong><strong>ấ</strong><strong>m lu</strong><strong>ô</strong><strong>n c</strong><strong>ả</strong><strong> quay </strong><strong>đ</strong><strong>ầ</strong><strong>u xe&#8221;</strong>; Nhưng <strong>&#8220;C</strong><strong>ấ</strong><strong>m quay </strong><strong>đ</strong><strong>ầ</strong><strong>u xe thì v</strong><strong>ẫ</strong><strong>n </strong><strong>đ</strong><strong>ượ</strong><strong>c r</strong><strong>ẽ</strong><strong> tr</strong><strong>á</strong><strong>i&#8221;</strong></span>
								</p>
								<div id="attachment_441" style="width: 505px" className="wp-caption aligncenter">
									<img className=" wp-image-441" 
										 src="http://thibanglaixehn.com/wp-content/uploads/2015/12/de-thi-bang-lai-xe-may2.jpg" 
										 alt="Đề thi bằng lái xe máy" 
										 width="495" height="359" 
										 srcset="http://thibanglaixehn.com/wp-content/uploads/2015/12/de-thi-bang-lai-xe-may2.jpg 476w, http://thibanglaixehn.com/wp-content/uploads/2015/12/de-thi-bang-lai-xe-may2-300x217.jpg 300w" 
										 sizes="(max-width: 495px) 100vw, 495px" />
									<p className="wp-caption-text"><span style="color: #000000;">Đề thi bằng lái xe máy</span></p>
								</div>
								<h4 style="text-align: center;"><span style="color: #000000;"><span style="text-decoration: underline;"><em>Lưu ý: </em></span>Trong bộ đề thi chỉ có duy nhất câu này có 2 đáp án ở phần biển báo</span></h4>
								<div id="attachment_443" style="width: 510px" class="wp-caption aligncenter">
									<img className=" wp-image-443" 
										 src="http://thibanglaixehn.com/wp-content/uploads/2015/12/ly-thuyet-thi-bang-lai-xe-may2.jpg" 
										 alt="Lý thuyết thi bằng lái xe máy" 
										 width="500" height="363" 
										 srcset="http://thibanglaixehn.com/wp-content/uploads/2015/12/ly-thuyet-thi-bang-lai-xe-may2.jpg 474w, http://thibanglaixehn.com/wp-content/uploads/2015/12/ly-thuyet-thi-bang-lai-xe-may2-300x218.jpg 300w" 
										 sizes="(max-width: 500px) 100vw, 500px" />
									<p className="wp-caption-text"><span style="color: #000000;">Lý thuyết thi bằng lái xe máy</span></p>
								</div>
								<p style="text-align: center;">
									<span style="color: #000000;">Cảm ơn các bạn đã theo dõi.<b>&nbsp;</b>Chúc các bạn ôn và thi tốt!!!</span>
								</p>
							</div>
							<div class="clearfix">
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

