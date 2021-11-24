# 1. Drinking age?
# Ask the user for their age.
# Remember that anytime you get input, it is a string, so you will need to change the age input to a number.
# If age is less than 18, print an appropriate message.
# If the age is equal to or over 18, print a different message.

puts "How old are you?"

age = gets.chomp.to_i

if age >= 18
	puts "You are #{age} and may drink to your heart's content"
else 
	puts "Sorry we don't let people who are #{age} drink here"
end

# 2. Air Conditioning
# Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
# If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
# If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
# If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."

puts "What is the current temperature?"
currentTemp = gets.chomp.to_i

puts "Is the AC functional?"
isFunctional = gets.chomp

puts "What is your desired temp?"
desiredTemp = gets.chomp.to_i

if isFunctional == "yes" && currentTemp>desiredTemp
	puts "Turn on the AC please"
elsif isFunctional == "no" && currentTemp>desiredTemp
	puts "Fix the AC now! It's hot"
elsif isFunctional == "no" && currentTemp<desiredTemp
	puts "Fix the A/C whenever you have the chance... It's cool..."
end