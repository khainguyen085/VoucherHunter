import React, { useState } from "react";
import { List, Card, Button, Typography, Statistic } from "antd";
import Modal from "./Modal";

const data = [
  {
    id: "1",
    title: "Discount 50%",
    code: "ASDWQE221",
  },
  {
    id: "2",
    title: "Discount 10%",
    code: "ASD222JK23",
  },
  {
    id: "3",
    title: "Discount 15%",
    code: "OOPQQW02",
  },
  {
    id: "4",
    title: "Discount 30%",
    code: "VVNNVFJ3",
  },
];

const { Title } = Typography;

const styleColor = {
  padding: "10px",
  color: "#8ec145",
};

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

function onFinish() {
  console.log("finished!");
}

function onChange(val) {
  if (4.95 * 1000 < val && val < 5 * 1000) {
    console.log("changed!");
  }
}

const Voucher = () => {
  const [voucherData, setVoucherData] = useState({});
  const [isvisible, setisvisible] = useState(false);

  const handleOpen = (item) => {
    setisvisible(true);
    setVoucherData(item);
  };

  const onCloseModal = () => {
    setisvisible(false);
  };

  return (
    <div className="page-wrapper">
      <Title style={styleColor}>Discount Voucher</Title>
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
            <Card title={item.title}>
              <Countdown
                title="Countdown"
                value={deadline}
                onFinish={onFinish}
                onChange={onChange}
              />
              <Button
                onClick={() => {
                  handleOpen(item);
                }}
              >
                Take code
              </Button>
            </Card>
          </List.Item>
        )}
      />
      <Modal isvisible={isvisible} data={voucherData} onClose={onCloseModal} />
    </div>
  );
};
export default Voucher;
