import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button, Card, Image, List, Typography } from "antd";

const data = [
  {
    title: "Voucher 1",
    img: "./image/voucher1.png",
    price: "300k",
  },
  {
    title: "Voucher 2",
    img: "./image/voucher2.png",
    price: "600k",
  },
  {
    title: "Voucher 3",
    img: "./image/voucher3.png",
    price: "500k",
  },
  {
    title: "Voucher 4",
    img: "./image/voucher4.png",
    price: "1100k",
  },
  {
    title: "Voucher 5",
    img: "./image/voucher1.png",
    price: "920k",
  },
];

const { Title } = Typography;

const styleColor = {
  padding: "10px",
  color: "#8ec145",
  display: "inline-block",
};

const HotProducts = () => (
  <div className="page-wrapper">
    <Title style={styleColor}>Hot Products</Title>
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
          <Badge.Ribbon text="HOT" color="red">
            <Card
              title={item.title}
              actions={[
                <ShoppingCartOutlined key="addToCart" />,
                <Button type="primary">Buy</Button>,
              ]}
            >
              <Image
                width="100%"
                height={150}
                alt="this is product img"
                src={item.img}
              />
            </Card>
          </Badge.Ribbon>
        </List.Item>
      )}
    />
  </div>
);

export default HotProducts;
