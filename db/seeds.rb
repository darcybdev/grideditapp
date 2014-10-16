# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ContractAllocation.create(contract_id: 22, labor_category_id: 6, labor_rate: 123.2, hours: 20)
ContractAllocation.create(contract_id: 22, labor_category_id: 7, labor_rate: 23.5, hours: 16)
ContractAllocation.create(contract_id: 23, labor_category_id: 8, labor_rate: 11, hours: 11)
ContractAllocation.create(contract_id: 24, labor_category_id: 9, labor_rate: 58.23, hours: 3)
ContractAllocation.create(contract_id: 24, labor_category_id: 10, labor_rate: 20, hours: 5)