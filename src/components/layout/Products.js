import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Card, Image, List, notification, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from 'react';

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: "Đã thêm vào giỏ hàng",
    description:
    "Hãy tiếp tục mua sắm hoặc bấm checkout trong phần giỏ hàng để thanh toán ngay nhé!"
  });
};



const { Title } = Typography;

const styleColor = {
  color: "#8ec145",
};

const cardColor = {
  border: "1px solid silver",
  borderRadius: "10px",
  padding: "5px",
  backgroundColor: "#ffb3c1",
};

const styleCart = {
  backgroundColor: "white",
  color: "black",
  border: "1px solid white",
  borderTopLeftRadius: "20px",
  borderBottomLeftRadius: "20px",
  borderBottomRightRadius: "20px",
  borderTopRightRadius: "20px",
  height: "30px",
  marginRight: "10px",
  marginLeft: "10px",
};

const Products = () => {
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
      <Title style={styleColor}>Products</Title>
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
            <Card
              key={item._id}
              style={cardColor}
              title={item.name}
              actions={[
                <div style={styleCart} className="cart-container" onClick={() => openNotificationWithIcon("success")}>
                  <p>Add to cart</p>
                  <ShoppingCartOutlined
                    key="addToCart"                  
                  />
                </div>,
                <Button type="primary" onClick={() => navigate("/checkout")}>
                  Buy
                </Button>,
              ]}
            >
              <Image
                width={"100%"}
                height={150}
                alt="this is product img"
                src={item.images[0]}
              />
              <h5>{Intl.NumberFormat().format(item.price)}VNĐ</h5>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Products;
