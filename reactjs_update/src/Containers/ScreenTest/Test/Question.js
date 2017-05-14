import React from 'react';
import _ from 'lodash';
class Question extends React.Component {
  
    unCheck = (data)=>{
        console.log('un', data);
        let index = _.indexOf(this.props.data.yourchoices, data);
        this.props.data.yourchoices.splice(index,1);
        console.log(this.props.data.yourchoices);
        this.setState({});
        
    }
    check = (data)=>{
        console.log('check', data);
         this.props.data.yourchoices.push(data);
        console.log(this.props.data.yourchoices);
         this.setState({});
        
    }
    render() {
        return (
            <div className="modal-content">
                <div className="modal-header">
                    <h3>
                        <span className="label label-warning" id="qid">{this.props.number + 1}</span>{this.props.data.question}</h3>
                </div>
                <div className="modal-body">
                    <div className="col-xs-3 col-xs-offset-5">
                        <div
                            id="loadbar"
                            style={{
                            display: 'none'
                        }}>
                            <div className="blockG" id="rotateG_01"></div>
                            <div className="blockG" id="rotateG_02"></div>
                            <div className="blockG" id="rotateG_03"></div>
                            <div className="blockG" id="rotateG_04"></div>
                            <div className="blockG" id="rotateG_05"></div>
                            <div className="blockG" id="rotateG_06"></div>
                            <div className="blockG" id="rotateG_07"></div>
                            <div className="blockG" id="rotateG_08"></div>
                        </div>
                    </div>

                    <div className="quiz" id="quiz" data-toggle="buttons">
                        {this
                            .props
                            .data
                            .options
                            .map((item, i) => {
                                let index = _.indexOf(this.props.data.yourchoices, i);
                                if (index !== -1) {
                                    return (
                                        <label
                                            onClick={this.unCheck.bind(null, i)}
                                            style={{
                                            backgroundColor: '#323456'
                                        }}
                                            key={i}
                                            className="element-animation1 btn btn-lg btn-primary btn-block">
                                            <span className="btn-label">
                                                <i className="glyphicon glyphicon-chevron-right"></i>
                                            </span>
                                            {item}</label>
                                    )
                                }
                                return (
                                     <label onClick={this.check.bind(null, i)} key={i} className="element-animation1 btn btn-lg btn-primary btn-block">
                                        <span className="btn-label">
                                            <i className="glyphicon glyphicon-chevron-right"></i>
                                        </span>
                                       {item}</label>
                                   
                                )
                            })
                            }

                    </div>
                </div>
                <div className="modal-footer text-muted">
                    <span id="answer"></span>
                </div>
            </div>
        )
    }
}
export default Question;