require 'faker'

class PopulateDatabase
  class << self
    def call
      Course.create(name: Faker::Educator.course)
      # 15.times do
      #     User.create(name: Faker::Name.name)
      # end
    end
  end
end