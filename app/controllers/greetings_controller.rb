class GreetingsController < ApplicationController
  def index
    @greetings = Greeting.order('RANDOM()')

    render json: @greetings
  end
end
