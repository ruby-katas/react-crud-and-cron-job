class FixColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :reading_times, :readingTime, :reading_time
  end
end
