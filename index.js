export function _lenc (a) {
      return a.length  
}
export function _t (t) {
      console.table(t)
}
export function _half (num) {
      return num / 2
}
export function _print (string) {
      console.log(string)
}
export function _rnum ( num ) {
      return Math.floor( Math.random() * parseInt(num))
}
export function _dbl ( num ) {
      return num * 2
}
export function _add ( num1 , num2 ) {
      return num1 + num2
}
export function _sub ( num1 , num2 ) {
      return num1 - num2
}
export function _mult ( num1 , num2 ) {
      return num1 * num2
}
export function _div ( num1 , num2 ) {
      return num1 / num2
}
export function _rect ( l , b ) {
      return l * b
}
export function _square ( s ) {
      return s * s
}
export var tri = 180;
export function _calctri ( a , b , c) {
      var added = a + b + c;
      var x = 180 / added;
      var angle_a = a * x;
      var angle_b = b * x;
      var angle_c = c * x;
      var angles = [['angle 1' , angle_a], ['angle 2' , angle_b],['angle 3' , angle_c], ];
      return angles
}
export const days = ['Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday']
export const months = [['January' , 31] , ['February' , 28 , 29] , ['March' , 31] , ['April' , 30] , ['May' , 31 ] , ['June' , 30] ,
['July' , 31] , ['August' , 31] , ['September' , 30] , ['October' , 31] , ['November' ,  30] , ['December' , 31]]
export const year = 365
export const lyear = 366
export function _arrayD(int) {
      for(let i = 0; i < int.length; i++ ) { console.log(int[i]) }
}
export function _sethtml( select , a ) {
      document.querySelector(select).innerHTML = a
}
export function _setcolor (select , a) {
      document.querySelector(select).style.color = a
}
export function _setBackgroundColor( select , a ) {
      document.querySelector(select).style.backgroundColor = a
}
export function _setleftMargin( select , a ) {
      document.querySelector(select).style.marginLeft = a
}
export function _setrightMargin( select , a ) {
      document.querySelector(select).style.marginRight = a
}
export function _settopMargin( select , a ) {
      document.querySelector(select).style.marginTop = a
}
export function _setbottomMargin( select , a ) {
      document.querySelector(select).style.marginBottom = a
}
export  function _a (a) {
      alert(a)
}
