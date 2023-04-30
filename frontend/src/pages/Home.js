import React, { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import { useSelector, useDispatch } from "react-redux";
import { getAllCars, searchCars, sortCars } from "../redux/actions/carsActions";
import { Link } from "react-router-dom";
import { Input, Modal, Form, Select, Button } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import Loading from "../components/Loading";
const { Search } = Input;
const { Option } = Select;

const Home = () => {
  const dispatch = useDispatch();
  const { cars ,loading} = useSelector((state) => state.carsReducer);
  console.log("====================================");
  console.log(cars);
  console.log("====================================");

  useEffect(() => {
    dispatch(getAllCars());
  }, []);
  const [isModalVisible, setIsModalVisible] = useState(false);

  //search
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function sort(values) {
    dispatch(sortCars(values));

    handleCancel();
  }
  return (
    <>
     
      {
        loading?(<Loading/>):(
          <>
          <div className="sortAndSearch">
        <Search
          className="search-box"
          enterButton
          size="large"
          placeholder="search car brand"
          onSearch={(value) => {
            dispatch(searchCars(value));
          }}
        />

        <FilterOutlined onClick={showModal} className="modalView" />
      </div>

      <Modal
        title="Select filters"
        footer={false}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
      >
        <Form layout="vertical" onFinish={sort}>
          <Form.Item name="rentPerHour" label="Rent Per Hour">
            <Select>
              <Option value={500}>500+</Option>
              <Option value={1000}>1000+</Option>
              <Option value={1500}>1500+</Option>
              <Option value={2000}>2000+</Option>
            </Select>
          </Form.Item>
          <Button htmlType="submit">Filter</Button>
        </Form>
      </Modal>
            <div className="gallery">
      
        {cars.map((car,index) => {
          return (
            <>
              <div key={index} className="car-content">
                <Link to={`/booking/${car._id}`}>
                  <img src={car.image} alt="car-image" className="car-image" />
                </Link>

                <h3> {car.name} </h3>
                <h6> ₹{car.rentPerHour} </h6>
                <button className="book-btn">
                  <Link to={`/booking/${car._id}`}>Book Now</Link>
                </button>
              </div>
            </>
          );
        })}
      </div>
          </>

        )
      }
      
    </>
  );
};

export default Home;

/*
<div className="car-header" >
          <>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={car.image} />
              <Card.Body  >
                <Card.Title>{car.name} </Card.Title>
                
        <Card.Text>Rent Per Hour : ₹{car.rentPerHour}</Card.Text>
        <Button variant="primary" href={`/booking/${car._id}`}>
          Book Now
        </Button>
      </Card.Body>
    </Card>
  </>
    
  </div>






*/
