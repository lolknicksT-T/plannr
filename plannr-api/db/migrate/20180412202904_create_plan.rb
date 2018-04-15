class CreatePlan < ActiveRecord::Migration[5.2]
  def change
    create_table :plans do |t|
      t.string :title
      t.string :description
    end
  end
end
