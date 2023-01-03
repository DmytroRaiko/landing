import React, { useState } from 'react';
import InformBlock from "../InformBlock";
import Accordion from "./Accordion";

const accordionList = [
  {
    title: 'What can I do to protect our planet?',
    text: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources',
  },
  {
    title: 'How to save nature ecology?',
    text: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources',
  },
  {
    title: 'What is nature conservation?',
    text: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources',
  },
]

const InformationContent = () => {
  const [active, setActive] = useState(0);

  const changeActiveAccordion = (index) => {
    setActive((active) => active === index ? null : index);
  }

  return (
    <div className="content">
      <InformBlock
        title={"Ready to Get started?"}
        text={"When pattern is mentioned in interior design, it is easy to associate it with a geometric patterned wallpaper or colourful prints on interior fabrics."}
      >
        <button> contact us</button>
      </InformBlock>

      <Accordion
        list={accordionList}
        activeIndex={active}
        changeActive={changeActiveAccordion}
      />
    </div>
  );
};

export default InformationContent;
