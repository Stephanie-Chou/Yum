class CreateRecommendations < ActiveRecord::Migration
  def change
    create_table :recommendations do |t|
      t.integer :recBy_id
      t.integer :recFor_id
      t.integer :restaurant

      t.timestamps
    end
  end
end
