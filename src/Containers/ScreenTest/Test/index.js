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
            timeRemain: 720
        }
        let id = setInterval(() => {
            let state = this.state;
            if (state.timeRemain === 0) {
                clearInterval(id);
               // alert('Hết giờ rồi em ơi!');
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
                                 <button id="checkAll" className="btn btn-success" onClick={this.finish}>Nộp bài</button>
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
                                        return (
                                            <dd key={i} className="col-md-4" onClick={this.switchQuestion.bind(null,i)}>
                                                <a className="thumbnail" id="carousel-selector-1"><img src={`http://placehold.it/150x150&text=${i+1}`} alt='hello'/></a>
                                            </dd>
                                        )
                                    })
                                }
                            </dl>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Test;