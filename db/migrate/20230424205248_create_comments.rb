class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.string :description, null: false
      t.references :commentor, null:false, foreign_key: { to_table: :users}
      t.references :pin, null:false, foreign_key: { to_table: :pins}

      t.timestamps
    end
  end
end
