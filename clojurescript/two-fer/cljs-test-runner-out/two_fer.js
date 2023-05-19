// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('two_fer');
goog.require('cljs.core');
goog.require('clojure.string');
two_fer.two_fer = (function two_fer$two_fer(name){
if((name == null)){
return "One for you, one for me.";
} else {
return clojure.string.join.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["One for ",name,", one for me."], null));
}
});

//# sourceMappingURL=two_fer.js.map
