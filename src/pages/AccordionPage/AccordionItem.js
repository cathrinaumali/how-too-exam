import React, { useState } from "react";


const AccordionItem = (props) => {
  const [opened, setOpened] = useState(false);
  const { paragraph, title } = props;
  return (
    <div
      {...{
        className: `accordion-item, ${opened && "accordion-item--opened"}`,
        onClick: () => {
          setOpened(!opened);
        },
      }}
    >
      <div {...{ className: "accordion-item__line" }}>
        <h3 {...{ className: "accordion-item__title uppercase" }}>{title}</h3>
        <span {...{ className: "accordion-item__icon" }} />
      </div>
      <div {...{ className: "accordion-item__inner" }}>
        <div {...{ className: "accordion-item__content" }}>
          <p {...{ className: "accordion-item__paragraph" }}>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};
export default AccordionItem;
