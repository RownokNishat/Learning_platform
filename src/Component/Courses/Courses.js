import React from "react";
import "./Courses.css";
import { Datas } from "../../FakeData/FakeData";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Courses = () => {
  return (
    <div>
      <div className="main_container">
        <div className="side_bar">
          {Datas?.map((data) => {
            return (
              <div
                style={{
                  textDecoration: "none",
                  fontSize: "larger",
                  fontWeight: "bolder",
                  textAlign: "start",
                  marginTop: "30px",
                  paddingLeft: "20px",
                }}
              >
                <Link
                  to={`/coursesDetails/${data.id}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {data.course_name}
                </Link>
              </div>
            );
          })}
        </div>

        <div className="courses_div">
          <h2 className="mb-5 mt-5"> All Courses</h2>
          <Row xs={1} md={3} className="g-4">
            {Datas?.map((data) => {
              return (
                <div key={data?.id}>
                  <Col>
                    <Card>
                      <Card.Img
                        variant="top"
                        src={data.image_url}
                        className="Course_image"
                      />
                      <Card.Body>
                        <Card.Title>{data.course_name}</Card.Title>
                        <Card.Text className="text">
                          Course Fee:${data.course_fee}
                        </Card.Text>
                        <Card.Text className="text">
                          Total Student:${data.total_student}
                        </Card.Text>
                        <div className=" btn-course">
                          <button style={{ padding: "10px" }}>
                            <Link
                              style={{
                                textDecoration: "none",
                                color: "white",
                              }}
                              to={`/coursesDetails/${data.id}`}
                              variant="success"
                            >
                              Course Details
                            </Link>
                          </button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </div>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Courses;
