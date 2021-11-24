require 'pry'

class Robot
	attr_accessor :name

	def initialize
		@name = (0...5).map { (65 + rand(26)).chr }.join
	end

	def reset
		@name = (0...5).map { (65 + rand(26)).chr }.join
	end 
end

binding.pry
