StockQuote::Stock.new(:api_key => 'pk_16a849fd637243a79fff90fa4d42bc5d')

class StocksController < ApplicationController

	def search
		:search
	end

	def result
		stock_code = params[:stock] 
  		@info = StockQuote::Stock.quote stock_code
		:result
	end
end