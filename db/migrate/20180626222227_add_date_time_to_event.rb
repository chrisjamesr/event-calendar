class AddDateTimeToEvent < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :date_time, :datetime
  end
end
