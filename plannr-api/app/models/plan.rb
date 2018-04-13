class Plan < ApplicationRecord
  has_one :conversation
  has_many :user_plans, class_name: "UserPlan"
  has_many :users, through: :user_plans
  has_many :messages, through: :conversations
end
