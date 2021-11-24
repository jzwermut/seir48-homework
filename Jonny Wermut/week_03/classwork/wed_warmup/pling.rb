# Warmup - Raindrops
# Write a program using Ruby that will take a number (eg 28 or 1755 or 9, etc) and output the following:
# If the number contains 3 as a factor, output 'Pling'.
# If the number contains 5 as a factor, output 'Plang'.
# If the number contains 7 as a factor, output 'Plong'.
# If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
# Examples
# 28 has 7 as a factor. In raindrop-speak, this would be a simple "Plong".
# 1755 has 3 and 5 as factors. In raindrop-speak, this would be a "PlingPlang".
# 34 has neither 3, 5 nor 7 as a factor. Raindrop-speak doesn't know what to make of that, 
# so it just goes with the straightforward "34".

def pling (x)
	output = ""
	if x%3==0
		output += 'Pling'
	end
	if x%5==0
		output += 'Plang'
	end 
	if x%7==0
		output += 'Plong'
	end 
	if x%3!=0 and x%5!=0 and x%7!=0
		output = x.to_i
	end
	puts output
end 

pling(3)
pling(5)
pling(7)
pling(1755)
pling(34)
pling(105)

