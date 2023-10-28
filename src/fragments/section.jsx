import { createElement } from "preact";

export default function Section(props) {
  const chillins = props.chillins;
  const orientation = props.orientation;

  // Build array of child elements:
  const chillinsArr = [];
  for (let c of chillins) {
    if (c.type == "section") {
      chillinsArr.push(c.element);
    } else {
      let chilEle = createElement(c.type, c.attrs, c.text || c.child);
      chillinsArr.push(chilEle);
    }
  }

  return (
    <div className={`section-${orientation} section-${props.tag}`}>
      {chillinsArr}
    </div>
  );
}
