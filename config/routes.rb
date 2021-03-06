Rails.application.routes.draw do
	root to: 'site#index'

	get '/admin' => 'admin#index'
	get '/menu' => 'menu#index'

	
	namespace :api do
		namespace :v1 do
			resources :items, only: [:index, :create, :destroy, :update]
		end
	end
end
