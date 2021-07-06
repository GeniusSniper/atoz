@items.each do |item|
    item.set! item.id do
        json.partial! 'item', item: item
    end
end