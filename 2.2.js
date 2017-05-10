import React from 'react';
import {Link} from 'react-router-dom';
class PhanLyThuyet extends React.Component{
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
					<h1 className="text-center">Phần thi lý thuyết</h1>
					<div className="row">
							<br><br><br>
							<div className="panel panel-success">
								<div className="panel-rightbody">
									<h2 style="text-align: justify;">A. Mẹo thi phần lý thuyết</h2>
									<ul style="text-align: justify;">
										<li style="text-align: justify;">
											<span style="color: #000000;">Những câu có 2 đáp án mà trong câu hỏi có xuất hiện từ <strong>&#8220;Những&#8221;</strong> hoặc từ <strong>&#8220;Các&#8221; </strong>thì chọn <strong>cả 2 đáp án</strong>(cái này luôn luôn đúng, vì thế trong câu <strong>ưu tiên xét</strong> cái này trước, nhớ là chỉ đúng cho câu hỏi có 2 đáp án thôi nhé, câu nào 3 đáp án thì không còn đúng nữa).</span>
										</li>
									</ul>
										<div id="attachment_414" style="width: 483px" className="wp-caption aligncenter">
											<img className="wp-image-414 size-full" 
												 src="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-may1.jpg" 
												 alt="Mẹo thi bằng lái xe máy" width="473" height="344" 
												 srcset="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-may1.jpg 473w, http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-may1-300x218.jpg 300w" 
												 sizes="(max-width: 473px) 100vw, 473px" />
											<p className="wp-caption-text">Mẹo thi bằng lái xe</p>
										</div>
										<div id="attachment_416" style="width: 484px" className="wp-caption aligncenter">
											<img className="size-full wp-image-416" 
												 src="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-a16.jpg" 
												 alt="Mẹo thi bằng lái xe A1" 
												 width="474" height="347" 
												 srcset="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-a16.jpg 474w, http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-a16-300x220.jpg 300w" 
												 sizes="(max-width: 474px) 100vw, 474px" />
											<p className="wp-caption-text">Mẹo thi bằng lái xe máy</p>
										</div>
									<ul style="text-align: justify;">
										<li style="text-align: justify;">
											<span style="color: #000000;">Những câu mà trong dấu ngoặc kép<strong> &#8221; &#8220;</strong> có các từ: <strong>Vạch &#8211; phố</strong><strong>&#8211; d</strong><strong>ả</strong><strong>i &#8211; ph</strong><strong>ầ</strong><strong>n</strong> &#8211;&gt;&gt; Chọn đáp án<strong> (1)</strong>.</span>
										</li>
									</ul>
									<p style="text-align: justify;">Ví dụ:</p>
									<p>
										<img className="wp-image-417 size-full aligncenter" 
											 src="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-a151.jpg" 
											 alt="Mẹo thi bằng lái xe A15"
											 width="474" height="344" 
											 srcset="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-a151.jpg 474w, http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-a151-300x218.jpg 300w" 
											 sizes="(max-width: 474px) 100vw, 474px" />
									</p>
									<div id="attachment_419" style="width: 484px" class="wp-caption aligncenter">
										<img className="size-full wp-image-419" 
											 src="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-hoc-ly-thuyet-lai-xe11.jpg" 
											 alt="Mẹo học lý thuyết lái xe" 
											 width="474" height="345" 
											 srcset="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-hoc-ly-thuyet-lai-xe11.jpg 474w, http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-hoc-ly-thuyet-lai-xe11-300x218.jpg 300w" 
											 sizes="(max-width: 474px) 100vw, 474px" />
										<p className="wp-caption-text">Mẹo học lý thuyết lái xe</p>
									</div>
									<p>
										<img className="size-full wp-image-420 aligncenter" 
											 src="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-may2.jpg" 
											 alt="Mẹo thi bằng lái xe máy" 
											 width="473" height="344" 
											 srcset="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-may2.jpg 473w, http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-may2-300x218.jpg 300w" 
											 sizes="(max-width: 473px) 100vw, 473px" />
									</p>
									<div id="attachment_421" style="width: 484px" className="wp-caption aligncenter">
										<img className="size-full wp-image-421" 
											 src="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-hoc-ly-thuyet-lai-xe12.jpg" 
											 alt="Mẹo học lý thuyết lái xe A1" 
											 width="474" height="345" 
											 srcset="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-hoc-ly-thuyet-lai-xe12.jpg 474w, http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-hoc-ly-thuyet-lai-xe12-300x218.jpg 300w" 
											 sizes="(max-width: 474px) 100vw, 474px" />
										<p className="wp-caption-text">Mẹo học lý thuyết lái xe A1</p>
									</div>
									<ul style="text-align: justify;">
										<li>
											<span style="color: #000000;">Những câu mà trong dấu ngoặc kép<strong> &#8221; &#8220;</strong> có các từ:<strong> </strong><strong>Ư</strong><strong>u &#8211; ph</strong><strong>ươ</strong><strong>ng- l</strong><strong>à</strong><strong>n</strong> &#8211;&gt;&gt; Chọn đáp án <strong>(2)</strong>. <strong>(</strong><strong><em>Tr</em></strong><strong><em>ừ</em></strong><strong><em> c</em></strong><strong><em>â</em></strong><strong><em>u 9 </em></strong><strong><em>đ</em></strong><strong><em>ề</em></strong><strong><em> 1, c</em></strong><strong><em>â</em></strong><strong><em>u n</em></strong><strong><em>à</em></strong><strong><em>y c</em></strong><strong><em>á</em></strong><strong><em>c b</em></strong><strong><em>ạ</em></strong><strong><em>n bu</em></strong><strong><em>ộ</em></strong><strong><em>c ph</em></strong><strong><em>ả</em></strong><strong><em>i t</em></strong><strong><em>ự</em></strong><strong><em> nh</em></strong><strong><em>ớ</em></strong><strong>)</strong>.</span>
										</li>
									</ul>
									<h4 style="text-align: justify;">
										<strong>➡ </strong><em><span style="text-decoration: underline;">
										<a href="http://thibanglaixehn.com/kinh-nghiem-lam-bai-thi-ly-thuyet-lai-xe-a1/">Kinh nghiệm bỏ túi làm bài thi lý thuyết khi vào phòng thi</a></span></em>
									</h4>
									<p>
										<img className="aligncenter size-full wp-image-424" 
											 src="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-a1-hay1.jpg" 
											 alt="meo-thi-bang-lai-xe-a1-hay" 
											 width="474" height="345" 
											 srcset="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-a1-hay1.jpg 474w, http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-a1-hay1-300x218.jpg 300w" 
											 sizes="(max-width: 474px) 100vw, 474px" />
									</p>
									<p>
										<img className="size-full wp-image-425 aligncenter" 
											 src="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-hoc-ly-thuyet-lai-xe-a1-hay-nhat1.jpg" 
											 alt="Mẹo học lý thuyết lái xe A1 hay nhất" 
											 width="474" height="344" 
											 srcset="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-hoc-ly-thuyet-lai-xe-a1-hay-nhat1.jpg 474w, http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-hoc-ly-thuyet-lai-xe-a1-hay-nhat1-300x218.jpg 300w" 
											 sizes="(max-width: 474px) 100vw, 474px" />
									</p>
									<p>
										<img className="size-full wp-image-423 aligncenter" 
											 src="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-a1-de-hieu1.jpg" 
											 alt="Mẹo thi bằng lái xe A1 dễ hiểu" 
											 width="475" height="345" 
											 srcset="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-a1-de-hieu1.jpg 475w, http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-a1-de-hieu1-300x218.jpg 300w" 
											 sizes="(max-width: 475px) 100vw, 475px" />
									</p>
									<h4>
										<span style="text-decoration: underline;">➡</span><em> <span style="text-decoration: underline;">
											<a href="http://thibanglaixehn.com/thi-bang-lai-xe-may-dien-ra-nhu-the-nao/">Quá trình thi bằng lái xe máy diễn ra như thế nào?</a></span></em>
									</h4>
									<p>Những câu hỏi về hành vi bị nghiêm cấm mà trong đáp án có xuất hiện các từ như: <strong>“Bị nghiêm cấm”, “Không được phép”, “Không được mang, vác”, “Là thiếu văn hóa giao thông”</strong>…Những câu đại loại tương tự như vậy thì chọn đáp án đó.</p>
									<p>
										<img className="size-full wp-image-427 aligncenter" 
											 src="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-a1-moi-nhat1.jpg" 
											 alt="Mẹo thi bằng lái xe a1 mới nhất" 
											 width="475" height="345" 
											 srcset="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-a1-moi-nhat1.jpg 475w, http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-a1-moi-nhat1-300x218.jpg 300w"
									    	 sizes="(max-width: 475px) 100vw, 475px" />
									</p>
									<p>
										<img className="size-full wp-image-428 aligncenter" 
											 src="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-a1-moi-nhat2.jpg" 
											 alt="Mẹo thi bằng lái xe A1 mới nhất" 
											 width="475" height="345" 
											 srcset="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-a1-moi-nhat2.jpg 475w, http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-a1-moi-nhat2-300x218.jpg 300w" 
											 sizes="(max-width: 475px) 100vw, 475px" />
									</p>
									<p>
										<span style="color: #000000;">Hỏi về <em>người điều khiển giao thông</em>: Có từ <strong>&#8220;Giang tay&#8221;</strong> -&gt;&gt; Chọn đáp án <strong>(1)</strong>; <strong>&#8220;Gi</strong><strong>ơ</strong><strong> tay&#8221;</strong>-&gt;&gt; Chọn đáp án <strong>(2).</strong></span>
									</p>
									<p>
										<img className="size-full wp-image-429 aligncenter" 
											 src="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-hoc-bang-lai-xe-may-hay1.jpg" 
											 alt="Mẹo học bằng lái xe máy hay" 
											 width="474" height="344" 
											 srcset="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-hoc-bang-lai-xe-may-hay1.jpg 474w, http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-hoc-bang-lai-xe-may-hay1-300x218.jpg 300w" 
											 sizes="(max-width: 474px) 100vw, 474px" />
									</p>
									<p>
									 	<img className="size-full wp-image-430 aligncenter" 
									 		 src="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-may-day-du1.jpg" 
									 		 alt="Mẹo thi bằng lái xe máy đầy đủ" 
									 		 width="474" height="343" 
									 		 srcset="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-may-day-du1.jpg 474w, http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-may-day-du1-300x217.jpg 300w" 
									 		 sizes="(max-width: 474px) 100vw, 474px" />
									</p>
									<p>
										<span style="color: #000000;">Trong đáp án mà có các con số sau đây là đáp án: <strong>5 mét, 5 năm, 0.25miligam, 50miligam, 18 tu</strong><strong>ổ</strong><strong>i, 40km/h</strong></span>
									</p>
									<p>
										<img className="size-full wp-image-432 aligncenter" 
											 src="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-may-a1-hay-nhat1.jpg" 
											 alt="Mẹo thi bằng lái xe máy A1 hay nhất" 
											 width="474" height="344" 
											 srcset="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-may-a1-hay-nhat1.jpg 474w, http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-may-a1-hay-nhat1-300x218.jpg 300w" 
											 sizes="(max-width: 474px) 100vw, 474px" />
									</p>
									<p>
										<img className="size-full wp-image-433 aligncenter" 
											 src="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-hoc-bang-lai-xe-may-chuan1.jpg" 
											 alt="Mẹo học bằng lái xe máy chuẩn" 
											 width="474" height="346" 
											 srcset="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-hoc-bang-lai-xe-may-chuan1.jpg 474w, http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-hoc-bang-lai-xe-may-chuan1-300x219.jpg 300w" 
											 sizes="(max-width: 474px) 100vw, 474px" />
									</p>
									<p>
										<span style="color: #000000;">Ưu tiên chấp hành theo hiệu lệnh của &#8220;<strong>người</strong> <strong>đi</strong><strong>ề</strong><strong>u khi</strong><strong>ể</strong><strong>n giao th</strong><strong>ô</strong><strong>ng</strong>&#8221; và &#8220;<strong>bi</strong><strong>ể</strong><strong>n báo hi</strong><strong>ệ</strong><strong>u t</strong><strong>ạ</strong><strong>m th</strong><strong>ờ</strong><strong>i</strong>&#8220;</span>
									</p>
									<p>
										<img className="wp-image-435 size-full aligncenter" 
											 src="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-may-a1-hay-nhat-hien-nay1.jpg" 
											 alt="Mẹo thi bằng lái xe máy A1 hay nhất hiện nay" 
											 width="474" height="344" 
											 srcset="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-may-a1-hay-nhat-hien-nay1.jpg 474w, http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-bang-lai-xe-may-a1-hay-nhat-hien-nay1-300x218.jpg 300w" 
											 sizes="(max-width: 474px) 100vw, 474px" />
									</p>
									<p>	
										<span style="color: #000000;"><span style="color: #000000;">Tại nơi giao nhau <strong>&#8220;Không có báo hi</strong><strong>ệ</strong><strong>u </strong><strong>đ</strong><strong>i theo v</strong><strong>ò</strong><strong>ng xuy</strong><strong>ế</strong><strong>n&#8221;</strong> -&gt;&gt; Chọn đáp án<strong> &#8220;Nh</strong><strong>ườ</strong><strong>ng </strong><strong>đ</strong><strong>ườ</strong><strong>ng cho ng</strong><strong>ườ</strong><strong>i </strong><strong>đ</strong><strong>i t</strong><strong>ừ</strong><strong> b</strong><strong>ê</strong><strong>n ph</strong><strong>ả</strong><strong>i t</strong><strong>ớ</strong><strong>i&#8221;</strong>; Ngược lại<strong> &#8220;Có bi</strong><strong>ể</strong><strong>n b</strong><strong>á</strong><strong>o </strong><strong>đ</strong><strong>i theo v</strong><strong>ò</strong><strong>ng xuy</strong><strong>ế</strong><strong>n&#8221;</strong><strong> </strong>-&gt;&gt; Chọn đáp án <strong>&#8220;Nh</strong><strong>ườ</strong><strong>ng </strong><strong>đ</strong><strong>ườ</strong><strong>ng cho ng</strong><strong>ườ</strong><strong>i </strong><strong>đ</strong><strong>i t</strong><strong>ừ</strong><strong> b</strong><strong>ê</strong><strong>n tr</strong><strong>á</strong><strong>i t</strong><strong>ớ</strong><strong>i&#8221;</strong></span></span>
									</p>
									<p>
										<img className="wp-image-436 size-full aligncenter" 
											 src="http://thibanglaixehn.com/wp-content/uploads/2015/12/150-cau-hoi-thi-bang-lai-xe-a11.jpg" 
											 alt="150 câu hỏi thi bằng lái xe A1" 
											 width="475" height="346" 
											 srcset="http://thibanglaixehn.com/wp-content/uploads/2015/12/150-cau-hoi-thi-bang-lai-xe-a11.jpg 475w, http://thibanglaixehn.com/wp-content/uploads/2015/12/150-cau-hoi-thi-bang-lai-xe-a11-300x219.jpg 300w"
											 sizes="(max-width: 475px) 100vw, 475px" />
									</p>
									<p>
										<span style="color: #000000;"><span style="color: #000000;"><span style="color: #000000;">Hỏi ở<strong> &#8220;trên c</strong><strong>ầ</strong><strong>u&#8221;, &#8220;trong </strong><strong>đ</strong><strong>ườ</strong><strong>ng h</strong><strong>ầ</strong><strong>m&#8221;</strong> có được quay đầu xe hay không? &#8211;&gt;&gt; Chọn đáp án <strong>&#8220;Không đ</strong><strong>ượ</strong><strong>c </strong><strong>quay </strong><strong>đ</strong><strong>ầ</strong><strong>u xe&#8221;,</strong> nhớ kỹ bất cứ trường hợp nào trong hầm hay trên cầu vượt cũng<strong> &#8220;không đ</strong><strong>ượ</strong><strong>c ph</strong><strong>é</strong><strong>p quay </strong><strong>đ</strong><strong>ầ</strong><strong>u xe&#8221;.</strong></span></span></span>
									</p>
									<p>
										<img className="aligncenter wp-image-438 size-full" 
											 src="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-hoc-ly-thuyet-lai-xe2.jpg" 
											 alt="Mẹo học lý thuyết lái xe" 
											 width="475" height="345" 
											 srcset="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-hoc-ly-thuyet-lai-xe2.jpg 475w, http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-hoc-ly-thuyet-lai-xe2-300x218.jpg 300w" 
											 sizes="(max-width: 475px) 100vw, 475px" />
									</p>
									<p style="text-align: justify;">
										<span style="color: #000000;">Câu hỏi về tốc độ tối đa cho phép là <strong>40km/h </strong>hoặc<strong> 50km/h</strong>-&gt;&gt; Chọn đáp án có từ <strong>&#8220;Xe g</strong><strong>ắ</strong><strong>n m</strong><strong>á</strong><strong>y&#8221;</strong> ở cuối câu.</span>
									</p>
									<p style="text-align: justify;">
										<img className="aligncenter wp-image-439 " 
											 src="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-ly-thuyet-bang-lai-xe-may1.jpg" 
											 alt="Mẹo thi lý thuyết bằng lái xe máy" 
											 width="484" height="352" 
											 srcset="http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-ly-thuyet-bang-lai-xe-may1.jpg 474w, http://thibanglaixehn.com/wp-content/uploads/2015/12/meo-thi-ly-thuyet-bang-lai-xe-may1-300x218.jpg 300w" 
											 sizes="(max-width: 484px) 100vw, 484px" />
									</p>
									<p style="text-align: justify;">
										<span style="color: #000000;">Câu hỏi &#8220;<strong>Đảm bảo trật tự, an toàn giao thông là trách nhiệm của ai?</strong>&#8221; -&gt;&gt; Chọn đáp án &#8220;Là trách nhiệm của cơ quan, tổ chức, cá nhân&#8221;. Nghĩa là tất cả mọi người đều phải có trách nhiệm bảo đảm trật tự an toàn giao thông. </span>
									</p>
									<p>
										<img className="aligncenter wp-image-1602" 
											 src="http://thibanglaixehn.com/wp-content/uploads/2016/05/ly-thuyet-thi-bang-lai-xe-may.png" 
											 alt="Lý thuyết thi bằng lái xe máy" 
											 width="483" height="320" 
											 srcset="http://thibanglaixehn.com/wp-content/uploads/2016/05/ly-thuyet-thi-bang-lai-xe-may.png 798w, http://thibanglaixehn.com/wp-content/uploads/2016/05/ly-thuyet-thi-bang-lai-xe-may-300x198.png 300w" 
											 sizes="(max-width: 483px) 100vw, 483px" />
									</p>
									<p style="text-align: justify;">
										<span style="color: #000000;">Với những câu hỏi và đáp án dài thì kinh nghiệm là đáp án nào ngắn đọc trước. Nếu đáp án đó sai thì chọn 2 đáp án dài còn lại.</span>
									</p>
									<p>
										<img className="aligncenter wp-image-1603" 
											 src="http://thibanglaixehn.com/wp-content/uploads/2016/05/meo-thi-ly-thuyet-bang-lai-xe-may.jpg" 
											 alt="Mẹo thi lý thuyết bằng lái xe máy"
											 width="488" height="310" 
											 srcset="http://thibanglaixehn.com/wp-content/uploads/2016/05/meo-thi-ly-thuyet-bang-lai-xe-may.jpg 789w, http://thibanglaixehn.com/wp-content/uploads/2016/05/meo-thi-ly-thuyet-bang-lai-xe-may-300x191.jpg 300w" 
											 sizes="(max-width: 488px) 100vw, 488px" />
									</p>
									<p style="text-align: justify;">
										<span style="color: #000000;">Câu hỏi &#8220;<strong>Khi muốn chuyển hướng, người lái xe phải thực hiện như thế nào?&#8221; </strong>Với câu này thì nên đọc hiểu, ví dụ như khi muốn chuyển hướng cần phải giảm tốc độ và phải xi nhan để cho phương tiện phía sau biết. </span>
									</p>
									<p>
										<img className="aligncenter wp-image-1604" 
											 src="http://thibanglaixehn.com/wp-content/uploads/2016/05/meo-thi-ly-thuyet-bang-lai-xe-may-1.jpg" 
											 alt="Mẹo thi lý thuyết bằng lái xe máy 1" 
											 width="496" height="314" 
											 srcset="http://thibanglaixehn.com/wp-content/uploads/2016/05/meo-thi-ly-thuyet-bang-lai-xe-may-1.jpg 788w, http://thibanglaixehn.com/wp-content/uploads/2016/05/meo-thi-ly-thuyet-bang-lai-xe-may-1-300x190.jpg 300w" 

											 sizes="(max-width: 496px) 100vw, 496px" />
									</p>
									<p style="text-align: justify;">
										<span style="color: #000000;"> Câu hỏi &#8220;<strong>Khi tránh xe đi ngược chiều, các xe phải nhường đường như thế nào?</strong>&#8220;. Đáp án là 1 và 2. Tại sao xe xuống dốc phải nhường đường cho xe lên dốc là do tầm nhìn của xe xuống dốc rộng hơn so với tầm nhìn của xe đang lên dốc. </span>
									</p>
									<p>
										<img className="aligncenter wp-image-1605" 
											 src="http://thibanglaixehn.com/wp-content/uploads/2016/05/meo-thi-ly-thuyet-bang-lai-xe-may-3.jpg" 
											 alt="mẹo thi lý thuyết bằng lái xe máy 3" 
											 width="502" height="319" 
											 srcset="http://thibanglaixehn.com/wp-content/uploads/2016/05/meo-thi-ly-thuyet-bang-lai-xe-may-3.jpg 788w, http://thibanglaixehn.com/wp-content/uploads/2016/05/meo-thi-ly-thuyet-bang-lai-xe-may-3-300x190.jpg 300w" sizes="(max-width: 502px) 100vw, 502px" />
									</p>
									<p style="text-align: justify;">
										<span style="color: #000000;">Câu hỏi </span><strong><span style="color: #000000;">&#8220;Trên dường bộ giao nhau cùng mức với đường sắt, cầu đường bộ đi chúng với đường sắt thì loại phương tiện nào được quyền ưu tiên đi trước?&#8221;</span>
									</p>
									<p>
										<img className="aligncenter wp-image-1606" 
											 src="http://thibanglaixehn.com/wp-content/uploads/2016/05/meo-thi-ly-thuyet-bang-lai-xe-may-4.jpg" 
											 alt="mẹo thi lý thuyết bằng lái xe máy 4" 
											 width="510" height="325" 
											 srcset="http://thibanglaixehn.com/wp-content/uploads/2016/05/meo-thi-ly-thuyet-bang-lai-xe-may-4.jpg 788w, http://thibanglaixehn.com/wp-content/uploads/2016/05/meo-thi-ly-thuyet-bang-lai-xe-may-4-300x191.jpg 300w" 
											 sizes="(max-width: 510px) 100vw, 510px" /></strong>
									</p>
									<p>
										<span style="color: #000000;">Câu hỏi <strong>&#8220;Người điều khiển phương tiện tham gia giao thông trong hầm đường bộ ngoài việc phải tuân thủ các quy tắc giao thông còn phải thực hiện những quy định nào dưới đây?&#8221; </strong></span>
									</p>
									<p>
										<img className="aligncenter wp-image-1607" 
											 src="http://thibanglaixehn.com/wp-content/uploads/2016/05/ly-thuyet-thi-bang-lai-xe-may-a1.jpg" 
											 alt="lý thuyết thi bằng lái xe máy a1" 
											 width="518" height="330" 
											 srcset="http://thibanglaixehn.com/wp-content/uploads/2016/05/ly-thuyet-thi-bang-lai-xe-may-a1.jpg 788w, http://thibanglaixehn.com/wp-content/uploads/2016/05/ly-thuyet-thi-bang-lai-xe-may-a1-300x191.jpg 300w" 
											 sizes="(max-width: 518px) 100vw, 518px" />
									</p>
									<p>
										<span style="color: #000000;">Câu hỏi <strong>&#8220;Người ngồi trên xe mô tô 2 bánh, xe mô tô 3 bánh, xe gắn máy phải đội mũ bảo hiểm có cài quai đúng quy cách khi nào?&#8221;. </strong>Bất cứ khi nào tham gia giao thông đều phải đội mũ bảo hiểm.<strong></strong></span>
									</p>
									<p>
										<img className="aligncenter wp-image-1608" 
											 src="http://thibanglaixehn.com/wp-content/uploads/2016/05/ly-thuyet-thi-bang-lai-xe-may-a1-1.jpg" 
											 alt="lý thuyết thi bằng lái xe máy a1 1" 
											 width="524" height="333" 
											 srcset="http://thibanglaixehn.com/wp-content/uploads/2016/05/ly-thuyet-thi-bang-lai-xe-may-a1-1.jpg 789w, http://thibanglaixehn.com/wp-content/uploads/2016/05/ly-thuyet-thi-bang-lai-xe-may-a1-1-300x190.jpg 300w" sizes="(max-width: 524px) 100vw, 524px" />
									</p>
									<p>

										<span style="color: #000000;">Câu hỏi &#8220;<strong>Cơ quan nào quy định đoạn đường cấm đi, đường đi một chiều, nơi cấm dừng, cấm đỗ, cấm quay đầu xe, lắp đặt biển báo hiệu đường bộ thuộc địa phương quản lý?</strong>&#8220;. Câu này chọn đáp án<strong> Ủy ban nhân dân cấp tỉnh </strong>bởi vì các cơ quan khác còn lại chỉ có nhiệm vụ thi hành, Ủy ban nhân dân cấp tỉnh là đơn vị quyền lực cao nhất ở địa phương. 
											<img className="aligncenter wp-image-1609" 
												 src="http://thibanglaixehn.com/wp-content/uploads/2016/05/ly-thuyet-thi-bang-lai-xe-may-a1-2.jpg" 
												 alt="lý thuyết thi bằng lái xe máy a1 2" 
												 width="537" height="340" 
												 srcset="http://thibanglaixehn.com/wp-content/uploads/2016/05/ly-thuyet-thi-bang-lai-xe-may-a1-2.jpg 788w, http://thibanglaixehn.com/wp-content/uploads/2016/05/ly-thuyet-thi-bang-lai-xe-may-a1-2-300x190.jpg 300w" sizes="(max-width: 537px) 100vw, 537px" />
										</span>
									</p>
									<p>Câu hỏi <strong>&#8220;Khi điều khiển xe chạy trên đường, người lái xe phải mang theo các loại giấy tờ gì?&#8221;.</strong> Đáp án số 3 đúng, bởi vì xe ô tô thì không được phép mang giấy phép lái xe của xe máy và ngược lại.</p>
									<p>&nbsp;</p>
									<p>
										<img className="aligncenter wp-image-1610" 
											 src="http://thibanglaixehn.com/wp-content/uploads/2016/05/meo-ly-thuyet-thi-bang-lai-xe-may-a1.jpg" 
											 alt="Mẹo lý thuyết thi bằng lái xe máy a1" 
											 width="538" height="342" 
											 srcset="http://thibanglaixehn.com/wp-content/uploads/2016/05/meo-ly-thuyet-thi-bang-lai-xe-may-a1.jpg 789w, http://thibanglaixehn.com/wp-content/uploads/2016/05/meo-ly-thuyet-thi-bang-lai-xe-may-a1-300x191.jpg 300w" sizes="(max-width: 538px) 100vw, 538px" />
									</p>
								</div>
								<p style="text-align: center;"><span style="color: #000000;">Cảm ơn các bạn đã theo dõi.<b>&nbsp;</b>Chúc các bạn ôn và thi tốt!!!</span></p>
								<div className="clearfix"></div>
							</div>
						</div>
					</div>
		)

	}
}
