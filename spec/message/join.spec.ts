import {JoinParameters} from '../../dist/message/join.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


const messages = [
    {message:'a'},
    {message:'b'},
    {message:'c'},
    {message:'d'},
    {message:'e'},
];

const join = new JoinParameters(messages, ',');
it('check data', ()=>{

   expect(join.separator).toBe(',');

   expect(join.messages[0].message).toBe('a');
   expect(join.messages[1].message).toBe('b');
   expect(join.messages[2].message).toBe('c');
   expect(join.messages[3].message).toBe('d');
   expect(join.messages[4].message).toBe('e');
   expect(join.messages[5]).toBeUndefined();

});


it('check message', ()=>{

   expect(join.message).toBe('a,b,c,d,e');

});


it('change delimiter', ()=>{

    join.separator = '|';
   expect(join.message).toBe('a|b|c|d|e');

});


it('add value', ()=>{

    join.messages.push({message:'f'});
   expect(join.message).toBe('a|b|c|d|e|f');

});

