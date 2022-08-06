import React, { Fragment } from "react";
import "./index.css";

const FaqItem = ({ qa }) => {
  return (
    <Fragment>
      <div className="faq-card-item">
        <div className="faq-card-question">
          <span className="faq-card-Q">Q</span>
          <div className="faq-card-question-text">{qa.question}</div>
        </div>
        <div className="faq-card-answer">
          <span className="faq-card-A">A</span>
          <div className="faq-card-answer-text">{qa.answer}</div>
        </div>
        {qa.image && (
          <img
            src={qa.image}
            className="faq-card-answer-img"
            alt="info-img.png"
          />
        )}
      </div>
    </Fragment>
  );
};

export default FaqItem;
