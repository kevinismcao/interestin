class CreatePins < ActiveRecord::Migration[7.0]
  def change
    create_table :pins do |t|
      t.string :title, null: false
      t.string :description
      t.references :uploader, null: false, foreign_key: { to_table: :users}

      t.timestamps
    end
  end
end
