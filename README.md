## [Object Oriented Programming](https://docs.google.com/presentation/d/1voTatjK2UFZXJcrihRjLmhI5JtY2w6KI1F3ePfZHlMI/embed?start=false&loop=false&delayms=3000)

# Exercises

### Basic Requirments

1. The old bank account example from lecture looked as follows:

```js
 function makeAccount(initial) {
     var balance = initial;
     return {
          withdraw: function(amount) {
               if (balance - amount >= 0) {
                    balance = balance - amount;
                    return 'Here is your money: $' + amount;
               }
          return 'Insufficient funds.';
          },               deposit: function(amount) {
               balance = balance + amount;
               return 'Your balance is: $' + balance;
          }
     };
}
 Refactor the above as an Account class that shares its methods across different instances.
```

2. Our stopwatch exercise looked like this when complete:

```js
 function makeStopwatch() {
     var stop;
     var time = 0;
     return {
          start: function() {
               stop = setInterval(function() {
               time = time + 1;
               console.log('Elapsed time: ' + time + 's.');
          }, 1000);
     },stop: function() {
               clearInterval(stop);
          },
          reset: function() {
               clearInterval(stop);
               time = 0;
          }
     };
}
As before, refactor the makeStopwatch into a Stopwatch class with shared methods.
```

3. Code Review

```js
  Explain to your pair all the above questions
```

### More Practice

0. In this exercise we are going to make a Toaster class, and our Toaster is going to toast bread (because that's what toasters do). Here's a template for getting started on the Toaster class:

```js
 function Toaster() {
     var instance = {};
// TODO: your code here      return instance;
 }
 Your task will be to implement methods that actually make this toaster work!
```

1. addToast: This method should accept a string representing 'toast' as a parameter, e.g. 'white bread', and set the toast property of the Toaster instance to that piece of toast.

2. eject: This method should accept no parameters, and return one of two things:

```js
 If there is no toast in the toaster, it should return a string indicating that the toaster is empty.
 If there is toast in the toaster, it should return the toast and then set the toast property of the instance to undefined.
```

3. start: The start method is responsible for actually toasting the toast -- we can achieve this using the built-in setTimeout function that accepts two parameters: a function and a time (number) in milliseconds (e.g. 1000 represents one second) -- setTimeout will then invoke that function once after the time has tpassed. setTimeout also returns a number that can be passed to clearTimeout to cancel the invocation (it works almost identically to setInterval, but only executes its function argument once instead of repeatedly).

```js
 The idea of start is to use setTimeout to:
     console.log('Ding!') after some period of time (representing the time that the toast is being 'toasted')...
     and update the instance is toast property to reflect that the toast has been toasted (for instance, 'white bread' should become 'white bread (toasted)'.
 If there is no toast in the toaster at the time that start is invoked, it should return a string indicating that toast needs to be added before it can be toasted.
```

4. stop: the stop method should cancel an in-progress toaster by using clearTimeout on the return value of the invocation of setTimeout from start.

 // ----------- More Practice: Extending the Stopwatch  ----------- //

5. Provide a way to 'name' a stopwatch when invoking makeStopwatch. That way, if we have multiple stopwatches running simultaneously, we know which one is which based on its name, e.g.:

```js
 var stopwatch1 = makeStopwatch('Stopwatch 1');
 var stopwatch2 = makeStopwatch('Stopwatch 2');
 stopwatch1.start();
 // => 'Elapsed time: 1s (Stopwatch 1)'
 // => 'Elapsed time: 2s (Stopwatch 1)'
 stopwatch2.start();
 // => 'Elapsed time: 1s (Stopwatch 2)'
 // => 'Elapsed time: 3s (Stopwatch 1)'
 // etc.
```

6. Implement a 'lapping' mechanism by providing another method in the returned object called lap. We will want a way to view the laps as well with a laps method, and the laps should be cleared when the stopwatch is reset. We should be able to use it like this:

```js
 var stopwatch1 = makeStopwatch('Stopwatch 1');
 stopwatch1.start();
 // => 'Elapsed time: 1s (Stopwatch 1)'
 // => 'Elapsed time: 2s (Stopwatch 1)'
 stopwatch1.lap();  // => 'Adding lap @ 2s (Stopwatch 1)'
 // => 'Elapsed time: 3s (Stopwatch 1)'
 stopwatch1.lap();  // => 'Adding lap @ 3s (Stopwatch 1)'
 stopwatch1.stop();
 stopwatch1.laps(); // => '1. 2s
2. 3s'
 stopwatch.reset();
 stopwatch.laps();  // => 'No laps.'
```

7. What happens if your stopwatch runs longer than a minute? It'll probably keep listing off the time in seconds, e.g.

```js
 Elapsed time: 72s. It would be nice if it displayed minutes and seconds when the time ran beyond a single minute, e.g.
 Elapsed time: 1m 12s. Modify your stopwatch code to achieve this.
```

8. Code Review

```
  Explain to your pair all the above questions
```

### Advanced

1. What should happen if we attempt to toast some toast that has already been toasted? e.g.

```js
 var toaster = Toaster();
 toaster.addToast('white bread');
 toaster.start();
 // ...some time elapses...
 // => 'Ding!'
 toaster.start();
 Modify start so that, if the toast is already toasted, it becomes burnt on subsequent invocations of start.
```

2. Refactor your exercises from the Data Modeling with Closures exercises to use OOP.

3. Code Review

```js
  Explain to your pair all the above questions
```
