import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Datas } from "../../FakeData/FakeData";
import Image from "react-bootstrap/Image";
import "./CourseDetails.css";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import Image1 from "../Image/dashboard.jpg";

const CourseDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState();
  useEffect(() => {
    Datas.map((data) => {
      if (data.id == id) {
        setDetails(data);
      }
    });
  }, []);

  const pdfExportComponent = React.useRef(null);
  const exportPDFWithMethod = () => {
    let element = document.querySelector(".k-grid") || document.body;
    savePDF(element, {
      paperSize: "A4",
    });
  };
  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };
  return (
    <div>
      <PDFExport scale={0.4} ref={pdfExportComponent} paperSize="A4">
        <Row>
          <Col xs={12} md={4}>
            <Image
              style={{ height: "100vh" }}
              src={details?.image_url}
              alt=""
            ></Image>
          </Col>
          <Col xs={12} md={8}>
            <h2>{details?.course_name}</h2>
            <p>{details?.course_details}</p>
            <h3>Books for the Course</h3>
            <div>
              {details?.Suggested_book.map((book) => {
                return (
                  <div className="d-flex main_container">
                    <img
                      style={{
                        width: "200px",
                        height: "200px",
                        marginTop: "20px",
                      }}
                      src={book.book_image}
                      alt=""
                    />

                    <div className="book_details">
                      <h4> {book.book_name}</h4>
                      <h4>Author:{book.author_name}</h4>
                      <h4>Published Year:{book.published_year}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </PDFExport>
      <div className="example-config">
        <button
          className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
          onClick={exportPDFWithComponent}
        >
          Export to PDF with component
        </button>
        &nbsp;
        <button
          className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
          onClick={exportPDFWithMethod}
        >
          Export to PDF with method
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
