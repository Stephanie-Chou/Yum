class CreateFriends < ActiveRecord::Migration
  def change
    create_table :friends do |t|
      t.integer :user1
      t.integer :user2
      t.boolean :accepted

      t.timestamps
    end
  end
end
