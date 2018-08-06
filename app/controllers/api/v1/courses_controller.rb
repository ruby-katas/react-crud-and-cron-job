class Api::V1::CoursesController < ApplicationController
  def index
    @course = Course.first
  end
end
