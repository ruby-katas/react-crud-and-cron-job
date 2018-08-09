class Api::V1::UsersController < ApplicationController
  skip_before_action  :verify_authenticity_token
  before_action :set_user, only: [:update]

  # PATCH/PUT /api/v1/users/1.json
  def update
    respond_to do |format|
      if @user && @user.update(user_params)
        format.json { render :show, status: :ok, location: @api_v1_user }
      else
        unless @user.nil?
          format.json { render json: @user.errors, status: :unprocessable_entity }
        else
          format.json  {render json: { message: "user not found" }, status: :unprocessable_entity }
        end
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.where(id: params[:id], email: params[:user][:email]).first
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      # params.fetch(:user, {})
      params.require(:user).permit(:name)
    end
end
