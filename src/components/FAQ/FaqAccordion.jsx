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
      title: "What industries do you work with?",
      content: "",
    },
    {
      id: 2,
      title: "How do you ensure the security of the developed solutions?",
      content: "",
    },
    {
      id: 3,
      title:
        "How do you handle changes or revisions during the development process?",
      content:
        "Detail the support and maintenance services your company offers post-project completion, including troubleshooting, updates, and enhancements. Provide information on your pricing model, whether it's based on fixed-price contracts, hourly rates, or custom quotes tailored to each project's requirements.",
    },
    {
      id: 4,
      title: "Do you provide ongoing support and maintenance?",
      content: "",
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
