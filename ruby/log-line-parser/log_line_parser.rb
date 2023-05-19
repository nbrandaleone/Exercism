class LogLineParser
  def initialize(line)
    @line = line
  end

  LOG_FORMAT = /\[(\w+)\]: (.*)/

  def message
    m = @line.match(LOG_FORMAT)
    m[2].strip
  end

  def log_level
    m = @line.match(LOG_FORMAT)
    m[1].downcase
  end

  def reformat
    m = @line.match(LOG_FORMAT)
    m[2].strip + " (#{m[1].downcase})"
  end
end
