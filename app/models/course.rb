class Course < ApplicationRecord
  belongs_to :instructor, class_name: 'User', foreign_key: "instructor_id"

  has_many :course_users
  has_many :students, through: :course_users, source: :user
  has_many :course_books
  has_many :books, through: :course_books
end
