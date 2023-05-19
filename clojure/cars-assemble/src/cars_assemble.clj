(ns cars-assemble)

(def rate 221)

(defn production-rate
  "Returns the assembly line's production rate per hour,
   taking into account its success rate"
  [speed]
  (cond (< speed 5)  (* rate speed 1.00)
        (< speed 9)  (* rate speed 0.90)
        (< speed 10) (* rate speed 0.80)
        :else        (* rate speed 0.77))
  )

(defn working-items
  "Calculates how many working cars are produced per minute"
  [speed]
  (quot (int (production-rate speed)) 60)
  )
