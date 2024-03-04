"use client";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { DateRange } from "react-date-range";
import { useState } from "react";
import { eachDayOfInterval } from "date-fns";

const Calender = ({
  reservation,
}: {
  reservation:
    | {
        startDate: Date;
        endDate: Date;
      }[]
    | undefined;
}) => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  let disabledDates: Date[] = [];
  reservation?.forEach((resItem) => {
    const dateRange = eachDayOfInterval({
      start: new Date(resItem.startDate),
      end: new Date(resItem.endDate),
    });

    disabledDates = [...disabledDates, ...dateRange];
  });

  return (
    <>
      <input
        type="hidden"
        name="startDate"
        value={state[0].startDate.toISOString()}
      />
      <input
        type="hidden"
        name="endDate"
        value={state[0].endDate.toISOString()}
      />
      <DateRange
        date={new Date()}
        showDateDisplay={false}
        rangeColors={["#FF5A5F"]}
        ranges={state}
        onChange={(item) => setState([item.selection] as any)}
        minDate={new Date()}
        direction="vertical"
        disabledDates={disabledDates}
      />
    </>
  );
};

export default Calender;
