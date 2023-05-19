class Microwave
  ONE_DIGIT_SPLIT = 10
  TWO_DIGIT_SPLIT = 100
  MINUTE = 60

  def initialize(time)
    @seconds = time
    @minutes = 0
  end

  def timer()
    if @seconds >= TWO_DIGIT_SPLIT 
      @minutes = @seconds.div(TWO_DIGIT_SPLIT)
      @seconds = @seconds % TWO_DIGIT_SPLIT
    end
    while @seconds >= MINUTE do
      @minutes += 1
      @seconds = @seconds - MINUTE
    end

    "%02d" % @minutes + ":" + "%02d" % @seconds
  end
end
