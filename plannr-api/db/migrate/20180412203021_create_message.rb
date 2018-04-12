class CreateMessage < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :content
      t.references :conversation, foreign_key: true
    end
  end
end
