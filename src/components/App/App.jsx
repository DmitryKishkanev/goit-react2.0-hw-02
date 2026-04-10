import { useState, useEffect } from 'react';
import Description from '../Description';
import Options from '../Options';
import Feedback from '../Feedback';
import Notification from '../Notification';
import style from '@/components/App/App.module.css';

export default function App() {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = window.localStorage.getItem('saved-reviews');

    return savedReviews
      ? JSON.parse(savedReviews)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem('saved-reviews', JSON.stringify(reviews));
  }, [reviews]);

  const options = ['Good', 'Neutral', 'Bad'];

  const updateFeedback = feedbackType => {
    setReviews(prevState => ({
      ...prevState,
      [feedbackType.toLowerCase()]: prevState[feedbackType.toLowerCase()] + 1,
    }));
  };

  const resetFeedback = () => {
    setReviews({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const positiveFeedbackPercentage = Math.round(
    (reviews.good / totalFeedback) * 100,
  );
  return (
    <div className={style.app}>
      <Description
        title={'Sip Happens Café'}
        note={
          'Please leave your feedback about our service by selecting one of the options below.'
        }
      >
        <Options
          options={options}
          onLeaveFeedback={updateFeedback}
          showReset={!!totalFeedback}
          onReset={resetFeedback}
        />
      </Description>

      <Description title={'Statistics'}>
        {totalFeedback ? (
          <Feedback
            options={options}
            values={reviews}
            total={totalFeedback}
            positiveFeedback={positiveFeedbackPercentage}
          />
        ) : (
          <Notification text={'No feedback yet'} />
        )}
      </Description>
    </div>
  );
}
