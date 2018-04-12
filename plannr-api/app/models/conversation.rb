class Conversation < ApplicationRecord
  belongs_to :plan
  has_many :messages
end
