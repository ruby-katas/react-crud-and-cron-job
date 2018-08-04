class CourseBook < ApplicationRecord
  belongs_to :course
  belongs_to :book
end
