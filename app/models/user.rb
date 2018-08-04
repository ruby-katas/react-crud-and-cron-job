class User < ApplicationRecord
    enum role: { student: 0, instructor: 1 }

    has_many :reading_times
    has_many :course_books
    has_many :books, through: :course_books
    has_many :course_users
    has_many :courses, through: :course_users
end
