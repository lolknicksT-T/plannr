class User < ApplicationRecord
  has_secure_password

  has_many :user_plans, class_name: "UserPlan"
  has_many :plans, through: :user_plans
  has_many :conversations, through: :plans
  has_many :messages, through: :conversations

  validates :username, uniqueness: true, presence: true
end
