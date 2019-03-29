class ApplicationController < ActionController::API
  before_action :authenticate, :datadog_trace_extend 

  def logged_in?
    !!current_user
  end

  def current_user
    if auth_present?
      user = User.find(auth["user"])
      if user
        @current_user ||= user
      end
    end
  end

  def authenticate
    render json: {error: "unauthorized"}, status: 401 unless logged_in?
  end

  def fallback_index_html
    render :file => 'public/index.html'
  end

  private

    def token
      request.env["HTTP_AUTHORIZATION"].match(/Bearer(.*)$/)[1].lstrip
    end

    def auth
      Auth.decode(token)
    end

    def auth_present?
      !!request.env.fetch("HTTP_AUTHORIZATION", "").scan(/Bearer/).flatten.first
    end

end