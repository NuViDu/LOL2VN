const data = [
    {
        question: 'Hành vi điều khiển xe cơ giới chạy quá tốc độ quy định, giành đường, vượt ẩu có ' +
                'bị nghiêm cấm hay không?',
        image: null,
        options: [
            'Bị nghiêm cấm.', 'Bị nghiêm cấm tùy từng trường hợp.', 'Không bị nghiêm cấm.'
        ],
        answers: [0]
    }, {
        question: 'Những hành vi nào sau đây bị cấm?',
        image: null,
        options: [
            'Bấm còi, rú ga liên tục, bấm còi trong thời gian từ 22 giờ đến 5 giờ.', 'Bấm còi hơi, sử dụng đèn chiếu xa trong khu đô thị và khu dân cư, trừ các xe ưu ' +
                    'tiên khi đang làm nhiệm vụ.'
        ],
        answers: [0, 1]
    },{
        question: 'Các hành vi nào sau đây bị nghiêm cấm?',
        image: null,
        options:[
            'Lắp đặt, sử dụng còi, đèn không đúng thiết kế của nhà sản xuất đối với từng loại xe cơ giới.', 'Sử dụng thiết bị âm thanh gây mất trật tự an toàn giao thông, trật tự công cộng.'
        ],
        answers: [0,1]
    },{
        question: 'Hành vi bỏ trốn sau khi gây tai nạn để trốn tránh trách nhiệm hoặc khi có điều kiện mà cố ý không cứu giúp người bị tai nạn giao thông có bị nghiêm cấm hay không?',
        image: null,
        options:[
            'Không bị nghiêm cấm.', 'Nghiêm cấm tùy từng trường hợp cụ thể.', 'Bị nghiêm cấm'
        ],
        answers: [2]
    },{
        question: 'Khi xảy ra tai nạn giao thông, những hành vi nào ghi ở dưới đây bị nghiêm cấm?',
        image: null,
        options:[
            'Xâm phạm tính mạng, sức khỏe, tài sản của người bị tai nạn giao thông; xâm phạm tính mạng, sức khỏe, tài sản của người gây tai nạn giao thông.', '. Lợi dụng việc xảy ra tai nạn giao thông để hành hung, đe dọa, xúi giục, gây sức ép, làm mất trật tự, cản trở việc xử lý tai nạn giao thông.'
        ],
        answers: [0,1]
    },{
        question: 'Việc sản xuất, mua bán, sử dụng biển số xe cơ giới, xe máy chuyên dùng được quy định như thế nào trong luật giao thông đường bộ?',
        image: null,
        options:[
            'Nghiêm cấm sản xuất, được phép sử dụng.', 'Nghiêm cấm mua bán, cho phép sử dụng.', 'Nghiêm cấm sản xuất, mua bán, sử dụng trái phép.'
        ],
        answers: [2]
    },{
        question: 'Người lái xe không được vượt xe khác khi gặp trường hợp nào dưới đây?',
        image: null,
        options:[
            'Trên cầu hẹp có một làn xe; nơi đường giao nhau, đường bộ giao nhau cùng mức với đường sắt.', 'Điều kiện thời tiết hoặc đường không bảo đảm an toàn cho việc vượt; xe ưu tiên đang phát tín hiệu ưu tiên làm nhiệm vụ.'
        ],
        answers: [0,1]
    },{
        question: 'Người điều khiển xe mô tô hai bánh. Ba bánh, xe gắn máy có được phép sử dụng xe để kéo, đẩy các xe khác, vật khác khi tham gia giao thông không?',
        image: null,
        options:[
            'Được phép', 'Tùy trường hợp', 'Không được phép'
        ],
        answers: [2]
    },{
        question: 'Người ngồi trên xe mô tô hai bánh, ba bánh, xe gắn máy khi tham gia giao thông không được thực hiện những hành vi nào dưới đây?',
        image: null,
        options:[
            'Đội mũ bảo hiểm và cài quai đúng quy cách.', 'Sử dụng ô; bám, kéo hoặc đẩy các phương tiện khác.', 'Đứng trên yên, giá đèo hàng hoặc ngồi trên tay lái; các hành vi khác gây mất trật tự an toàn giao thông.'
        ],
        answers: [1,2]
    },{
        question: 'Người ngồi trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông có được mang, vác vật cồng kềnh hay không?',
        image: null,
        options:[
            'Được mang, vác tùy trường hợp cụ thể.', 'Không được mang, vác.', 'Được mang, vác nhưng phải đảm bảo an toàn.'
        ],
        answers: [1]
    },{
        question: 'Biển nào báo hiệu giao nhau có tín hiệu đèn?',
        image: '11.jpg',
        options:[
            'Biển 1', 'Biển 2', 'Biển 3'
        ],
        answers: [2]
    },{
        question: 'Biển nào báo hiệu giao nhau với đường ưu tiên?',
        image: '12.jpg',
        options:[
            'Biển 1', 'Biển 3', 'Biển 2', 'Cả 3 biển'
        ],
        answers: [1]
    },{
        question: 'Biển nào báo hiệu cấm xe mô tô hai bánh đi vào?',
        image: '13.jpg',
        options:[
            'Biển 1', 'Biển 2', 'Biển 3'
        ],
        answers: [0]
    },{
        question: 'Khi gặp biển báo nào xe được rẽ trái?',
        image: '14.jpg',
        options:[
            'Biển 1', 'Biển 2', 'Không biển nào'
        ],
        answers: [1]
    },{
        question: 'Biển nào báo hiệu tuyến đường cầu vượt cắt qua? ',
        image: '15.jpg',
        options:[
            'Biển 1 và 2', ' Biển 1 và 3', 'Biển 2 và 3'
        ],
        answers: [0]
    },{
        question: 'Theo tín hiệu đèn xe nào được phép đi?',
        image: '16.jpg',
        options:[
            'Xe con và xe khách', 'Moto'
        ],
        answers: [0]
    },{
        question: 'Xe nào đỗ vi phạm quy tắc giao thông?',
        image: '17.jpg',
        options:[
            'Cả 2 xe', 'Không xe nào', 'Chỉ xe moto', 'Chỉ xe tải'
        ],
        answers: [0]
    },{
        question: 'Các xe đi như thế nào là đúng quy tắc giao thông?',
        image: '18.jpg',
        options:[
            'Các xe ở phía tay phải và tay trái của người điều khiển được phép đi thẳng.', 'Cho phép các xe ở mọi hướng được rẽ phải.', 'Tất cả các xe phải dừng lại trước ngã tư, trừ những xe đã ở trong ngã tư được phép đi.'
        ],
        answers: [2]
    },{
        question: 'Theo tín hiệu đèn, xe nào được quyền đi là đúng quy tắc giao thông?',
        image: '19.jpg',
        options:[
            'Xe khách, mô tô', 'Xe tải, mô tô', 'Xe con, xe tải'
        ],
        answers: [2]
    },{
        question: 'Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?',
        image: '20.jpg',
        options:[
            'Xe của bạn, mô tô, xe con.', 'Xe con, xe của bạn, mô tô.', 'Mô tô, xe con, xe của bạn.'
        ],
        answers: [2]
    }
]

export default data;