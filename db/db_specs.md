   * User - should have a name, email, and role (student or instructor). Whether you'd like the role be its own table or not is up to your descrection.
   * Course - should have a name. Each user should also belong to a course (just like an instructor runs the course and has many students).
   * Book - should have a title and some content (i.e. some kind of dummy text that would simulate reading a book). *Note: you will not need to be able to read the content for this assignment.*
   * ReadingTime - should contain an amount a given user has read a book. Students should have reading times.


User
---
- name
- email
- role (student, instructor)

Course
---
- name
- instructor

CourseUsers
---
- user_id
- course_id

CourseBooks
_ course_id
- book_id

Book
---

- title
- content

ReadingTime
---
- user_id
- book_id
- readingTime


creating a simple one page Ruby/Rails/ReactJS application
 The app will populate the database with random (but realistic) values via a weekly cron job script as
 well as allow for manually changing the name of a user on a page

  You will NOT be required to make a user session for logging in/out
  and are free to use any Rails Gems you'd like to accomplish the task.