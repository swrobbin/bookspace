class RemoveIsFictionFromBooks < ActiveRecord::Migration[6.1]
  def change
    remove_column :books, :is_fiction, :boolean
  end
end
