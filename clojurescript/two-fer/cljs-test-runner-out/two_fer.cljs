(ns two-fer
  (:require [clojure.string :as str]))

(defn two-fer [name] ;; <-- arguments come here.
  (if (nil? name)
    "One for you, one for me."
    (str/join ["One for ", name, ", one for me."])))
