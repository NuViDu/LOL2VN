import React from 'react';
import Question from './Question.js';
import data from './data.js';
class Test extends React.Component {
    constructor(props) {
        super(props);
        let list = [];
        data.forEach((item, index) => {
            list.push({question: item.question, image: item.image, options: item.options, answers: item.answers, yourchoices: []});
        });
        this.state = {
            list: list,
            status: 0,
            timeRemain: 900
        }
        let id = setInterval(() => {
            let state = this.state;
            if (state.timeRemain === 0) {
                clearInterval(id);
              alert('Hết giờ!');
               let diem = 0;
               console.log(this.state.list);
               this.state.list.forEach((item)=>{
                   console.log(item);
                   if(item.answers.length === item.yourchoices.length){
                        diem++;
                   }
               })
                window.location.href = `/result/${diem}`;
            }
            state.timeRemain -= 1;
            this.setState(state);
        }, 1000)
    }
    next = () => {
        let state = this.state;
        if (state.status === 19) {
            alert('Max rồi!');
        } else {
            state.status++;
            this.setState(state);
        }
    }
    finish = ()=>{
         let diem = 0;
               console.log(this.state.list);
               this.state.list.forEach((item)=>{
                   console.log(item);
                   if(item.answers.length === item.yourchoices.length){
                        diem++;
                   }
               })
                window.location.href = `/result/${diem}`;
    }
    switchQuestion=(index)=>{
        console.log(index);
        let state = this.state;
        state.status = index;
        this.setState(state);
    }
    getDisplayTimeRemain = () => {
        let timeRemain = this.state.timeRemain;
        let minute = Math.floor(timeRemain / 60);
        let second = timeRemain % 60;
        return second < 9
            ? `${minute}:0${second}`
            : `${minute}:${second}`;
    }
    render() {
        return (
            <div className="container">
                <hr/>
                <hr/>
                <legend className=" text-center">
                    <strong>THI THỬ TRỰC TUYẾN</strong>
                </legend>
                <legend className=" text-center">Thời gian thi còn lại: {this.getDisplayTimeRemain()}</legend>
                <div className="row">
                    <div className="col-md-9">
                        <div className="container-fluid bg-info">
                            <div className="modal-dialog">
                                <Question number={this.state.status} data={this.state.list[this.state.status]}/>
                                <hr/>
                                <button id="checkAll" className="btn btn-success" onClick={this.next}>Tiếp</button>
								<p>  </p>
								<p>  </p>
								<p>  </p>
                                 
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="container-fluid bg-primary">
                            <hr/>
                            <br/>
                            <dl className="hide-bullets">
                                {this
                                    .state
                                    .list
                                    .map((item, i) => {
                                        switch(i) {
                                   case 0:
                              return (
                                            <dd key={i} className="col-md-4" onClick={this.switchQuestion.bind(null,i)}>
                                                <a className="thumbnail" id="carousel-selector-1"><img src={`https://firebasestorage.googleapis.com/v0/b/test2-27df1.appspot.com/o/Cauhoi%2F1.jpg?alt=media&token=f845e5b8-7b34-46c4-b1c2-fccab7e92818`} /></a>
                                            </dd>
                                        )
                                   break;
								   case 1:
                              return (
                                            <dd key={i} className="col-md-4" onClick={this.switchQuestion.bind(null,i)}>
                                                <a className="thumbnail" id="carousel-selector-1"><img src={'https://firebasestorage.googleapis.com/v0/b/test2-27df1.appspot.com/o/Cauhoi%2F2.jpg?alt=media&token=0608bb44-0974-4892-805d-49a4012ea146'} /></a>
                                            </dd>
                                        )
                                   break;
								   case 2:
                              return (
                                            <dd key={i} className="col-md-4" onClick={this.switchQuestion.bind(null,i)}>
                                                <a className="thumbnail" id="carousel-selector-1"><img src={'https://firebasestorage.googleapis.com/v0/b/test2-27df1.appspot.com/o/Cauhoi%2F3.jpg?alt=media&token=c1dd145f-fd6b-4562-aa59-767a198654a4'} /></a>
                                            </dd>
                                        )
                                   break;
								   case 3:
                              return (
                                            <dd key={i} className="col-md-4" onClick={this.switchQuestion.bind(null,i)}>
                                                <a className="thumbnail" id="carousel-selector-1"><img src={'https://firebasestorage.googleapis.com/v0/b/test2-27df1.appspot.com/o/Cauhoi%2F4.jpg?alt=media&token=f1611594-ebf6-4693-a745-5f42567afd7e'} /></a>
                                            </dd>
                                        )
                                   break;
								   case 4:
                              return (
                                            <dd key={i} className="col-md-4" onClick={this.switchQuestion.bind(null,i)}>
                                                <a className="thumbnail" id="carousel-selector-1"><img src={'https://firebasestorage.googleapis.com/v0/b/test2-27df1.appspot.com/o/Cauhoi%2F5.jpg?alt=media&token=f9383b41-168e-4078-a762-eb888c8b6242'} /></a>
                                            </dd>
                                        )
                                   break;
								   case 5:
                              return (
                                            <dd key={i} className="col-md-4" onClick={this.switchQuestion.bind(null,i)}>
                                                <a className="thumbnail" id="carousel-selector-1"><img src={'https://firebasestorage.googleapis.com/v0/b/test2-27df1.appspot.com/o/Cauhoi%2F6.jpg?alt=media&token=79d925f7-9692-4f6b-a9c0-3dbd3ef0e8ca'} /></a>
                                            </dd>
                                        )
                                   break;
								   case 6:
                              return (
                                            <dd key={i} className="col-md-4" onClick={this.switchQuestion.bind(null,i)}>
                                                <a className="thumbnail" id="carousel-selector-1"><img src={'https://firebasestorage.googleapis.com/v0/b/test2-27df1.appspot.com/o/Cauhoi%2F7.jpg?alt=media&token=5be5ff1b-ee79-4e88-9db2-839be0a688ce'} /></a>
                                            </dd>
                                        )
                                   break;
								   case 7:
                              return (
                                            <dd key={i} className="col-md-4" onClick={this.switchQuestion.bind(null,i)}>
                                                <a className="thumbnail" id="carousel-selector-1"><img src={'https://firebasestorage.googleapis.com/v0/b/test2-27df1.appspot.com/o/Cauhoi%2F8.jpg?alt=media&token=0c006839-ca88-44f1-b555-68b65cdabe45'} /></a>
                                            </dd>
                                        )
                                   break;
								   case 8:
                              return (
                                            <dd key={i} className="col-md-4" onClick={this.switchQuestion.bind(null,i)}>
                                                <a className="thumbnail" id="carousel-selector-1"><img src={'https://firebasestorage.googleapis.com/v0/b/test2-27df1.appspot.com/o/Cauhoi%2F9.jpg?alt=media&token=49668b4d-dcea-4729-b894-567b982b2f27'} /></a>
                                            </dd>
                                        )
                                   break;
								   case 9:
                              return (
                                            <dd key={i} className="col-md-4" onClick={this.switchQuestion.bind(null,i)}>
                                                <a className="thumbnail" id="carousel-selector-1"><img src={'https://firebasestorage.googleapis.com/v0/b/test2-27df1.appspot.com/o/Cauhoi%2F10.jpg?alt=media&token=7517241f-d06e-402b-82e7-f40ff512d245'} /></a>
                                            </dd>
                                        )
                                   break;
								   case 10:
                              return (
                                            <dd key={i} className="col-md-4" onClick={this.switchQuestion.bind(null,i)}>
                                                <a className="thumbnail" id="carousel-selector-1"><img src={'https://firebasestorage.googleapis.com/v0/b/test2-27df1.appspot.com/o/Cauhoi%2F11.jpg?alt=media&token=e3d1c4af-158e-4334-8428-0bc5e8fbccd0'} /></a>
                                            </dd>
                                        )
                                   break;
								   case 11:
                              return (
                                            <dd key={i} className="col-md-4" onClick={this.switchQuestion.bind(null,i)}>
                                                <a className="thumbnail" id="carousel-selector-1"><img src={'https://firebasestorage.googleapis.com/v0/b/test2-27df1.appspot.com/o/Cauhoi%2F12.jpg?alt=media&token=31e6c832-eded-4af7-9177-0296468c6e87'} /></a>
                                            </dd>
                                        )
                                   break;
								   case 12:
                              return (
                                            <dd key={i} className="col-md-4" onClick={this.switchQuestion.bind(null,i)}>
                                                <a className="thumbnail" id="carousel-selector-1"><img src={'https://firebasestorage.googleapis.com/v0/b/test2-27df1.appspot.com/o/Cauhoi%2F13.jpg?alt=media&token=e5c3560a-d06a-48b0-a4d7-9c959e28fb95'} /></a>
                                            </dd>
                                        )
                                   break;
								   case 13:
                              return (
                                            <dd key={i} className="col-md-4" onClick={this.switchQuestion.bind(null,i)}>
                                                <a className="thumbnail" id="carousel-selector-1"><img src={'https://firebasestorage.googleapis.com/v0/b/test2-27df1.appspot.com/o/Cauhoi%2F14.jpg?alt=media&token=f74eeceb-8bdd-423e-bd7c-c553e7562165'} /></a>
                                            </dd>
                                        )
                                   break;
								   case 14:
                              return (
                                            <dd key={i} className="col-md-4" onClick={this.switchQuestion.bind(null,i)}>
                                                <a className="thumbnail" id="carousel-selector-1"><img src={'https://firebasestorage.googleapis.com/v0/b/test2-27df1.appspot.com/o/Cauhoi%2F15.jpg?alt=media&token=a60e553c-f508-4546-bac6-aa9c0f9b14ed'} /></a>
                                            </dd>
                                        )
                                   break;
								   case 15:
                              return (
                                            <dd key={i} className="col-md-4" onClick={this.switchQuestion.bind(null,i)}>
                                                <a className="thumbnail" id="carousel-selector-1"><img src={'https://firebasestorage.googleapis.com/v0/b/test2-27df1.appspot.com/o/Cauhoi%2F16.jpg?alt=media&token=8f833c4a-c65c-42d8-8dfe-0928ceb2177b'} /></a>
                                            </dd>
                                        )
                                   break;
								   case 16:
                              return (
                                            <dd key={i} className="col-md-4" onClick={this.switchQuestion.bind(null,i)}>
                                                <a className="thumbnail" id="carousel-selector-1"><img src={'https://firebasestorage.googleapis.com/v0/b/test2-27df1.appspot.com/o/Cauhoi%2F17.jpg?alt=media&token=12fe35c9-221e-4e1e-8fb2-93b2c658b2f7'} /></a>
                                            </dd>
                                        )
                                   break;
								   case 17:
                              return (
                                            <dd key={i} className="col-md-4" onClick={this.switchQuestion.bind(null,i)}>
                                                <a className="thumbnail" id="carousel-selector-1"><img src={'https://firebasestorage.googleapis.com/v0/b/test2-27df1.appspot.com/o/Cauhoi%2F18.jpg?alt=media&token=84b1cb57-e12f-43db-a4da-c4b64f258f72'} /></a>
                                            </dd>
                                        )
                                   break;
								   case 18:
                              return (
                                            <dd key={i} className="col-md-4" onClick={this.switchQuestion.bind(null,i)}>
                                                <a className="thumbnail" id="carousel-selector-1"><img src={'https://firebasestorage.googleapis.com/v0/b/test2-27df1.appspot.com/o/Cauhoi%2F19.jpg?alt=media&token=e27968df-d843-48b6-a43b-899c05b4ba8f'} /></a>
                                            </dd>
                                        )
                                   break;
								   case 19:
                              return (
                                            <dd key={i} className="col-md-4" onClick={this.switchQuestion.bind(null,i)}>
                                                <a className="thumbnail" id="carousel-selector-1"><img src={'https://firebasestorage.googleapis.com/v0/b/test2-27df1.appspot.com/o/Cauhoi%2F20.jpg?alt=media&token=5697d82b-6211-47cd-a311-cb9b5093f8a5'} /></a>
                                            </dd>
                                        )
										break;}
                                    })
                                }
                            </dl>
							
                        </div>
						<button id="checkAll" className="btn btn-success" onClick={this.finish}>Nộp bài</button>
                    </div>
					
                </div>
				
            </div>

        )
    }
}

export default Test;