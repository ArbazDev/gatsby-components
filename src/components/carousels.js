// import * as React from "react";
import React, {Component} from "react";
import $ from 'jquery';
import ReactDOM from "react-dom";
 

import "./carousels.css"

import img1 from "../images/a1.jpg"
import img2 from "../images/a2.jpg"
import img3 from "../images/a3.jpg"
import img4 from "../images/a4.jpg"


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> 




const Carousel=()=>(
    <div class="container">
        <header class="cont">
            <div class="col-sm-6 col-lg-3 m-3 p-3">
                <div id="my-carousel0" class="carousel slide" data-toggle="modal" data-target="#mymodal" data-interval="5000">
                    <ol class="carousel-indicators" >
                        <li data-target="#my-carousel0" data-slide-to="0" class="active"></li>
                        <li data-target="#my-carousel0" data-slide-to="1"></li>
                        <li data-target="#my-carousel0" data-slide-to="2"></li>
                        <li data-target="#my-carousel0" data-slide-to="3"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="img1" src={img1} alt="i1" style={{width: "100%"}}></img>
                        </div>
                        <div class="carousel-item" >
                            <img class="img2" src={img2} alt="i2" style={{width: "100%"}}></img>
                
                        </div>
                        <div class="carousel-item">
                            <img class="img3" src={img3} alt="i3" style={{width: "100%"}}></img>
                        </div>             
                        <div class="carousel-item">
                            <img class="img4" src={img4} alt="i4" style={{width: "100%"}}></img>
                            
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-sm-6 col-lg-3 m-3 p-3">
                <div id="my-carousel1" class="carousel slide" data-toggle="modal" data-target="#mymodal">
                    <ol class="carousel-indicators" >
                        <li data-target="#my-carousel1" data-slide-to="0" class="active"></li>
                        <li data-target="#my-carousel1" data-slide-to="1"></li>
                        <li data-target="#my-carousel1" data-slide-to="2"></li>
                        <li data-target="#my-carousel1" data-slide-to="3"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="img1" src={img1} alt="i1" style={{width: "100%"}}></img>
                        </div>
                        <div class="carousel-item" >
                            <img class="img2" src={img2} alt="i2" style={{width: "100%"}}></img>
                
                        </div>
                        <div class="carousel-item">
                            <img class="img3" src={img3} alt="i3" style={{width: "100%"}}></img>
                        </div>             
                        <div class="carousel-item">
                            <img class="img4" src={img4} alt="i4" style={{width: "100%"}}></img>
                            
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-sm-6 col-lg-3 m-3 p-3" >
                <div id="my-carousel2" class="carousel slide" data-toggle="modal" data-target="#mymodal">
                    <ol class="carousel-indicators">
                        <li data-target="#my-carousel2" data-slide-to="0" class="active"></li>
                        <li data-target="#my-carousel2" data-slide-to="1"></li>
                        <li data-target="#my-carousel2" data-slide-to="2"></li>
                        <li data-target="#my-carousel2" data-slide-to="3"></li>
                    </ol>
                    <div class="carousel-inner" >
                        <div class="carousel-item  text-center" data-interval="2000" >
                            <img src={img1} alt="slide-2"></img>
                        </div>
                        <div class="carousel-item  text-center" data-interval="3000" >
                            <img src={img2} alt="slide-3"></img>
                        </div>
                        <div class="carousel-item text-center" data-interval="4000" >
                            <img src={img3} alt="slide-4"></img>
                        </div>
                        <div class="carousel-item text-center" data-interval="5000" >
                            <img src="img4" alt="slide-4"></img>
                        </div>
                            
                       
                    </div>
                </div>
            </div>
              
            <div id="mymodal" class="modal fade" tabindex="-1" role="document" aria-labelledby="my-modal-title" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div class="modal-content bg-dark">
                        <div class="modal-header bg-secondary">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div id="my-carousel" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators" >
                                    <li data-target="#my-carousel" data-slide-to="0" class="active"></li>
                                    <li data-target="#my-carousel" data-slide-to="1"></li>
                                    <li data-target="#my-carousel" data-slide-to="2"></li>
                                    <li data-target="#my-carousel" data-slide-to="3"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item active" >
                                        <img class="img1" src={img1} alt="i1" style={{width: "100%"}}></img>
                                    </div>
                                    <div class="carousel-item" >
                                        <img class="img2" src={img2} alt="i2" style={{width: "100%"}}></img>
                            
                                    </div>
                                    <div class="carousel-item" >
                                        <img class="img3" src={img3} alt="i3" style={{width: "100%"}}></img>
                                    </div>             
                                    <div class="carousel-item" >
                                        <img class="img4" src={img4} alt="i4" style={{width: "100%"}}></img>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <h6>land of atthens</h6>   
                            <p>Lorem ipsum dolor sit amet, consectetur csdkm smv slm dmv ldmnk bdndkn quisquam dkjvde kdsvjd dk  temporibus dolore</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="mymodal" class="modal fade" tabindex="-1" role="document" aria-labelledby="my-modal-title" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div class="modal-content bg-dark">
                        <div class="modal-header bg-secondary">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div id="my-carousel" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators" >
                                    <li data-target="#my-carousel" data-slide-to="0" class="active"></li>
                                    <li data-target="#my-carousel" data-slide-to="1"></li>
                                    <li data-target="#my-carousel" data-slide-to="2"></li>
                                    <li data-target="#my-carousel" data-slide-to="3"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item active" >
                                        <img class="img1" src={img1} alt="i1" style={{width: "100%"}}></img>
                                    </div>
                                    <div class="carousel-item" >
                                        <img class="img2" src={img2} alt="i2" style={{width: "100%"}}></img>
                            
                                    </div>
                                    <div class="carousel-item" >
                                        <img class="img3" src={img3} alt="i3" style={{width: "100%"}}></img>
                                    </div>             
                                    <div class="carousel-item" >
                                        <img class="img4" src={img4} alt="i4" style={{width: "100%"}}></img>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <h6>land of atthens</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adie sed, quisquam temporibus fdjdk dfjvdk fkdjbv dolore</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="mymodal2" class="modal fade" tabindex="-1" role="document" aria-labelledby="my-modal-title" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div class="modal-content bg-dark">
                        <div class="modal-header bg-secondary">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div id="my-carousel" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators" >
                                    <li data-target="#my-carousel" data-slide-to="0" class="active"></li>
                                    <li data-target="#my-carousel" data-slide-to="1"></li>
                                    <li data-target="#my-carousel" data-slide-to="2"></li>
                                    <li data-target="#my-carousel" data-slide-to="3"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item active" >
                                        <img class="img1" src={img1} alt="i1" style={{width: "100%"}}></img>
                                    </div>
                                    <div class="carousel-item" >
                                        <img class="img2" src={img2} alt="i2" style={{width: "100%"}}></img>
                            
                                    </div>
                                    <div class="carousel-item" >
                                        <img class="img3" src={img3} alt="i3" style={{width: "100%"}}></img>
                                    </div>             
                                    <div class="carousel-item" >
                                        <img class="img4" src={img4} alt="i4" style={{width: "100%"}}></img>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <h5>land of atthens</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adie sed, quisquam temporibus dkeve sdhj hdfvk dolore</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
       
    </div>
)
export default Carousel