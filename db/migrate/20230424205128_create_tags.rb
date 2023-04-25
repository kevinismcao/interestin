class CreateTags < ActiveRecord::Migration[7.0]
  def change
    create_table :tags do |t|
      t.string :category
      t.references :pin, null:false, foreign_key: {to_table: :pins}
      
      t.timestamps
    end
  end
end
