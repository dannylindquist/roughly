const hs = [
  'twelve',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
];

let e = ["o'clock", 'five', 'ten', 'quarter', 'twenty', 'twenty-five', 'half'];

type RoughTimeObject = {
  date: Date;
  hour: string;
  estimate: string;
  transition: string;
  parts: Array<string>;
  toString: () => string;
};

export default function roughTime(d?: Date): RoughTimeObject {
  var n = d || new Date();
  var s = n.getMinutes();
  s = s > 30 ? 30 - (s - 30) : s;
  var m = Math.round(s / 5);
  var hh = Math.round(n.getMinutes() / 5);
  var h = (n.getMinutes() > 30 ? n.getHours() + 1 : n.getHours()) % 12;
  var ht = hs[h >= 12 ? 0 : h];
  var t = m === 0 ? '' : hh > 6 ? 'to' : 'past';
  return {
    date: n,
    hour: ht,
    estimate: e[m],
    transition: t,
    parts: [m === 0 ? ht : `${e[m]} ${t}`, m === 0 ? e[m] : ht],
    toString: function() {
      return `it's about ${this.parts[0]} ${this.parts[1]}`;
    },
  };
}
