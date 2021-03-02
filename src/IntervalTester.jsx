import { sample } from "lodash";
import React from "react";

const Strings = ['1st', '2nd', '3rd', '4th', '5th', '6th'];
const Roots = ['C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B'];
const Intervals = ['m2', 'M2', 'm3', 'M3', 'P4', 'd5', 'A4', 'P5', 'm6', 'M6', 'm7', 'M7', 'P8'];

export const IntervalTester = () => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "40vh" }}>
        <div>Please perform:<br /><br /></div>
        <div>
          <b style={{ fontSize: "1.5rem" }}>{sample(Roots)}</b> on <b style={{ fontSize: "1.5rem" }}>{sample(Strings)}</b> string and all <b style={{ fontSize: "1.5rem" }}>{sample(Intervals)}</b> notes
        </div>
      </div>
      <div>
        <h4>Intervals</h4>
        <ul>
          <li>m2: Minor second</li>
          <li>M2: Major second</li>
          <li>m3: Minor third</li>
          <li>M3: Major third</li>
          <li>P4: Perfect fourth</li>
          <li>d5: Diminished fifth</li>
          <li>A4: Augmented fourth</li>
          <li>P5: Perfect fifth</li>
          <li>m6: Minor sixth</li>
          <li>M6: Major sixth</li>
          <li>m7: Minor seventh</li>
          <li>M7: Major seventh</li>
          <li>P8: Perfect octave</li>
        </ul>
      </div>
    </div>
  );
};