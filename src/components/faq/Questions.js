import React from 'react';
import questionData from './questionData';
import QuestionDropdown from './QuestionDropdown';

const Questions = () => (
  <div className="padded-section" style={{ maxWidth: 800, margin: 'auto' }}>
    <h4 className="margin-b20">Questions &amp; Answers</h4>
    {questionData.map((faq) => <QuestionDropdown question={faq.question} answer={faq.answer} />)}
  </div>
);

export default Questions;
