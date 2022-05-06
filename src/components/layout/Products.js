import { List, Card, Image, Button, Typography } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const data = [
  {
    title: "Voucher 1",
    img: "./image/voucher1.png",
  },
  {
    title: "Voucher 2",
    img: "./image/voucher2.png",
  },
  {
    title: "Voucher 3",
    img: "./image/voucher3.png",
  },
  {
    title: "Voucher 4",
    img: "./image/voucher4.png",
  },
  {
    title: "Voucher 5",
    img: "./image/voucher1.png",
  },
  {
    title: "Voucher 6",
    img: "./image/voucher2.png",
  },
  {
    title: "Voucher 1",
    img: "./image/voucher1.png",
  },
  {
    title: "Voucher 2",
    img: "./image/voucher2.png",
  },
  {
    title: "Voucher 3",
    img: "./image/voucher3.png",
  },
  {
    title: "Voucher 4",
    img: "./image/voucher4.png",
  },
  {
    title: "Voucher 5",
    img: "./image/voucher1.png",
  },
  {
    title: "Voucher 6",
    img: "./image/voucher2.png",
  },
];

const { Title } = Typography;

const styleColor = {
  padding: "10px",
  color: "#8ec145",
};

export default () => (
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
            title={item.title}
            actions={[
              <ShoppingCartOutlined key="addToCart" />,
              <Button type="primary">Buy</Button>,
            ]}
          >
            <Image
              width={"100%"}
              height={150}
              alt="this is product img"
              src={item.img}
            />
          </Card>
        </List.Item>
      )}
    />
  </div>
);
