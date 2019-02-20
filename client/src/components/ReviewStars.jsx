import styled from 'styled-components';
import React from 'react';

const ReviewStars = ({ rating, starSize = 16 }) => {
  const ReviewStarsWrapper = styled.span`
  font-size: 0;
  display: inline-block;
  width: ${starSize * 5}px;
  height: ${starSize + 5}px;
  `;

  const Stars = styled.span`
  display: block
  position: relative;
  white-space: nowrap;
  `;

  const ReviewStarsInactive = styled.span`
  position: absolute;
  `;

  const ReviewStarsActive = styled.span`
  overflow: hidden;
  position: absolute;
  width: ${rating / 5 * 100}%;
  `;

  const InactiveStar = styled.svg`
  fill: #e3e3e3;
  stroke: #e3e3e3;
  focusable: false;
  height: ${starSize}px;
  width: ${starSize}px;
  `;

  const ActiveStar = styled(InactiveStar)`
  fill: #000;
  stroke: #000;
  `;

  const SmallStar = styled.path`
  
  `;

  const LargeStar = styled.path`
  d: M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z;
  `;
  
  if (starSize === 24) {
    return (
      <ReviewStarsWrapper>
        <Stars>
          <ReviewStarsInactive>
            <InactiveStar><path d="M11.996 1.5l2.6 8.02H23l-6.802 4.959 2.596 8.021-6.798-4.958L5.198 22.5l2.596-8.021L1 9.52h8.4z" /></InactiveStar>
            <InactiveStar><path d="M11.996 1.5l2.6 8.02H23l-6.802 4.959 2.596 8.021-6.798-4.958L5.198 22.5l2.596-8.021L1 9.52h8.4z" /></InactiveStar>
            <InactiveStar><path d="M11.996 1.5l2.6 8.02H23l-6.802 4.959 2.596 8.021-6.798-4.958L5.198 22.5l2.596-8.021L1 9.52h8.4z" /></InactiveStar>
            <InactiveStar><path d="M11.996 1.5l2.6 8.02H23l-6.802 4.959 2.596 8.021-6.798-4.958L5.198 22.5l2.596-8.021L1 9.52h8.4z" /></InactiveStar>
            <InactiveStar><path d="M11.996 1.5l2.6 8.02H23l-6.802 4.959 2.596 8.021-6.798-4.958L5.198 22.5l2.596-8.021L1 9.52h8.4z" /></InactiveStar>
          </ReviewStarsInactive>
          <ReviewStarsActive>
            <ActiveStar><path d="M11.996 1.5l2.6 8.02H23l-6.802 4.959 2.596 8.021-6.798-4.958L5.198 22.5l2.596-8.021L1 9.52h8.4z" /></ActiveStar>
            <ActiveStar><path d="M11.996 1.5l2.6 8.02H23l-6.802 4.959 2.596 8.021-6.798-4.958L5.198 22.5l2.596-8.021L1 9.52h8.4z" /></ActiveStar>
            <ActiveStar><path d="M11.996 1.5l2.6 8.02H23l-6.802 4.959 2.596 8.021-6.798-4.958L5.198 22.5l2.596-8.021L1 9.52h8.4z" /></ActiveStar>
            <ActiveStar><path d="M11.996 1.5l2.6 8.02H23l-6.802 4.959 2.596 8.021-6.798-4.958L5.198 22.5l2.596-8.021L1 9.52h8.4z" /></ActiveStar>
            <ActiveStar><path d="M11.996 1.5l2.6 8.02H23l-6.802 4.959 2.596 8.021-6.798-4.958L5.198 22.5l2.596-8.021L1 9.52h8.4z" /></ActiveStar>
          </ReviewStarsActive>
        </Stars>
      </ReviewStarsWrapper>
    );
  }

  return (
    <ReviewStarsWrapper>
      <Stars>
        <ReviewStarsInactive>
          <InactiveStar><path d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" /></InactiveStar>
          <InactiveStar><path d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" /></InactiveStar>
          <InactiveStar><path d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" /></InactiveStar>
          <InactiveStar><path d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" /></InactiveStar>
          <InactiveStar><path d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" /></InactiveStar>
        </ReviewStarsInactive>
        <ReviewStarsActive>
          <ActiveStar><path d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" /></ActiveStar>
          <ActiveStar><path d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" /></ActiveStar>
          <ActiveStar><path d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" /></ActiveStar>
          <ActiveStar><path d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" /></ActiveStar>
          <ActiveStar><path d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" /></ActiveStar>
        </ReviewStarsActive>
      </Stars>
    </ReviewStarsWrapper>
  );
};


export default ReviewStars;
