# Create greetings
class GreetingsToShow
  def greetings
    Greeting.create(message: 'Hola!', language: 'Spanish')
    Greeting.create(message: 'Niltze Tialli Pialli', language: 'Náhuatl')
    Greeting.create(message: 'Hello!', language: 'English')
    Greeting.create(message: '안녕하세요', language: 'Korean')
    Greeting.create(message: 'Привет', language: 'Russian')
    Greeting.create(message: 'こんにちは', language: 'Japanese')
    Greeting.create(message: 'مرحبًا', language: 'Arab')
  end
end
