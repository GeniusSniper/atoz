class AddHeadline < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :headline, :string, default: '', null: false
  end
end
