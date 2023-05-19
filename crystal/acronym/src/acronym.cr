module Acronym
  def self.abbreviate(phrase : String) : String
    # Write your code for the 'Acronym' exercise in this file.
    phrase.upcase
  end
end

def find_string(text, word)
  (0..text.size-word.size).each do |i|
    { i, text[i..i+word.size-1] }
    if text[i..i+word.size-1] == word
      return i
    end
  end

  nil
end
