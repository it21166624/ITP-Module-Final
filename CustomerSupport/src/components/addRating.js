import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import logo from './img/logo.png';
import rate from './img/rate.png';
import star from './img/star.png';
import './css/addRating.css';



class addFeedback extends Component{

    constructor(props){
        super(props);
 
        
        this.onChangeOne = this.onChangeOne.bind(this);
        this.onChangeTwo = this.onChangeTwo.bind(this);
        this.onChangeThree = this.onChangeThree.bind(this);
        this.onChangeFour = this.onChangeFour.bind(this);
        this.onChangeFive = this.onChangeFive.bind(this);
        this.onChangeTotal = this.onChangeTotal.bind(this);
        this.onChangeAverage = this.onChangeAverage.bind(this);

        //this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            one: '',
            two: '',
            three:'',
            four:'',
            five:'',
            total:'',
            average:''
        }
    }

    onChangeOne(e){
        this.setState( {
            one: e.target.value
        });
    }
    onChangeTwo(e){
        this.setState( {
            two: e.target.value
        });
    }
    onChangeThree(e){
        this.setState( {
            three: e.target.value
        });
    }
    onChangeFour(e){
        this.setState( {
            four: e.target.value
        });
    }
    onChangeFive(e){
        this.setState( {
            five: e.target.value
        });
    }
    onChangeTotal(e){
        this.setState( {
            totale: e.target.value
        });
    }
    onChangeAverage(e){
        this.setState( {
            average: e.target.value
        });
    }

    componentDidMount() {
        const x = "644cd0bac2c42e34c4fb8b09"
        axios.get('http://localhost:4000/jacklup/rate/'+x)
            .then(res => {
                this.setState({
                    one: res.data.one,
                    two: res.data.two,
                    three: res.data.three,
                    four: res.data.four,
                    five : res.data.five,
                    total : res.data.total,
                    average : res.data.average
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })
    }

    updateOne = () => {
        //e.preventDefault();
        this.state.one = parseInt(this.state.one) + 1;
        this.state.total = parseInt(this.state.total) + 1;
        this.state.average = (((parseInt(this.state.four))+(parseInt(this.state.five)))/(parseInt(this.state.total)))*100;
        this.state.average =  (parseInt(this.state.average)).toFixed(2);
        
        const obj = {
            one : this.state.one,
            two : this.state.two,
            three : this.state.three,
            four : this.state.four,
            five : this.state.five,
            total : this.state.total,
            average : this.state.average
        }
        const a = "644cd0bac2c42e34c4fb8b09"
        axios.post('http://localhost:4000/jacklup/update/'+a,obj)
            .then(res => console.log(res.data));
        window.location.replace('/addRating');
    }
    updateTwo = () => {
        //e.preventDefault();
        this.state.two = parseInt(this.state.two) + 1;
        this.state.total = parseInt(this.state.total) + 1;
        this.state.average = (((parseInt(this.state.four))+(parseInt(this.state.five)))/(parseInt(this.state.total)))*100;
        this.state.average =  (parseInt(this.state.average)).toFixed(2);
        
        const obj = {
            one : this.state.one,
            two : this.state.two,
            three : this.state.three,
            four : this.state.four,
            five : this.state.five,
            total : this.state.total,
            average : this.state.average
        }
        const a = "644cd0bac2c42e34c4fb8b09"
        axios.post('http://localhost:4000/jacklup/update/'+a,obj)
            .then(res => console.log(res.data));
        window.location.replace('/addRating');
    }
    updateThree = () => {
        //e.preventDefault();
        this.state.three = parseInt(this.state.three) + 1;
        this.state.total = parseInt(this.state.total) + 1;
        this.state.average = (((parseInt(this.state.four))+(parseInt(this.state.five)))/(parseInt(this.state.total)))*100;
        this.state.average =  (parseInt(this.state.average)).toFixed(2);
        
        const obj = {
            one : this.state.one,
            two : this.state.two,
            three : this.state.three,
            four : this.state.four,
            five : this.state.five,
            total : this.state.total,
            average : this.state.average
        }
        const a = "644cd0bac2c42e34c4fb8b09"
        axios.post('http://localhost:4000/jacklup/update/'+a,obj)
            .then(res => console.log(res.data));
        window.location.replace('/addRating');
    }
    updateFour = () => {
        //e.preventDefault();
        this.state.four = parseInt(this.state.four) + 1;
        this.state.total = parseInt(this.state.total) + 1;
        this.state.average = (((parseInt(this.state.four))+(parseInt(this.state.five)))/(parseInt(this.state.total)))*100;
        this.state.average =  (parseInt(this.state.average)).toFixed(2);
        
        const obj = {
            one : this.state.one,
            two : this.state.two,
            three : this.state.three,
            four : this.state.four,
            five : this.state.five,
            total : this.state.total,
            average : this.state.average
        }
        const a = "644cd0bac2c42e34c4fb8b09"
        axios.post('http://localhost:4000/jacklup/update/'+a,obj)
            .then(res => console.log(res.data));
        window.location.replace('/addRating');
    }
    updateFive = () => {
        //e.preventDefault();
        this.state.five = parseInt(this.state.five) + 1;
        this.state.total = parseInt(this.state.total) + 1;
        this.state.average = (((parseInt(this.state.four))+(parseInt(this.state.five)))/(parseInt(this.state.total)))*100;
        this.state.average =  (parseInt(this.state.average)).toFixed(2);
        
        const obj = {
            one : this.state.one,
            two : this.state.two,
            three : this.state.three,
            four : this.state.four,
            five : this.state.five,
            total : this.state.total,
            average : this.state.average
        }
        const a = "644cd0bac2c42e34c4fb8b09"
        axios.post('http://localhost:4000/jacklup/update/'+a,obj)
            .then(res => console.log(res.data));
        window.location.replace('/addRating');
    }

  render() {
    return(
        <div>
            <div className = 'rate-content'>

                <div className='logo'>
                    <a href = "/"><img src = {logo}/></a>
                </div>
                <br/><br/><br/><br/><br/><br/><br/>
                <div className='row'>
                    <div className='col-lg-4'>
                          <img src = {rate} width="300"/>
                    </div>
                    <div className='col-lg-8'>
                        <div className='outer'>
                            <h6>What Do You Think</h6>
                            <h6>About Our Service ?</h6>
                            <br/><br/>
                            <div className='row'>
                                <div className='col-lg-4 rate-left'>
                                    <center>
                                        <img src = {star} width="100"/>
                                        <br/>
                                        <h2>{this.state.total}</h2>
                                        <h4>Ratings</h4>
                                    </center>

                                </div>
                                <div className='col-lg-8 rate-right'>
                                    <div className='rate-right-left'>
                                        <center>
                                            <br/><br/>
                                            {/* <h6>{(((parseInt(this.state.four) + parseInt(this.state.five))/parseInt(this.state.total))*100)}%</h6> */}
                                            <h5>{this.state.average}%</h5>
                                            <h6>Recommended</h6>
                                            <h4>({parseInt(this.state.four) + parseInt(this.state.five)} of {this.state.total})</h4>
                                        </center>
                                    </div>
                                    <div className='rate-right-right'>
                                        <div className='rating-rate'>
                                            <p>5 stars</p>
                                             &nbsp;&nbsp;&nbsp;
                                            <div style={{width : 80,height:12,background:'purple',marginTop:9}}></div>
                                            &nbsp;&nbsp;&nbsp;
                                            <p>{this.state.five}</p>
                                        </div>
                                        <div className='rating-rate'>
                                            <p>4 stars</p>
                                            &nbsp;&nbsp;&nbsp;
                                            <div style={{width : 60,height:12,background:'purple',marginTop:9}}></div>
                                            &nbsp;&nbsp;&nbsp;
                                            <p>{this.state.four}</p>
                                        </div>
                                        <div className='rating-rate'>
                                            <p>3 stars</p>
                                            &nbsp;&nbsp;&nbsp;
                                            <div style={{width : 40,height:12,background:'purple',marginTop:9}}></div>
                                            &nbsp;&nbsp;&nbsp;
                                            <p>{this.state.three}</p>
                                        </div>
                                        <div className='rating-rate'>
                                            <p>2 stars</p>
                                            &nbsp;&nbsp;&nbsp;
                                            <div style={{width : 30,height:12,background:'purple',marginTop:9}}></div>
                                            &nbsp;&nbsp;&nbsp;
                                            <p>{this.state.two}</p>
                                        </div>
                                        <div className='rating-rate'>
                                            <p>1 stars</p>
                                            &nbsp;&nbsp;&nbsp;
                                            <div style={{width : 20,height:12,background:'purple',marginTop:9}}></div>
                                            &nbsp;&nbsp;&nbsp;
                                            <p>{this.state.one}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <h6>What Do You Think</h6>
                            <h6>About Our Service ?</h6>

                            <center>
                                <div className='rate-btn'>
                                    <button type="button" class="btn btn-outline-primary" onClick={() => this.updateOne()}>1</button>&nbsp;&nbsp;&nbsp;
                                    <button type="button" class="btn btn-outline-secondary" onClick={() => this.updateTwo()}>2</button>&nbsp;&nbsp;&nbsp;
                                    <button type="button" class="btn btn-outline-success" onClick={() => this.updateThree()}>3</button>&nbsp;&nbsp;&nbsp;
                                    <button type="button" class="btn btn-outline-danger" onClick={() => this.updateFour()}>4</button>&nbsp;&nbsp;&nbsp;
                                    <button type="button" class="btn btn-outline-warning" onClick={() => this.updateFive()}>5</button>&nbsp;&nbsp;&nbsp;
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default addFeedback;