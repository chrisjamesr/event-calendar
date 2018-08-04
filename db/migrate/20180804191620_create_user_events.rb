class CreateUserEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :user_events do |t|
      t.integer :user_id
      t.ingeter :event_id
      t.timestamps
    end
  end
end
