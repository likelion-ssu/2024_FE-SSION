import { useState } from "react";
import styled from "styled-components";
import Calendar, { CalendarProps } from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DateComponent = () => {
  const [today, setToday] = useState<Date>(new Date());

  const onChangeToday: CalendarProps["onChange"] = (date) => {
    setToday(date as Date);
  };

  return (
    <CalendarBox>
      <StyleCalendar locale="en" onChange={onChangeToday} value={today} />
    </CalendarBox>
  );
};

export default DateComponent;

export const CalendarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const StyleCalendar = styled(Calendar)`
  width: 80%;
  height: 100%;
  border: none;
  padding: 25rem;

  .react-calendar__navigation {
    display: flex;
    height: 5rem;
    margin-bottom: 1em;
    font-size: 1rem;
  }

  .react-calendar__navigation button {
    min-width: 2.4rem;
    background-color: none;
  }

  .react-calendar__navigation button:disabled {
    background-color: #e8e8e8;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e8e8e8;
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-size: 0.8em;
    height: 2rem;
    line-height: 2rem;
  }

  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 1em 0.5em;
  }

  .react-calendar__tile--hasActive {
    color: #ffffff;
    background-color: #797979;
    border-radius: 1rem;
  }

  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background-color: #797979;
  }

  .react-calendar__tile--active {
    color: #ffffff;
    background-color: #6a6a6a;
    border-radius: 1rem;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background-color: #6a6a6a;
  }
`;
