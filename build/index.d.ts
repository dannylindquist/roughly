type RoughTimeObject = {
    date: Date;
    hour: string;
    estimate: string;
    transition: string;
    parts: Array<string>;
    toString: () => string;
};
export default function roughTime(d?: Date): RoughTimeObject;
export {};
