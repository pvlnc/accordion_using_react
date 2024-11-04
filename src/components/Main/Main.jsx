import { useState } from "react";
import "./Main.css";
const AccordionItems = ({ title, content, isOpen, onClick }) => {
  return (
    <>
      <div className="accordin">
        <div onClick={onClick} className="header">
          <h3>{title}</h3>{" "}
          <span className="arrowIcon">{isOpen ? "-" : "+"}</span>
        </div>
        {isOpen && (
          <div>
            <p>{content}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default function Main() {
  const [isOpenIndex, setIsOpenIndex] = useState(null);
  const accordionData = [
    {
      title: "What is a React Js",
      content:
        "React, also known as ReactJS, is a popular and powerful JavaScript library used for building dynamic and interactive user interfaces, primarily for single-page applications (SPAs). It was developed and maintained by Facebook and has gained significant popularity due to its efficient rendering techniques, reusable components, and active community support.",
    },
    {
      title: "What is a JSX",
      content:
        "JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.",
    },
  ];
  const handleAccordionClosed = (index) => {
    setIsOpenIndex(isOpenIndex === index ? null : index);
  };

  return (
    <>
      {accordionData.map((item, index) => (
        <AccordionItems
          key={index}
          title={item.title}
          content={item.content}
          isOpen={isOpenIndex === index}
          onClick={() => handleAccordionClosed(index)}
        />
      ))}
    </>
  );
}
