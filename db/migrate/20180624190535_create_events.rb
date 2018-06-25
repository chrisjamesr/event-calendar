class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.date :date
      t.time :time
      t.string  :name
      t.string :description
      t.string :location
      t.timestamps
    end
  end
end
