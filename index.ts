const hours = [
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

const estimates = [
  "o'clock",
  'five',
  'ten',
  'quarter',
  'twenty',
  'twenty-five',
  'half',
];

type RoughTimeObject = {
  date: Date;
  hour: string;
  estimate: string;
  transition: string;
  toString: () => string;
};

export default function roughTime(date?: Date): RoughTimeObject {
  var now = date || new Date();
  var minutes = now.getMinutes();
  minutes = minutes > 30 ? 30 - (minutes - 30) : minutes;
  var minute = Math.round(minutes / 5);
  var hour =
    (minute === 0 && now.getMinutes() > 40
      ? now.getHours() + 1
      : now.getHours()) % 12;

  return {
    date: now,
    hour: hours[hour >= 12 ? 0 : hour],
    estimate: estimates[minute],
    transition: minute === 0 ? '' : now.getMinutes() > 30 ? 'to' : 'past',

    toString: function() {
      return `it's about ${this.estimate} ${this.transition} ${this.hour}`;
    },
  };
}
