class CreateReadingTimes < ActiveRecord::Migration[5.1]
  def change
    create_table :reading_times do |t|
      t.integer :readingTime
      t.references :book, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
