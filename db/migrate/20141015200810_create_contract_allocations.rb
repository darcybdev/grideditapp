class CreateContractAllocations < ActiveRecord::Migration
  def change
    create_table :contract_allocations do |t|
    	t.integer :contract_id
    	t.integer :labor_category_id
			t.decimal :labor_rate
			t.decimal :hours

			t.timestamps
    end
  end
end
