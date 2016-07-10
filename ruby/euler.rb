# Project Euler: Ruby Solutions

# Problem 1: Multiples of 3 and 5
def sum_of_multiples(number)
  sum_three = 0
  sum_five = 0
  sum_total = 0
  count_three = 3
  count_five = 5

  if number < 5
    sum_five
  else
    while count_five < number
      sum_five += count_five
      count_five += 5
    end
  end

  if number < 3
    sum_three
  else
    while count_three < number
      if count_three % 5 != 0
        sum_three += count_three
      end
      count_three += 3
    end
  end

  sum_total = sum_five + sum_three

  puts sum_total
  return sum_total
end

sum_of_multiples(1000)

# Problem 2: Even Fibonacci Numbers
def even_fibonacci(number)
  even_sum = 0
  fib1 = 1
  fib2 = 2
  fib_count = 0

  if number < 3
    even_sum = 0
  else
    while fib_count < number
      if fib2 % 2 === 0
        even_sum += fib2
      end
      fib_count = fib1 + fib2
      fib1 = fib2
      fib2 = fib_count
    end
  end

  puts even_sum
  return even_sum
end

even_fibonacci(4000000)

# Problem 3: Largest Prime Factor
def largest_prime(number)
  is_prime = false
  current_num = number
  divisor = 2
  max_prime = 1

  while is_prime != true && divisor <= current_num
    if current_num % divisor === 0
      current_num /= divisor
      if divisor > max_prime
        max_prime = divisor
      end
      divisor = 2
    else
      divisor += 1
    end

    if divisor > current_num
      is_prime = true
    end
  end

  puts max_prime
  return max_prime
end

largest_prime(600851475143)