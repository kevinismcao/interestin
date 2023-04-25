class CreateBoards < ActiveRecord::Migration[7.0]
  def change
    create_table :boards do |t|
      t.string :name, null:false
      t.string :description
      t.references :owner, null:false, foreign_key: { to_table: :users}

      t.timestamps
    end
    add_index :boards, [:name, :owner_id], unique: true
  end
end

