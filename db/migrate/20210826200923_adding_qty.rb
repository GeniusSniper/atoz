class AddingQty < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :qty, :integer, default: 1
  end
end
