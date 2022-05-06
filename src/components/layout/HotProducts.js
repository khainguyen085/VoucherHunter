import { List, Card, Image, Button, Typography, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const data = [
    {
        title: 'Voucher 1',
        img: './image/voucher1.png',
        price: '300k'
    },
    {
        title: 'Voucher 2',
        img: './image/voucher2.png',
        price: '600k'
    },
    {
        title: 'Voucher 3',
        img: './image/voucher3.png',
        price: '500k'
    },
    {
        title: 'Voucher 4',
        img: './image/voucher4.png',
        price: '1100k'
    },
    {
        title: 'Voucher 5',
        img: './image/voucher1.png',
        price: '920k'
    },
];

const { Title } = Typography;

const styleColor = {
    padding: '10px',
    color: '#219ebc',
    display: 'inline-block'
}


export default () => (
    <div>
        <Title style={styleColor}>Hot Products
        </Title>
        <List
            grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 5,
                xxl: 3,
            }}
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <Badge.Ribbon text="HOT" color="red">
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
                    </Badge.Ribbon>
                </List.Item>
            )}
        />
    </div>
);