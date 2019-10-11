declare type RoughTimeObject = {
    date: Date;
    hour: string;
    estimate: string;
    transition: string;
    toString: () => string;
};
export default function roughTime(date?: Date): RoughTimeObject;
export {};
