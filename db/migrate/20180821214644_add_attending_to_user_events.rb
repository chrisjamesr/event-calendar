class AddAttendingToUserEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :user_events, :attending, :boolean, default: true
  end
end
