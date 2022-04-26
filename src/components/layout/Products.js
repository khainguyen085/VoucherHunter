import { List, Card, Image, Button, Typography } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const data = [
  {
    title: 'Voucher 1',
    img: './image/voucher1.png'
  },
  {
    title: 'Voucher 2',
    img: './image/voucher2.png'
  },
  {
    title: 'Voucher 3',
    img: './image/voucher3.png'
  },
  {
    title: 'Voucher 4',
    img: './image/voucher4.png'
  },
  {
    title: 'Voucher 5',
    img: './image/voucher1.png'
  },
  {
    title: 'Voucher 6',
    img: './image/voucher2.png'
  },
  {
    title: 'Voucher 1',
    img: './image/voucher1.png'
  },
  {
    title: 'Voucher 2',
    img: './image/voucher2.png'
  },
  {
    title: 'Voucher 3',
    img: './image/voucher3.png'
  },
  {
    title: 'Voucher 4',
    img: './image/voucher4.png'
  },
  {
    title: 'Voucher 5',
    img: './image/voucher1.png'
  },
  {
    title: 'Voucher 6',
    img: './image/voucher2.png'
  },
];

const { Title } = Typography;

const styleColor = {
  padding: '10px',
  color: '#219ebc'
}


export default () => (
  <div>
    <Title style={styleColor}>Products</Title>
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 3,
      }}
      dataSource={data}
      renderItem={item => (
        <List.Item>
            <Card title={item.title}
              actions={[
                <ShoppingCartOutlined key='addToCart' />,
                <Button type="primary">Buy</Button>
              ]}>
              <Image
                width={150}
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