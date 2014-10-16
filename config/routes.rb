Rails.application.routes.draw do
  root to: 'contract_allocations#index'

  resources :contract_allocations do
  	collection do
  		post :update_value
  	end
  end
end
