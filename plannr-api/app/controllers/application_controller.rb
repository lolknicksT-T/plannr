class ApplicationController < ActionController::API


  def token_for(user)
    JWT.encode({ user_id: user.id }, get_secret_key, "HS256")
  end

  def get_secret_key
    ENV["SUPER_SECRET_KEY"]
  end

  def authorize!
    if current_user_id.to_s != params[:user_id]
      render json: { take_a_hike: true}
    end
  end


  def try_decode_auth_token
    auth_token = request.headers["Authorization"]
    begin
      decoded = JWT.decode(auth_token, get_secret_key)
    rescue => e
      return nil
    end
      return decoded
  end


  def current_user_id
    decoded = try_decode_auth_token
    if decoded
      return decoded[0]["user_id"]
    end
    return nil
  end

end
