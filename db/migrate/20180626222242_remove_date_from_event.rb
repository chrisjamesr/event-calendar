class RemoveDateFromEvent < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :date, :date
  end
end
