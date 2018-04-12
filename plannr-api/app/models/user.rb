class User < ApplicationRecord
  has_many :plans
  has_many :conversations through: :plans
  has_many :messages through: :conversations
end
