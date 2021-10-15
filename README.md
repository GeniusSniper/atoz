![image](https://user-images.githubusercontent.com/82611136/137355550-a052cbdb-ba94-4dd9-ba8a-7ad7bdbc5ca4.png)

# [Atoz](https://atozs.herokuapp.com/)

* [Atoz](https://atozs.herokuapp.com/) is a clone of [Amazon](www.amazon.com). It allow you to sign in/ sign up search items and add your favorite item to  your cart

![image](https://user-images.githubusercontent.com/82611136/137414868-725fbd3f-26cd-4bd3-b015-8017c290f8d7.png)

# Techologies used

* Ruby on Rails 
* Javascript
* React / Redux
* HTML / CSS
* PostgreSQL

# Search, Cart

* Finding the item you need quick and easy with the search bar

![image](https://user-images.githubusercontent.com/82611136/137418543-e019a524-18cf-41aa-b20f-0efac423f5fa.png)

* Shopping cart with everything you need and when you don't need it just delete the item from your shopping cart

![image](https://user-images.githubusercontent.com/82611136/137418757-b1659b77-821c-4c22-9542-e06d60f9ff67.png)

# Coding Challenges

Displaying price with ','

```
let priceToS = num => {
    if(num.length < 4) return num;
    let str = '';
    let arr = num.split('.');
    for(let i = 0; i < arr[0].length; i++){
        if((arr[0].length - i) % 3 === 0 && i !==0){
            str += ',' + arr[0][i]
        } else {
            str += arr[0][i];
        }
    }
    str += '.' + arr[1].substring(0,2);
    return str;
}
```
