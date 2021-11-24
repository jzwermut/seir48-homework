Rails.application.routes.draw do
  get '/home' => 'pages#home'
  get '/search/book' => 'books#search'
  get '/search/book/result' => 'books#result'
  get 'search/stock' => 'stocks#search'
  get 'search/stock/result' => 'stocks#result'
end
