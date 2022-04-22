import React from 'react';
import 'antd/dist/antd.min.css';
import { Carousel } from 'antd';

const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const imgStyle = {
    objectFit: 'fill',
    height: '400px',
    width: '100%'
}

const Slider = () => (
    <Carousel autoplay>
        <div>
            <h3 style={contentStyle}>
                <img style={imgStyle} src="../image/voucher1.png" alt="voucher1"></img>
            </h3>
        </div>
        <div>
            <h3 style={contentStyle}>
            <img style={imgStyle} src="../image/voucher2.png" alt="voucher2"></img>
            </h3>
        </div>
        <div>
            <h3 style={contentStyle}>
            <img style={imgStyle} src="../image/voucher3.png" alt="voucher3"></img>
            </h3>
        </div>
        <div>
            <h3 style={contentStyle}>
            <img style={imgStyle} src="../image/voucher4.png" alt="voucher4"></img>
            </h3>
        </div>
        <div>
            <h3 style={contentStyle}>
            <img style={imgStyle} src="../image/voucher5.png" alt="voucher5"></img>
            </h3>
        </div>
    </Carousel>
);
export default Slider