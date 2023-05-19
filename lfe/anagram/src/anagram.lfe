;;;; 
;;;; @author Nick Brandaleone - May 2023
;;;;
;;;; This program solves an Exercism using LFE.
;;;; See Exercism for details.
;;;; Not sure where to put the module comments
;;;; 

(defmodule anagram
  "Solves an angram puzzle"
  (export all))

(defun find (target candidates)
  "Find if a TARGET word has an anagram in supplied list of CANDIDATES words"
  (let* ([n-target (lists:sort (string:lowercase target))]
         [sol (lists:filter (lambda (c) 
                          (== n-target (lists:sort (string:lowercase c)))) 
                        candidates)])
    (remove-target target sol)))

(defun remove-target (target solution)
  "An anagram can not match itself. This filter check for this edge case"
  (lists:filter (lambda (x)
                 (!= (string:lowercase target) (string:lowercase x))) 
               solution))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Experiments


;; Test for set membership.  Can be done using `lists:member`
;; but I want to explore LFE
(defun member 
  "Takes an atom and a list. Sees if the atom is contained within the list"
  ([x (cons e es)] (when (== x e)) 'true)
  ([x (cons e es)] (member x es))
  ([x ()] 'false))

; erlang - perms
; perms([]) -> [[]]
; perms(L) -> [[H|T] || H <- L, T <- perms(L--[H])]
(defun perms 
  ([()] '())
  ([(cons head tail)] 
    (cons (lists:map #'id/1 `(,head ,tail)) 
          (perms tail)))) 
(defun my-list (l) 
        (id l)) 
(defun id (x) x)
(defun id2 (x y) x y)

(defun reverse (list)
  (reverse list '()))

(defun reverse
  ([(cons head tail) reversed-list]
   (reverse tail (cons head reversed-list)))
  (['() reversed-list]
   reversed-list))

;; print base-10 to binary digits
;(io:format '"~.2B~n~.2B~n~.2B~n" (list 5 50 9000))
