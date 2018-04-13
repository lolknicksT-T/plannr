class CreateUserPlans < ActiveRecord::Migration[5.2]
  def change
    create_table :user_plans do |t|
      t.references :user, foreign_key: true
      t.references :plan, foreign_key: true
      t.integer :admin_id
    end
  end
end
