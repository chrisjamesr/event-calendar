class ChangeDescriptionToNotesOnEvents < ActiveRecord::Migration[5.2]
  def change
    change_table :events do |t|
      t.rename :description, :notes
  end
end
