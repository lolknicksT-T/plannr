class Plan < ApplicationRecord
  has_one :conversation
  has_many :users
  has_many :messages through: :conversations 
end
