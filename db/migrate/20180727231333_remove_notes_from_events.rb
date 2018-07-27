class RemoveNotesFromEvents < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :notes
  end
end
