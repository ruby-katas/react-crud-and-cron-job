class Api::V1::CoursesController < ApplicationController
  def index
    # TODO improve moving logic to a ruby object
    @course = Course.includes(:books, :instructor, :students).first

    @students = @course.students
      .joins(:reading_times)
      .where(reading_times: {book_id: @course.books.first})
      .select('users.id, users.name, users.email, reading_times.reading_time as reading_time')
      .all
  end
end
