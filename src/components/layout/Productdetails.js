import React, { useState } from 'react'
import { Row, Col, Image, Rate, Button } from "antd"


const Productdetails = () => {

    const [counter, setCounter] = useState(0);
    const increase = () => {
        setCounter(count => count + 1);
    };

    //decrease counter
    const decrease = () => {
        if (counter > 0) {
            setCounter(count => count - 1);
        }
    };
    return (
        <div className='page-wrapper' style={{ lineHeight: "2.5" }}>
            <h1 style={{ textAlign: "center" }}>Product details</h1>
            <Row gutter={[16, 16]}>
                <Col span={12} >
                    <Image
                        width={200}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />


                </Col>
                <Col span={12}>
                    <h1
                        className='title_procduct'
                        style={{ fontSize: "30px", fontWeight: "400" }}
                    >Quả óc chó</h1>
                    <div className='link_product'>
                        <div className='group_status'>
                            <span className='first_status'>Thương hiệu :
                                <span className='status_name' style={{ color: "#91ad41" }}> Đang cập nhập</span>
                            </span>

                            <span className='second_status' style={{ marginLeft: "10px" }}>|  Tình trạng :
                                <span className='status_name2' style={{ color: "#91ad41" }}> Còn hàng</span>
                            </span>
                        </div>
                        <div>
                            Đánh giá : <Rate disabled defaultValue={3} />
                        </div>
                    </div>
                    <div className='price_box'>
                        <span className='special_price' style={{ color: "#91ad41", fontSize: "24px", fontWeight: "bold" }}>
                            <span className='price_product'>430.000đ</span>
                        </span>
                        <span className='old_price' style={{ color: "#8d90a6", fontSize: "14px" }}>
                            <del className='sale_product'>450.000đ</del>

                        </span>

                    </div>
                    <div className='product_sumary'>
                        <div className='procduct_description' style={{ textAlign: "justify" }}>
                            <p>Nguồn gốc : Mỹ</p>
                            <p>Khối lượng : 1kg/hộp</p>
                            <p>Quả óc chó giúp bà bầu bổ sung các chất dinh dưỡng thiết yếu nhất như Omega-3, Vitamin E, phốt pho và Axit Amin L-Arginne.</p>
                        </div>

                    </div>
                    <div>

                        <div className="btn__container">
                            <span>Số lượng : </span>

                            <Button onClick={decrease} shape="circle" >-</Button>


                            <Button shape="circle" style={{ margin: "6px" }}>{counter}</Button>


                            <Button onClick={increase} shape="circle" >+</Button>

                            {/* <button className="control__btn" onClick={decrease}>-</button>
                            <button>{counter}</button>
                            <button className="control__btn" onClick={increase}>+</button> */}

                        </div>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <Button shape="round" style={{ backgroundImage: "-webkit-linear-gradient(35deg, #91ad41 0%, #ff8a6c 100%)", color: "white", height: "45px", width: "270px", padding: "0px 20px" }}>
                            Thêm vào giỏ hàng
                        </Button>
                    </div>
                    <div className='call_phone' style={{ marginTop: "10px" }}>
                        <span style={{ fontSize: "14px", color: "#707070" }}>Gọi đặt mua :
                            <a href='*'> 1900345234 </a>
                            để nhanh chóng đặt hàng
                        </span>

                    </div>

                </Col>
            </Row>
        </div>
    )
}
export default Productdetails;
