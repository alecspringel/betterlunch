import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import FAQ from '../../data/faq';
import QuestionDropdown from './QuestionDropdown';

const Questions = () => (
  <PaddedSection className="padded-section" style={{ maxWidth: 800, margin: 'auto' }}>
    <h4 className="margin-b20">Frequently Asked Questions &amp; Answers</h4>
    {FAQ.map((faq) => <QuestionDropdown question={faq.question} answer={faq.answer} />)}
    <p className="margin-t20">
      Didn&apos;t find what you were looking for?
      <Link className="p text-orange no-decoration" to="/contact"> Ask us a question</Link>
    </p>
  </PaddedSection>
);

export default Questions;

const PaddedSection = styled.div`
  @media (max-width: 500px) {
    padding-top: 2.5rem;
  }
`;
