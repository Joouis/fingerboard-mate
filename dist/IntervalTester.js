import {InputNumber} from "../_snowpack/pkg/antd.js";
import {sample} from "../_snowpack/pkg/lodash.js";
import React, {useState, useEffect, useCallback} from "../_snowpack/pkg/react.js";
const Strings = ["1st", "2nd", "3rd", "4th", "5th", "6th"];
const Roots = ["C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B"];
const Intervals = ["m2", "M2", "m3", "M3", "P4", "d5", "A4", "P5", "m6", "M6", "m7", "M7", "P8"];
export const IntervalTester = () => {
  const [count, setCount] = useState(0);
  const [refreshTime, setRefreshTime] = useState(30);
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), refreshTime * 1e3);
    return () => clearTimeout(timer);
  }, [count, setCount, refreshTime]);
  const _onChange = useCallback((newVal) => {
    if (newVal && !isNaN(newVal)) {
      setRefreshTime(newVal);
    }
  }, [setRefreshTime]);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    style: {display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "40vh"}
  }, /* @__PURE__ */ React.createElement("div", null, "Please perform:", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("b", {
    style: {fontSize: "1.5rem"}
  }, sample(Roots)), " on ", /* @__PURE__ */ React.createElement("b", {
    style: {fontSize: "1.5rem"}
  }, sample(Strings)), " string and its all ", /* @__PURE__ */ React.createElement("b", {
    style: {fontSize: "1.5rem"}
  }, sample(Intervals)), " notes"), /* @__PURE__ */ React.createElement("div", {
    style: {marginTop: "3vh"}
  }, "Refresh seconds: ", /* @__PURE__ */ React.createElement(InputNumber, {
    min: 1,
    max: 1e4,
    defaultValue: refreshTime,
    onChange: _onChange
  }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", null, "Intervals"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "m2: Minor second"), /* @__PURE__ */ React.createElement("li", null, "M2: Major second"), /* @__PURE__ */ React.createElement("li", null, "m3: Minor third"), /* @__PURE__ */ React.createElement("li", null, "M3: Major third"), /* @__PURE__ */ React.createElement("li", null, "P4: Perfect fourth"), /* @__PURE__ */ React.createElement("li", null, "d5: Diminished fifth"), /* @__PURE__ */ React.createElement("li", null, "A4: Augmented fourth"), /* @__PURE__ */ React.createElement("li", null, "P5: Perfect fifth"), /* @__PURE__ */ React.createElement("li", null, "m6: Minor sixth"), /* @__PURE__ */ React.createElement("li", null, "M6: Major sixth"), /* @__PURE__ */ React.createElement("li", null, "m7: Minor seventh"), /* @__PURE__ */ React.createElement("li", null, "M7: Major seventh"), /* @__PURE__ */ React.createElement("li", null, "P8: Perfect octave"))));
};
