require 'faker'

class PopulateDatabase
  class << self
    def up
      instructor = User.create(name: Faker::FunnyName.name_with_initial, email: Faker::Internet.unique.email, role: 1)

      course = Course.create(name: Faker::Educator.course, instructor_id: instructor.id)

      book = Book.create!(title: Faker::Book.title, content: Faker::Lorem.paragraphs(10, true))

      CourseBook.create(course_id: course.id, book_id: book.id)

      15.times do
        user = User.create!(name: Faker::FunnyName.name, email: Faker::Internet.unique.email, role: 0)
        CourseUser.create(user_id: user.id, course_id: course.id)
        ReadingTime.create(user_id: user.id, book_id: book.id, readingTime: rand(1..120))
      end
    end

    def down
      ReadingTime.destroy_all
      CourseUser.destroy_all
      User.destroy_all
      CourseBook.destroy_all
      Book.destroy_all
      Course.destroy_all
    end
  end
end
