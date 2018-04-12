class CreateConversation < ActiveRecord::Migration[5.2]
  def change
    create_table :conversations do |t|
      t.string :title
      t.references :plan, foreign_key: true
    end
  end
end
