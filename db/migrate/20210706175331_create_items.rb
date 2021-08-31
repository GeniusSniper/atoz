class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :item_name, null: false
      t.decimal :item_price, precision: 10, scale: 2, null: false
      t.integer :num_of_item_left, null: false
      t.string :descrption, null: false
      t.text :image_url, array: true, default: []

      t.timestamps
    end
    add_index :items, :item_name
  end
end
