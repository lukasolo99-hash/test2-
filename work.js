/*1. Დაბეჭდეთ რიცხვები 2 დან 8 მდე
2. 5 დან 35 - ის ჩათვლით დაბეჭდეთ ყოველი მეოთხე რიცხვი (უნდა დაიბეჭდოს 5,9,13…)
3. დაბეჭდეთ 3 დან 8 მდე რიცხვების ნამრავლი
4. Გამოაცხადეთ ობიექტი person რომელსაც აქვს firstName, lastName, age და დაბეჭდეთ person-სრული სახელი ( სახელი და გვარი)
5. დაბეჭდეთ ბონუსი: თუ 
ხელფასი არის 1000 - ბონუსი ხელფასის 20%
ხელფასი არის 1000 დან 2000მდე  - ბონუსი ხელფასის 10%
ხელფასი არის 2000 დან 5000მდე  - ბონუსი ხელფასის 5%
თუ ხელფასი 5000 მეტია - ბონუსი არის 0
6. დაწერეთ მასივი fruits ელემენტებით ["Apple", "Banana", "Orange"]; დაბეჭდეთ მასივის თითოეული წევრი.
7. დაამატეთ fruits მასივის თავში Grapes და ბოლოში  Pineapples დაბეჭდეთ fruits
8.დაბეჭდეთ 1 დან 34 მდე რიცხვების ჯამი*/

 
for (let i=2 ; i<=8 ; i++)
    {console.log (i)} 


 for (let i=5 ; i<=35 ; i += 4 )
    {console.log(i)} 

let a= 0
for ( let i=1 ; i<=34 ; i++ ) {a +=i}
console.log(a)
 
let a=1
 for (let  i=3 ; i<=8 ; i++ ) {a *= i }
 console.log(a)




let  person ={ firstName:"luka" , lastName:"solo" , age:26}
    for(const key in person ) {console.log(person[key])}



  let fruits=["apple" , "banana", "orange"]
   console.log(fruits)
fruits.push("pineapples")
fruits.unshift("grapes")
console.log(fruits) 


let salary=1800
let bonus=0
if (salary=== 1000) {bonus=salary*0.20} 
else  if  (salary > 1000 && salary <= 2000) {bonus=salary*0.10} 
else if  (salary>2000 && salary <= 5000) {bonus=salary*0.05}
else if (salary>5000) {bonus=0 }
console.log("bonus : " , bonus)
