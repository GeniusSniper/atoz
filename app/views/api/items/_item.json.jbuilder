json.extract! item, :id, :item_name, :item_price, :num_of_item_left, :image_url
json.picture_url url_for(item.photo)