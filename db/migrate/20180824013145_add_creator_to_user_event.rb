class AddCreatorToUserEvent < ActiveRecord::Migration[5.2]
  def change
    add_column :user_events, :creator, :boolean, default: false
  end
end
