(defmodule allergies
  (export all))

; Nick Brandaleone - May 2023
; This program solves an Exercism using LFE.
; See Exercism for details.

; Create a list of binary numbers from 1 to 128
;
; (allergies:create-binary-list 0 7)
;  => (1 2 4 8 16 32 64 128)
(defun create-binary-list (start stop)
  (lists:map
    (lambda (n) 
      (round (math:pow 2 n)))
    (lists:seq start stop)))

; Given a number, create a list of binary numbers that make up the original number.
;
; We pass along in the `sol` list the dividend as the last element of the list.
; We extract this element, and adjust each time through the loop.
; I suspect that it is possible to do this much easier using an Erlang Bit String.
;
;(allergies:determine-bits 15)
; => (1 2 4 8 0)
(defun determine-bits (x)
    (lists:foldr 
      (lambda (n sol)
        (let ((dividend (lists:last sol)))
          (if (> (div dividend n) 0)
            (lists:append (lists:droplast (cons n sol)) (list (- dividend n)))
            sol)))
      (list x) (create-binary-list 0 7)))

; A lookup function of numbers to allergy names
;
; (allergies:allergies-name 8)
; => strawberries
(defun allergies-name
  ((()) ())
  ((0) '())
  ((1) 'eggs)
  ((2) 'peanuts)
  ((4) 'shellfish)
  ((8) 'strawberries)
  ((16) 'tomatoes)
  ((32) 'chocolate)
  ((64) 'pollen)
  ((128) 'cats)
)

; Determine which numbers should be extracted, and match them 
; to the appropriate allergy names. 
;
; There was a failing test due to a large number out of bound.
; We now check it and reduce it modulo 256 as needed.
;
; (allergies:allergies 129)
; => (eggs cats)
(defun allergies (x)
  (if (> x 255) (allergies (- x 256))
  (let ((numbers (determine-bits x)))
    (lists:flatten (lists:map 
      (lambda (n) 
        (allergies-name n))
      numbers)))))

; Given a list of allergies via a number,
; are we allergic to the supplied food?
;
; (allergies:allergic-to? 'peanuts 1)
; => false
(defun allergic-to? (name n)
  (let ((a (allergies n)))
    (lists:any
      (lambda (e)
        (if (== name e) 'true 'false))
      a)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; Some test functions. Getting used to lfe 

(defun list-length
  ([()] 0)
  ([(cons first rest)]
   (+ 1 (list-length rest))))

(defun my-test
  ([what 0] 'done)
  ([what times]
   (lfe_io:format "~p~n" (list what))
   (allergic-to? what (- times 1))))
