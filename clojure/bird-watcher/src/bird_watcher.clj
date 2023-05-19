(ns bird-watcher)

(def last-week 
  [0 2 5 3 7 8 4]
  )

(defn today [birds]
  (peek birds)
  )

(defn inc-bird [birds]
  (let [c (count birds)]
    (assoc birds (dec c) (inc (today birds))))
  )

(defn day-without-birds? [birds]
  (if (some #(= 0 %) birds) true false)
  )

(defn n-days-count [birds n]
  (let [coll (take n birds)]
    (reduce + 0 coll))
  )

(defn busy-days [birds]
  (count (filter #(>= % 5) birds))
  )

(defn odd-week? [birds]
  (= birds [1 0 1 0 1 0 1])
  )
