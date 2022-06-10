import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Card, Image, List, notification, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: "Đã thêm vào giỏ hàng",
    description:
      "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
  });
};
const data = [
  {
    title: "Voucher 1",
    img: "./image/voucher1.png",
    price: "300",
  },
  {
    title: "Voucher 2",
    img: "./image/voucher2.png",
    price: "295",
  },
  {
    title: "Voucher 3",
    img: "./image/voucher3.png",
    price: "500",
  },
  {
    title: "Voucher 4",
    img: "./image/voucher4.png",
    price: "120",
  },
  {
    title: "Voucher 5",
    img: "./image/voucher1.png",
    price: "220",
  },
  {
    title: "Voucher 6",
    img: "./image/voucher2.png",
    price: "400",
  },
  {
    title: "Voucher 1",
    img: "./image/voucher1.png",
    price: "520",
  },
  {
    title: "Voucher 2",
    img: "./image/voucher2.png",
    price: "60",
  },
  {
    title: "Voucher 3",
    img: "./image/voucher3.png",
    price: "100",
  },
  {
    title: "Voucher 4",
    img: "./image/voucher4.png",
    price: "80",
  },
  {
    title: "Voucher 5",
    img: "./image/voucher1.png",
    price: "200",
  },
  {
    title: "Voucher 6",
    img: "./image/voucher2.png",
    price: "50",
  },
];

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
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card
              key={item.id}
              style={cardColor}
              title={item.title}
              actions={[
                <div style={styleCart} className="cart-container">
                  <p>Add to cart</p>
                  <ShoppingCartOutlined
                    key="addToCart"
                    onClick={() => openNotificationWithIcon("success")}
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
                src={item.img}
              />
              <h5>{item.price}$</h5>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Products;
