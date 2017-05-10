import React form 'react';
import {Link} from 'react-router-dom';
class PhanSaHinh extends React.Component {
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
					<h1 className="text-center">Phần sa hình</h1>
					<div className="row">
						<br><br><br>
						<div className="panel panel-success">
							<div className="panel-rightbody">
								</pre><h2 style="text-align: justify;">C. Mẹo thi phần sa hình</h2>
								<p style="text-align: justify;">
									<span style="color: #000000;">Xét theo quy tắc từ trước đến sau: 
										<strong>Nhất lộ -&gt; Nhị ưu -&gt; Tam đường -&gt; Tứ hướng</strong>
									</span>
								</p>
								<ul style="text-align: justify;">
									<li>
										<span style="color: #000000;">
											<span style="color: #000000;">
												<strong>Nhất lộ: Xe nào vào giao lộ trước được quyền đi trước</strong>
											</span>
										</span>
										<div id="attachment_445" style="width: 484px" class="wp-caption aligncenter">
											<img className="wp-image-445 size-full no-display appear"
											 	 src="./Mẹo thi phần sa hình bằng lái xe máy hạng A1 hay nhất_files/thi-ly-thuyet-lai-xe-a11.jpg"
											 	 alt="Mẹo thi phần sa hình bằng lái xe máy hạng A1" width="474" height="344" 												 	 srcset="http://thibanglaixehn.com/wp-content/uploads/2015/12/thi-ly-thuyet-lai-xe-a11.jpg 474w, http://thibanglaixehn.com/wp-content/uploads/2015/12/thi-ly-thuyet-lai-xe-a11-300x218.jpg 300w" 
												  sizes="(max-width: 474px) 100vw, 474px">
											<p className="wp-caption-text"> Mẹo thi phần sa hình bằng lái xe máy hạng A1</p>
										</div>
									</li>
								</ul>
								<ul style="text-align: justify;">
									<li>
										<span style="color: #000000;">
											<span style="color: #000000;">
												<strong>Nhị ưu: Xe ưu tiên được quyền đi trước (Quân sự, Công an; Cứu hỏa; Cứu thương).</strong>
											</span>
										</span>
										<div id = "attachment_446" style="width: 484px" class="wp-caption aligncenter">
											<img className="size-full wp-image-446 no-display appear" 
												 src="./Mẹo thi phần sa hình bằng lái xe máy hạng A1 hay nhất_files/de-thi-bang-lai-xe-may11.jpg" 
												 alt="Đề thi bằng lái xe máy" width="474" height="345" 
												 srcset="http://thibanglaixehn.com/wp-content/uploads/2015/12/de-thi-bang-lai-xe-may11.jpg 474w, http://thibanglaixehn.com/wp-content/uploads/2015/12/de-thi-bang-lai-xe-may11-300x218.jpg 300w" 
												 sizes="(max-width: 474px) 100vw, 474px">
											<p className="wp-caption-text">Đề thi bằng lái xe máy</p>
										</div>
									</li>
								</ul>
								<ul style="text-align: justify;">
									<li>
										<span style="color: #000000;">
											<span style="color: #000000;">
												<strong>Tam đường: Xe trên đường ưu tiên được quyền đi trước</strong>
											</span>
										</span>
										<div id = "attachment_447" style="width: 483px" class="wp-caption aligncenter">
											<img className = "size-full wp-image-447 no-display appear" 
											     src="./Mẹo thi phần sa hình bằng lái xe máy hạng A1 hay nhất_files/150-cau-hoi-thi-bang-lai-xe1.jpg" 
												 alt="150 câu hỏi thi bằng lái xe" width="473" height="342" 
												 srcset="http://thibanglaixehn.com/wp-content/uploads/2015/12/150-cau-hoi-thi-bang-lai-xe1.jpg 473w, http://thibanglaixehn.com/wp-content/uploads/2015/12/150-cau-hoi-thi-bang-lai-xe1-300x217.jpg 300w" 
												 sizes="(max-width: 473px) 100vw, 473px">
											<p className="wp-caption-text">150 câu hỏi thi bằng lái xe</p>
										</div>
									</li>
								</ul>
								<ul style="text-align: justify;">
									<li>
										<span style="color: #000000;">
											<span style="color: #000000;">
												<strong>Tứ hướng: Rẽ phải, Đi thẳng, Rẽ trái</strong>
											</span>
										</span>
										<div id="attachment_449" style="width: 486px" class="wp-caption aligncenter">
											<img className="wp-image-449 size-full no-display appear"
											 	src="./Mẹo thi phần sa hình bằng lái xe máy hạng A1 hay nhất_files/hoc-ly-thuyet-lai-xe-may11.jpg" 
											 	alt="Lưu ý: Bên trái xe lam có khoảng trống nên xe mô tô được phép rẽ phải trước. Xe Tải và xe lam cùng hướng đi nên sẽ phải nhường cho xe mô tô"
											 	width="476" 
												height="346" 
												srcset="http://thibanglaixehn.com/wp-content/uploads/2015/12/hoc-ly-thuyet-lai-xe-may11.jpg 476w, http://thibanglaixehn.com/wp-content/uploads/2015/12/hoc-ly-thuyet-lai-xe-may11-300x218.jpg 300w" 
											 	sizes="(max-width: 476px) 100vw, 476px">
											<p className="wp-caption-text">
												<span style="color: #000000;">
													<strong>Lưu ý: Bên trái xe lam có khoảng trống nên xe mô tô được phép rẽ phải trước. Xe Tải và xe lam cùng hướng đi nên sẽ phải nhường cho xe mô tô</strong>
												</span>
											</p>
										</div>
										<p>&nbsp;</p>
									</li>
								</ul>
								<p style="text-align: justify;">
									<span style="color: #000000;">Câu hỏi:
										 <strong>“Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?”</strong>
									</span>
								</p>
								<p style="text-align: justify;">
									<img className="aligncenter wp-image-1628 no-display appear" 
										 src="./Mẹo thi phần sa hình bằng lái xe máy hạng A1 hay nhất_files/giai-sa-hinh-bang-lai-xe-may.jpg" 
										 alt="sa hình bằng lái xe máy" 
										 width="487" height="309" 
										 srcset="http://thibanglaixehn.com/wp-content/uploads/2016/05/giai-sa-hinh-bang-lai-xe-may.jpg 789w, http://thibanglaixehn.com/wp-content/uploads/2016/05/giai-sa-hinh-bang-lai-xe-may-300x192.jpg 300w" 
										 sizes="(max-width: 479px) 100vw, 479px">
								</p>
								<p style="text-align: justify;">
									<span style="color: #000000;">Câu này thứ tự là xe nào có đoạn đường ngắn nhất thì được quyền đi trước.</span>
								</p>
								<p style="text-align: justify;">
									<span style="color: #000000;">Câu hỏi: 
										<strong>“Theo hướng mũi tên, những hướng nào xe gắn máy đi được?”</strong>
									</span>
								</p>
								<p style="text-align: justify;">
									<img className="aligncenter wp-image-1628 no-display appear"
										 src="./Mẹo thi phần sa hình bằng lái xe máy hạng A1 hay nhất_files/sa-hinh.jpg" 
										 alt="sa hình bằng lái xe máy" 
										 width="487" height="309" 
										 srcset="http://thibanglaixehn.com/wp-content/uploads/2016/05/sa-hinh.jpg 788w, http://thibanglaixehn.com/wp-content/uploads/2016/05/sa-hinh-300x191.jpg 300w" 
										 sizes="(max-width: 487px) 100vw, 487px">
								</p>
								<p style="text-align: justify;">
									<span style="color: #000000;">Câu này cần chú ý từ <strong>“xe gắn máy”</strong>, ở đây nghĩa là cái xe đạp điện. Lưu ý có một câu hỏi về <strong>xe mô tô, </strong>để ý tránh nhầm 2 câu này.</span>
								</p>
								<p style="text-align: justify;">
									<span style="color: #000000;">Câu hỏi: <strong>“Xe nào vi phạm quy tắc giao thông?”</strong></span>
								</p>
								<p style="text-align: justify;">
									<img className="aligncenter wp-image-1629 no-display appear" 
									 	 src="./Mẹo thi phần sa hình bằng lái xe máy hạng A1 hay nhất_files/xe-nao-vi-pham-quy-tac-giao-thong.jpg" 										 	 alt="xe nào vi phạm quy tắc giao thông" 
										  width="489" height="312" 
										 srcset="http://thibanglaixehn.com/wp-content/uploads/2016/05/xe-nao-vi-pham-quy-tac-giao-thong.jpg 788w, http://thibanglaixehn.com/wp-content/uploads/2016/05/xe-nao-vi-pham-quy-tac-giao-thong-300x191.jpg 300w" 
									 	 sizes="(max-width: 489px) 100vw, 489px">
								</p>
								<p style="text-align: justify;">
									<span style="color: #000000;">Câu này lưu ý cái vòng kia là cái vòng của công trình đang thi công dở, không phải vòng xuyến nên xe con quay đầu là sai.</span>
								</p>
								<p style="text-align: justify;">
									<span style="color: #000000;">Tiếp theo: Câu hỏi về&nbsp;<strong>“Xe nào vi phạm quy tắc giao thông”</strong> thì xét<strong> “xe con”</strong> trước, nếu <strong>“xe con vi phạm”</strong> thì chọn đáp án <strong>“có xe con”</strong>, nếu<strong> “xe con không vi phạm”</strong> thì loại đáp án có<strong> “xe con”</strong>, chọn đáp án<strong> “không có xe con”.</strong></span>
								</p>
								<p style="text-align: justify;">
									<span style="color: #000000;">Ngược lại, câu hỏi về <strong>“Xe nào chấp hành đúng quy tắc giao thông”</strong> thì cũng xét<strong> “xe con”</strong> trước, nếu <strong>“xe con chấp hành“</strong> thì chọn đáp án <strong>“có xe con”</strong>, nếu<strong> “xe con không chấp hành“</strong> thì loại đáp án có <strong>“xe con”.</strong></span>
								</p>
								<div id="attachment_450" style="width: 484px" className="wp-caption aligncenter">
									<img className="size-full wp-image-450 no-display appear" 
										 src="./Mẹo thi phần sa hình bằng lái xe máy hạng A1 hay nhất_files/de-thi-bang-lai-xe-may-hang-a11.jpg" 
										 alt="Đề thi bằng lái xe máy hạng A1" 
										 width="474" height="342" 
										 srcset="http://thibanglaixehn.com/wp-content/uploads/2015/12/de-thi-bang-lai-xe-may-hang-a11.jpg 474w, http://thibanglaixehn.com/wp-content/uploads/2015/12/de-thi-bang-lai-xe-may-hang-a11-300x216.jpg 300w" 
										 sizes="(max-width: 474px) 100vw, 474px">
									<p className="wp-caption-text">Đề thi bằng lái xe máy hạng A1</p>
								</div>
								<p style="text-align: justify;">
									<span style="color: #000000;">Tiếp theo, trong câu hỏi <strong>“Những xe nào vi phạm quy tắc giao thông”</strong>, Chọn đáp án có từ<strong> “Xe con(E)”</strong></span>
								</p>
								<div id="attachment_451" style="width: 484px" className="wp-caption aligncenter">
									<img className="size-full wp-image-451 no-display appear" 
										 src="./Mẹo thi phần sa hình bằng lái xe máy hạng A1 hay nhất_files/meo-thi-bang-lai-xe-a1-20151.jpg" 
										 alt="Mẹo thi bằng lái xe A1 hay nhất" 
										 width="474" height="345" 
										 srcset="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-a1-20151.jpg 474w, http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-a1-20151-300x218.jpg 300w" 
										 sizes="(max-width: 474px) 100vw, 474px">
									<p className="wp-caption-text">Mẹo thi bằng lái xe A1 hay nhất</p>
								</div>
								<p style="text-align: justify;">
									<span style="color: #000000;">Câu hỏi mà đáp án có từ<strong> “Xe của bạn”</strong> thì <strong>đếm số hướng (Ngã 3, ngã 4) sau đó trừ 1 là ra đáp án. Ví dụ 3 hướng thì đáp án là (2)</strong></span>
								</p>
								<div id="attachment_453" style="width: 484px" className="wp-caption aligncenter">
									<img className="size-full wp-image-453 no-display appear" 
										 src="./Mẹo thi phần sa hình bằng lái xe máy hạng A1 hay nhất_files/meo-thi-bang-lai-xe-a1-moi-nhat3.jpg" 
										 alt="Mẹo thi bằng lái xe A1 mới nhất" 
										 width="474" height="346" 
										 srcset="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-a1-moi-nhat3.jpg 474w, http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-a1-moi-nhat3-300x219.jpg 300w" 
										 sizes="(max-width: 474px) 100vw, 474px">
									<p className="wp-caption-text">
										<span style="color: #000000;">Mẹo thi bằng lái xe A1 mới nhất</span>
									</p>
								</div>
								<p style="text-align: center;">
									<span style="color: #000000;">Cảm ơn các bạn đã theo dõi.<b>&nbsp;</b>Chúc các bạn ôn và thi tốt!!!</span>
								</p>
							</div>
							<div className="clearfix"></div>
						</div>
					</div>
				</div>
	        </div>
					
		)		
	}
}