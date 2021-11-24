# Grammar
# “I before E except after C” is perhaps the most famous English spelling rule. For the purpose of this challenge, the rule says: 
# if “ei” appears in a word, it must immediately follow “c”. If “ie” appears in a word, it must not immediately follow “c”.
# A word also follows the rule if neither “ei” nor “ie” appears anywhere in the word. Examples of words that follow this rule are:
# fiery hierarchy hieroglyphic ceiling inconceivable kendone daily drummachine one two three
# Write a function that tells you whether or not a given word follows the “I before E except after C” rule.


# Bonus - allow the function to return true if the word matches any of the following words also
# sleigh stein fahrenheit deifies either nuclei reimburse ancient juicier societies

# ie cannot be after c
# ei can be immediately after c 
# ie if it is not after c 

require 'pry'

def check str
	legit = true
	arr = str.split('')
	arr.each_with_index do |letter, index|
		if letter == 'c' and arr[index + 1] == 'i' and arr[index + 2] == 'e'
			legit = false
		end
		if letter == 'i' and arr[index - 1] == 'e' and arr[index - 2] != 'c'
			legit == false
		end
	end
	puts str
	legit
end 

check 'conceive'
check 'heirarchy'

binding.pry

# write a function to say whether the word follows the rule or not 
