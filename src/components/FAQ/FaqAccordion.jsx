import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaPlus } from "react-icons/fa6";
import { TbMinusVertical } from "react-icons/tb";

const FaqAccordion = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const data = [
    {
      id: 1,
      title: "What services does Labors Of Tech offer?",
      content:
        "We offer a wide range of services including web development, UI/UX design, mobile app development, and digital marketing to help your business grow online.",
    },
    {
      id: 2,
      title: "How do I start a project with Labors Of Tech?",
      content:
        "You can start by contacting us through our website's contact form, email, or phone. We'll discuss your project requirements and provide a customized plan.",
    },
    {
      id: 3,
      title: "What is your pricing model?",
      content:
        "Our pricing model varies based on the project scope and requirements. We offer both fixed-price and hourly rate options to suit different needs.",
    },
    {
      id: 4,
      title: "How long does it take to complete a project?",
      content:
        "The timeline depends on the project's complexity and scope. Typically, a standard website project takes 4-6 weeks, while larger projects may take longer.",
    },
    {
      id: 5,
      title: "Do you offer post-launch support?",
      content:
        "Yes, we provide ongoing support and maintenance services to ensure your website or application remains up-to-date and functional.",
    },
    {
      id: 6,
      title: "How do you ensure the security of my project?",
      content:
        "We implement robust security measures, including secure coding practices and regular security audits, to protect your project from vulnerabilities.",
    },
  ];

  const [selectedKeys, setSelectedKeys] = useState("0");

  const itemClasses = {
    title: "font-normal text-medium",
    trigger: "px-2 py-0 bg-transparent rounded-lg h-14 flex items-center",
    indicator: "text-medium",
    content: "text-medium max-w-4xl px-2 pb-8 pt-1 bg-white text-[#212121]",
  };

  return (
    <div className="mt-10">
      <Accordion
        variant="splitted"
        itemClasses={itemClasses}
        className="bg-transparent"
        selectedKeys={selectedKeys}
        onSelectionChange={(e) => setSelectedKeys(e)}
      >
        {data?.map((item, index) => (
          <AccordionItem
            key={item.id}
            aria-label={`Accordion ${item.id}`}
            title={item.title}
            indicator={({ isOpen }) =>
              isOpen ? (
                <TbMinusVertical fontSize={18} color="#212121" />
              ) : (
                <FaPlus fontSize={18} />
              )
            }
            classNames={
              String(index + 1) === selectedKeys?.currentKey
                ? {
                    title: "text-[#212121] md:text-large text-[14px]",
                    content: "text-[#212121] md:text-medium text-[14px] pt-5",
                  }
                : {
                    title: "text-gray-200 md:text-large text-[14px]",
                    content: "max-w-sm md:text-medium text-[14px]",
                  }
            }
            style={
              String(index + 1) === selectedKeys?.currentKey
                ? {
                    marginBottom: "1rem",
                    padding: ".6rem 1rem",
                  }
                : {
                    backgroundColor: "transparent",
                    border: "1px solid #A1AEBF",
                    marginBottom: "1rem",
                    padding: ".6rem 1rem",
                  }
            }
          >
            {item.content ? item.content : defaultContent}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
