require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'
require 'pry'

StockQuote::Stock.new(:api_key => 'pk_16a849fd637243a79fff90fa4d42bc5d')

# ERB: Embedded Ruby: HTML with chunks of Ruby in it!

# Convention over configuration

get '/' do
  erb :home
end

get '/info' do
  stock_code = params[:stock] 
  @info = StockQuote::Stock.quote stock_code
  erb :info
end