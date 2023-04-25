class CreatePinsUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :pins_users do |t|
      t.references :user, null:false, foreign_key: { to_table: :users }
      t.references :pin, null:false, foreign_key: { to_table: :pins}
      t.boolean :saved_pin, null: false, default: false

      t.timestamps
    end
    add_index :pins_users, [:user_id, :pin_id], unique: true
  end
end
