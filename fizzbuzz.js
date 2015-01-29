/*
The FizzBuzz Challenge: 
Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz"
*/

function fizzbuzz () {
	for (var x = 1; x <= 100; x++) {
		y = x;
		
		if (x % 3 == 0 || x % 5 == 0) {
			y = x % 3 == 0 ? 'Fizz' : '';
			if (x % 5 == 0) y += 'Buzz';
		}
		
		console.log (y);
	}

	return true;
}

fizzbuzz ();