json.extract! @course, :id, :name, :instructor

json.book do
    json.extract! @course.books.first, :id, :title
end

json.students @students, :id, :name, :email, :reading_time