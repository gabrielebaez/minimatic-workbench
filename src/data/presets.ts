export const PRESETS: Record<string, string> = {
	tour_full: `(* Official Minimatic Kernel Tour *)

(* 1. Specificity beats declaration order *)
describe(x: _) := "something else"
describe(x: _string) := "a string"
describe(x: _int) := "an integer"

describe(5)
describe("hi")
describe(3.14)

(* 2. Recursion needs no if *)
fact(0) := 1
fact(n: _int) := n * fact(n - 1)
fact(10)

fib(0) := 0
fib(1) := 1
fib(n: _int) := fib(n - 1) + fib(n - 2)
fib(10)

(* 3. Multi-argument specificity: FizzBuzz *)
classify(n: _int, 0, 0) := "FizzBuzz"
classify(n: _int, 0, _) := "Fizz"
classify(n: _int, _, 0) := "Buzz"
classify(n: _int, _, _) := n

fizzbuzz(n: _int) := classify(n, mod(n, 3), mod(n, 5))
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] |> map(fizzbuzz)

(* 4. Sequence blanks & Listables *)
sum_all(xs: __) := fold(xs, plus, 0)
sum_all(1, 2, 3, 4, 5)

[1, 2, 3, 4] + [10, 20, 30, 40]
[1, 2, 3, 4] ^ 2

(* 5. /. Data rewriting *)
[1, "N/A", 2, "ERROR", 3] /. ["N/A" -> 0, "ERROR" -> -1]

(* 6. Lambdas & Closures *)
add(a) := b -> a + b
add5 = add(5)
add5(10)
add(5)(20)

(* 7. Pipes, Map & Fold *)
[1, 2, 3, 4]
|> map(x -> x * x)
|> fold(plus, 0)

(* 8. Control Flow *)
if(3 < 5, "yes", 1 / 0)

grade(score: _int) := switch(True,
    score >= 90, "A",
    score >= 80, "B",
    score >= 70, "C",
    "F")

grade(95)
grade(72)
grade(40)`,

	tour_specificity: `(* Specificity beats declaration order *)
(* Clauses are tried most-specific-first regardless of declaration order *)

describe(x: _) := "something else"
describe(x: _string) := "a string"
describe(x: _int) := "an integer"

describe(5)
describe("hi")
describe(3.14)`,

	tour_recursion: `(* Recursion needs no if — literal clauses are base case *)

fact(0) := 1
fact(n: _int) := n * fact(n - 1)
fact(10)

fib(0) := 0
fib(1) := 1
fib(n: _int) := fib(n - 1) + fib(n - 2)
fib(10)`,

	tour_fizzbuzz: `(* Specificity across multi-argument positions: FizzBuzz *)

classify(n: _int, 0, 0) := "FizzBuzz"
classify(n: _int, 0, _) := "Fizz"
classify(n: _int, _, 0) := "Buzz"
classify(n: _int, _, _) := n

fizzbuzz(n: _int) := classify(n, mod(n, 3), mod(n, 5))

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] |> map(fizzbuzz)`,

	tour_sequence: `(* Sequence blanks (__) & Listable heads *)

sum_all(xs: __) := fold(xs, plus, 0)
sum_all(1, 2, 3, 4, 5)

(* Elementwise listable arithmetic *)
[1, 2, 3, 4] + [10, 20, 30, 40]
[1, 2, 3, 4] ^ 2`,

	tour_rewrites: `(* Data rewriting using /. rules *)

[1, "N/A", 2, "ERROR", 3] /. ["N/A" -> 0, "ERROR" -> -1]`,

	tour_lambdas: `(* Lambdas are closures and curry naturally *)

add(a) := b -> a + b
add5 = add(5)

add5(10)
add(5)(20)`,

	tour_pipelines: `(* Pipelines: pipe, lambda, map, fold *)

[1, 2, 3, 4]
|> map(x -> x * x)
|> fold(plus, 0)

xs = [10, 20, 30]

xs |> length
xs |> first
xs |> rest
xs |> append(40)`,

	tour_control: `(* Control flow: ordinary functions with hold attributes *)

if(3 < 5, "yes", 1 / 0)

grade(score: _int) := switch(True,
    score >= 90, "A",
    score >= 80, "B",
    score >= 70, "C",
    "F")

grade(95)
grade(72)
grade(40)`
};
