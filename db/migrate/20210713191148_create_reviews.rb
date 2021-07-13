class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :rating, null: false
      t.string :body, default: '', null: false
      t.integer :item_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end 
    add_index :reviews, :item_id
  end
end
