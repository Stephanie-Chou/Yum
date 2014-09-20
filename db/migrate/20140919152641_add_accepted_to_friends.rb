class AddAcceptedToFriends < ActiveRecord::Migration
  def change
    add_column :friends, :accepted, :boolean
  end
end
