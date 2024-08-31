import React from 'react';




interface QuestionProps {
  question: string;
  options: string[];
}

const Question: React.FC<QuestionProps> = ({ question, options }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index} className="py-2">
            <label>
              <input type="radio" name="option" className="mr-2" />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
