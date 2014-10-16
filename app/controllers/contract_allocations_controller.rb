class ContractAllocationsController < ApplicationController
	def index
		@allocations = ContractAllocation.all
	end

	def update_value
		con = ContractAllocation.find_by_id(params[:id])
		con.update_attributes({params[:name] => params[:value]})
		render json: con
	end
end
