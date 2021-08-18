const expect = require("chai").expect;
const {polybius} = require("../src/polybius.js");// Write your tests here!


describe('Polybius() Cipher Tests', () =>{ 
  it('When encoding, it translates the letter i to 42.', () =>{
  const actualResult = polybius('i')
  const expectedResult = '42'
  expect(actualResult).to.eql(expectedResult)})
  
  it('When encoding, it translates the letter j to 42.', () =>{
  const actualResult = polybius('j')
  const expectedResult = '42'
  expect(actualResult).to.eql(expectedResult)})
  
  it('When decoding, it translates 42 to (i/j).', () =>{
  const actualResult = polybius('42', false)
  const expectedResult = '(i/j)'
  expect(actualResult).to.eql(expectedResult)})
  
  it('It ignores capital letters.', () =>{
  const actualResult = polybius('A')
  const expectedResult = '11'
  expect(actualResult).to.eql(expectedResult)})
  
  it('It maintains spaces in the message after encoding', () =>{
  const actualResult = polybius('a a')
  const expectedResult = '11 11'
  expect(actualResult).to.eql(expectedResult)})
  
  it('It maintains spaces in the message after decoding', () =>{
  const actualResult = polybius('11 11', false)
  const expectedResult = 'a a'
  expect(actualResult).to.eql(expectedResult)})
})