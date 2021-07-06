class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :item_name, null: false
      t.integer :item_price, null: false
      t.integer :num_of_item_left, null: false
      t.string :image_url, null: false

      t.timestamps
    end
    add_index :items, :item_name
  end
end
