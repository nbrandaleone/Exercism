;;;;
;;;; @author Nick Brandaleone - May 2023
;;;;
;;;; This program solves an Exercism using LFE.
;;;; See Exercism for details.
;;;;

(defmodule leap
  "Determines if a year is a leap year"
  (export (leap-year 1)))

(defun leap-year
  "Uses pattern matching to determine if the YEAR is a leap year or not"
  ([year] (when (== (rem year 400) 0))
           'true)
  ([year] (when (== (rem year 100) 0))
           'false)
  ([year] (when (== (rem year 4) 0))
           'true)
  ([_]     'false))         ; _ is discard or ignore match
