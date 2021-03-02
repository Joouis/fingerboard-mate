import { sample } from "lodash";
import React from "react";

const Strings = ['1st', '2nd', '3rd', '4th', '5th', '6th'];
const Roots = ['C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B'];
const Intervals = ['m2', 'M2', 'm3', 'M3', 'P4', 'd5', 'A4', 'P5', 'm6', 'M6', 'm7', 'M7', 'P8'];

export const IntervalTester = () => {
  return (
    <div>
      Please perform:<br /><br />
      <ul>
        <li><b>{sample(Roots)}</b> on <b>{sample(Strings)}</b> string</li>
        <li>Its all <b>{sample(Intervals)}</b> notes</li>
      </ul>
    </div>
  );
};