// Comparisons

// compare values where data types of both values are same
console.log(2==2);// == equal to
console.log(2===2);// === equal value and equal type
console.log(2!=2);// != not equal
console.log(2!==2);// !== not equal value or not equal type
console.log(2>3);// > greater than
console.log(2<3);// < less than
console.log(2>=2);// >= greater than or equal to
console.log(2<=2);// <= less than or equal to
console.log(1? 2 : 3);// ? ternary operator
console.log(1 && 2);// && and operator
console.log(1 || 2);// || or operator
console.log(!1);// ! not operator
console.log(1 + 2);// + addition operator
console.log(1 - 2);// - subtraction operator
console.log(1 * 2);// * multiplication operator
console.log(1 / 2);// / division operator
console.log(1 % 2);// % modulus operator
console.log(1 ** 2);// ** exponentiation operator
console.log(1 & 2);// & bitwise and operator
console.log(1 | 2);// | bitwise or operator
console.log(1 ^ 2);// ^ bitwise xor operator
console.log(1 << 2);// << bitwise left shift operator
console.log(1 >> 2);// >> bitwise right shift operator
console.log(1 >>> 2);// >>> bitwise unsigned right shift operator
console.log(1 += 2);// += addition assignment operator
console.log(1 -= 2);// -= subtraction assignment operator
console.log(1 *= 2);// *= multiplication assignment operator
console.log(1 /= 2);// /= division assignment operator
console.log(1 %= 2);// %= modulus assignment operator
console.log(1 **= 2);// **= exponentiation assignment operator
console.log(1 &= 2);// &= bitwise and assignment operator
console.log(1 |= 2);// |= bitwise or assignment operator
console.log(1 ^= 2);// ^= bitwise xor assignment operator
console.log(1 <<= 2);// <<= bitwise left shift assignment operator
console.log(1 >>= 2);// >>= bitwise right shift assignment operator
console.log(1 >>>= 2);// >>>= bitwise unsigned right shift assignment operator
console.log(1, 2);// , comma operator
console.log(1 < 2 ? 3 : 4);// , comma operator

// avoid such comparisons
console.log(null > 0);// null compared to 0 is false
console.log(null == 0);// null compared to 0 is false
console.log(null >= 0);// null compared to 0 is true
console.log(null <= 0);// null compared to 0 is true
console.log(undefined > 0);// undefined compared to 0 is false
console.log(undefined == 0);// undefined compared to 0 is false
console.log(undefined <= 0);// undefined compared to 0 is true
console.log(undefined < 0);// undefined compared to 0 is true
console.log(undefined == null);// undefined compared to null is true
console.log(undefined === null);// undefined compared to null is false
console.log(undefined != null);// undefined compared to null is false
console.log(undefined !== null);// undefined compared to null is true
