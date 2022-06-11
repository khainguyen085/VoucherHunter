import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button, Card, Image, List, notification, Typography } from "antd";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: "Đã thêm vào giỏ hàng",
    description:
    "Hãy tiếp tục mua sắm hoặc bấm checkout trong phần giỏ hàng để thanh toán ngay nhé!"
  });
};



const { Title } = Typography;

const styleColor = {
  padding: "10px",
  color: "#8ec145",
  display: "inline-block",
};

const cardColor = {
  border: "1px solid silver",
  borderRadius: "10px",
  padding: "5px",
  backgroundColor: "#ffb3c1",

}

const styleCart = {
  backgroundColor: "white",
  color: "black",
  border: "1px solid white",
  borderTopLeftRadius: "30px",
  borderBottomLeftRadius: "30px",
  borderBottomRightRadius: "30px",
  borderTopRightRadius: "30px",
  height: "30px",
}

const HotProducts = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);

  const fetchCard = async () => {
  const response = await fetch(
      "https://voucher-hunter.herokuapp.com/api/product/all"
    );
   const data = await response.json();
    setCards(data.products);
  };

  useEffect(() => {
    fetchCard();
  }, []);
  return (
    <div className="page-wrapper">
      <Title style={styleColor}>Hot Products</Title>
      <List
        grid={{
          gutter: 24,
          xs: 1,
          sm: 2,
          column: 4,
        }}
        dataSource={cards}
        renderItem={(item) => (
          <List.Item>
            <Badge.Ribbon text="HOT" color="red">
              <Card
                key={item._id}
                style={cardColor}
                title={item.name}
                actions={[
                  <div style={styleCart} className="cart-container" onClick={() => openNotificationWithIcon("success")}>
                    <p>Add to cart</p>
                    <ShoppingCartOutlined key="addToCart" />
                  </div>,
                  <Button type="primary">Buy</Button>,
                ]}
              >
                <Image
                  width="100%"
                  height={150}
                  alt="this is product img"
                  src={item.images[0]}
                />
                <h5>{Intl.NumberFormat().format(item.price)}VNĐ</h5>
              </Card>
            </Badge.Ribbon>
          </List.Item>
        )}
      />
    </div>
  )
}

export default HotProducts;
