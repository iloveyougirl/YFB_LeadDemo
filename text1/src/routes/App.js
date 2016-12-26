import React, { Component } from 'react'

import Header from '../components/home/header'
import Options from '../components/home/option'
import Hot from '../components/home/hot'
import ImgSlick from '../components/home/Imgslick'
//import {LoadMore} from 'react-weui'
// import RecommendGrids from 'recommendgrids'



export default class AddTodo extends Component {
    render() {
        return (
            <div>
                <div><Header/></div>
                <div><Options/></div>
                <div><ImgSlick/></div>
                <div><Hot/></div>
            </div>
        );
    }
}