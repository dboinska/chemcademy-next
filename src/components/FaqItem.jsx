import { useState } from 'react';

import { IoIosArrowDown } from 'react-icons/io';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="question" onClick={() => setIsOpen(!isOpen)}>
      <div className="inline">
        <h3>{question}</h3>
        <IoIosArrowDown />
      </div>
      <div className={isOpen === true ? 'answer open' : 'answer'}>{answer}</div>
    </div>
  );
};

export default FaqItem;
