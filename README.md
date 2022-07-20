# js-yurk4s

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-yurk4s)

### [Positive and Negative Lookahead](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/positive-and-negative-lookahead)

## HINTS
### Hint 1
Remember to use 2 `lookaheads` to check the patterns in the string.  The first `lookahead` is very similar to that given in the example - `'(?=\w{3,6})` - only the `lower-number` 3 is too low for our test cases, and an `upper-number` is completely unnecessary.  This first `lookahead` is only used to find a string consisting of a certain amount of characters.  A second `lookahead` must be used to check for consecutive numerical values at the end of the string.
### Hint 2
The second `lookahead` is also similar to that given in the example - `(?=\D*\d)` - however, this expression too must be modified to pass all test cases.  Remember to specify the exact amount of numbers you want to appear at the end of the string.
