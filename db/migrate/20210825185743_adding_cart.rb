class AddingCart < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :cart, :text, array: true, default: []
  end
end
