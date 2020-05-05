export interface Hello {
    name: string;
    age: number;
    address: string;
}
export class HelloWord {
    // public name: string;
    // public age: number;
    // public address: string;
    // ADDRESS
    
    constructor(private readonly info: Hello) {}
}

const p = new HelloWord({
    name: 'wangdm',
    age: 27,
    address: 'jiangsu',
});
// console.log()
console.log('p: ', JSON.stringify(p, null, 2));
console.log('wangdm');
console.log('hanxn');
