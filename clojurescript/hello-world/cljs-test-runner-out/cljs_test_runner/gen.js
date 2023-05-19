// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs_test_runner.gen');
goog.require('cljs.core');
goog.require('doo.runner');
goog.require('hello_world_test');
cljs_test_runner.gen.var__GT_sym = (function cljs_test_runner$gen$var__GT_sym(var$){
return cljs.core.symbol.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,var$)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,var$)));
});
cljs_test_runner.gen.var_filter = (function cljs_test_runner$gen$var_filter(p__2132){
var map__2133 = p__2132;
var map__2133__$1 = (((((!((map__2133 == null))))?(((((map__2133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2133):map__2133);
var var$ = cljs.core.get.call(null,map__2133__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var include = cljs.core.get.call(null,map__2133__$1,new cljs.core.Keyword(null,"include","include",153360230));
var exclude = cljs.core.get.call(null,map__2133__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var test_specific = (cljs.core.truth_(var$)?cljs.core.comp.call(null,var$,cljs_test_runner.gen.var__GT_sym):cljs.core.constantly.call(null,true));
var test_inclusion = (cljs.core.truth_(include)?(function (p1__2129_SHARP_){
return cljs.core.apply.call(null,cljs.core.some_fn,include).call(null,cljs.core.meta.call(null,p1__2129_SHARP_));
}):cljs.core.constantly.call(null,true));
var test_exclusion = (cljs.core.truth_(exclude)?(function (p1__2130_SHARP_){
return cljs.core.complement.call(null,cljs.core.apply.call(null,cljs.core.some_fn,exclude)).call(null,cljs.core.meta.call(null,p1__2130_SHARP_));
}):cljs.core.constantly.call(null,true));
return (function (p1__2131_SHARP_){
var and__4115__auto__ = test_specific.call(null,p1__2131_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = test_inclusion.call(null,p1__2131_SHARP_);
if(cljs.core.truth_(and__4115__auto____$1)){
return test_exclusion.call(null,p1__2131_SHARP_);
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
});
cljs_test_runner.gen.filter_vars_BANG_ = (function cljs_test_runner$gen$filter_vars_BANG_(ns_syms,filter_fn){
var seq__2135 = cljs.core.seq.call(null,ns_syms);
var chunk__2136 = null;
var count__2137 = (0);
var i__2138 = (0);
while(true){
if((i__2138 < count__2137)){
var ns_sym = cljs.core._nth.call(null,chunk__2136,i__2138);
var seq__2171_2203 = cljs.core.seq.call(null,ns_sym);
var chunk__2172_2204 = null;
var count__2173_2205 = (0);
var i__2174_2206 = (0);
while(true){
if((i__2174_2206 < count__2173_2205)){
var vec__2181_2207 = cljs.core._nth.call(null,chunk__2172_2204,i__2174_2206);
var __2208 = cljs.core.nth.call(null,vec__2181_2207,(0),null);
var var_2209 = cljs.core.nth.call(null,vec__2181_2207,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,var_2209)))){
if(cljs.core.not.call(null,filter_fn.call(null,var_2209))){
(cljs.core.deref.call(null,var_2209).cljs$lang$test = null);
} else {
}
} else {
}


var G__2210 = seq__2171_2203;
var G__2211 = chunk__2172_2204;
var G__2212 = count__2173_2205;
var G__2213 = (i__2174_2206 + (1));
seq__2171_2203 = G__2210;
chunk__2172_2204 = G__2211;
count__2173_2205 = G__2212;
i__2174_2206 = G__2213;
continue;
} else {
var temp__5735__auto___2214 = cljs.core.seq.call(null,seq__2171_2203);
if(temp__5735__auto___2214){
var seq__2171_2215__$1 = temp__5735__auto___2214;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2171_2215__$1)){
var c__4556__auto___2216 = cljs.core.chunk_first.call(null,seq__2171_2215__$1);
var G__2217 = cljs.core.chunk_rest.call(null,seq__2171_2215__$1);
var G__2218 = c__4556__auto___2216;
var G__2219 = cljs.core.count.call(null,c__4556__auto___2216);
var G__2220 = (0);
seq__2171_2203 = G__2217;
chunk__2172_2204 = G__2218;
count__2173_2205 = G__2219;
i__2174_2206 = G__2220;
continue;
} else {
var vec__2184_2221 = cljs.core.first.call(null,seq__2171_2215__$1);
var __2222 = cljs.core.nth.call(null,vec__2184_2221,(0),null);
var var_2223 = cljs.core.nth.call(null,vec__2184_2221,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,var_2223)))){
if(cljs.core.not.call(null,filter_fn.call(null,var_2223))){
(cljs.core.deref.call(null,var_2223).cljs$lang$test = null);
} else {
}
} else {
}


var G__2224 = cljs.core.next.call(null,seq__2171_2215__$1);
var G__2225 = null;
var G__2226 = (0);
var G__2227 = (0);
seq__2171_2203 = G__2224;
chunk__2172_2204 = G__2225;
count__2173_2205 = G__2226;
i__2174_2206 = G__2227;
continue;
}
} else {
}
}
break;
}


var G__2228 = seq__2135;
var G__2229 = chunk__2136;
var G__2230 = count__2137;
var G__2231 = (i__2138 + (1));
seq__2135 = G__2228;
chunk__2136 = G__2229;
count__2137 = G__2230;
i__2138 = G__2231;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__2135);
if(temp__5735__auto__){
var seq__2135__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2135__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__2135__$1);
var G__2232 = cljs.core.chunk_rest.call(null,seq__2135__$1);
var G__2233 = c__4556__auto__;
var G__2234 = cljs.core.count.call(null,c__4556__auto__);
var G__2235 = (0);
seq__2135 = G__2232;
chunk__2136 = G__2233;
count__2137 = G__2234;
i__2138 = G__2235;
continue;
} else {
var ns_sym = cljs.core.first.call(null,seq__2135__$1);
var seq__2187_2236 = cljs.core.seq.call(null,ns_sym);
var chunk__2188_2237 = null;
var count__2189_2238 = (0);
var i__2190_2239 = (0);
while(true){
if((i__2190_2239 < count__2189_2238)){
var vec__2197_2240 = cljs.core._nth.call(null,chunk__2188_2237,i__2190_2239);
var __2241 = cljs.core.nth.call(null,vec__2197_2240,(0),null);
var var_2242 = cljs.core.nth.call(null,vec__2197_2240,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,var_2242)))){
if(cljs.core.not.call(null,filter_fn.call(null,var_2242))){
(cljs.core.deref.call(null,var_2242).cljs$lang$test = null);
} else {
}
} else {
}


var G__2243 = seq__2187_2236;
var G__2244 = chunk__2188_2237;
var G__2245 = count__2189_2238;
var G__2246 = (i__2190_2239 + (1));
seq__2187_2236 = G__2243;
chunk__2188_2237 = G__2244;
count__2189_2238 = G__2245;
i__2190_2239 = G__2246;
continue;
} else {
var temp__5735__auto___2247__$1 = cljs.core.seq.call(null,seq__2187_2236);
if(temp__5735__auto___2247__$1){
var seq__2187_2248__$1 = temp__5735__auto___2247__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2187_2248__$1)){
var c__4556__auto___2249 = cljs.core.chunk_first.call(null,seq__2187_2248__$1);
var G__2250 = cljs.core.chunk_rest.call(null,seq__2187_2248__$1);
var G__2251 = c__4556__auto___2249;
var G__2252 = cljs.core.count.call(null,c__4556__auto___2249);
var G__2253 = (0);
seq__2187_2236 = G__2250;
chunk__2188_2237 = G__2251;
count__2189_2238 = G__2252;
i__2190_2239 = G__2253;
continue;
} else {
var vec__2200_2254 = cljs.core.first.call(null,seq__2187_2248__$1);
var __2255 = cljs.core.nth.call(null,vec__2200_2254,(0),null);
var var_2256 = cljs.core.nth.call(null,vec__2200_2254,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,var_2256)))){
if(cljs.core.not.call(null,filter_fn.call(null,var_2256))){
(cljs.core.deref.call(null,var_2256).cljs$lang$test = null);
} else {
}
} else {
}


var G__2257 = cljs.core.next.call(null,seq__2187_2248__$1);
var G__2258 = null;
var G__2259 = (0);
var G__2260 = (0);
seq__2187_2236 = G__2257;
chunk__2188_2237 = G__2258;
count__2189_2238 = G__2259;
i__2190_2239 = G__2260;
continue;
}
} else {
}
}
break;
}


var G__2261 = cljs.core.next.call(null,seq__2135__$1);
var G__2262 = null;
var G__2263 = (0);
var G__2264 = (0);
seq__2135 = G__2261;
chunk__2136 = G__2262;
count__2137 = G__2263;
i__2138 = G__2264;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs_test_runner.gen.filter_vars_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"test-hello-world"),new cljs.core.Var(function(){return hello_world_test.test_hello_world;},new cljs.core.Symbol("hello-world-test","test-hello-world","hello-world-test/test-hello-world",71552555,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"hello-world-test","hello-world-test",399832352,null),new cljs.core.Symbol(null,"test-hello-world","test-hello-world",-1577943981,null),"/Users/nbrand/Exercism/clojurescript/hello-world/test/hello_world_test.cljs",26,1,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(hello_world_test.test_hello_world)?hello_world_test.test_hello_world.cljs$lang$test:null)]))], null)], null))], null),cljs_test_runner.gen.var_filter.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"include","include",153360230),null,new cljs.core.Keyword(null,"exclude","exclude",-1230250334),null], null)));
doo.runner.set_entry_point_BANG_.call(null,((doo.runner.karma_QMARK_.call(null))?(function (tc__2121__auto__){
jx.reporter.karma.start.call(null,tc__2121__auto__,1);

return cljs.test.run_block.call(null,(function (){var env2265 = cljs.test.empty_env.call(null,new cljs.core.Keyword("jx.reporter.karma","karma","jx.reporter.karma/karma",404831826));
var summary2266 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,env2265);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"hello-world-test","hello-world-test",399832352,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__1958__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__1958__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
})], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return hello_world_test.test_hello_world;},new cljs.core.Symbol("hello-world-test","test-hello-world","hello-world-test/test-hello-world",71552555,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"hello-world-test","hello-world-test",399832352,null),new cljs.core.Symbol(null,"test-hello-world","test-hello-world",-1577943981,null),"/Users/nbrand/Exercism/clojurescript/hello-world/test/hello_world_test.cljs",26,1,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(hello_world_test.test_hello_world)?hello_world_test.test_hello_world.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__1958__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
})], null));
})());
}),(function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"hello-world-test","hello-world-test",399832352,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core._vreset_BANG_.call(null,summary2266,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary2266),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
})], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,env2265);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary2266));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary2266),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
})], null));
})());
}):(function (){
return cljs.test.run_block.call(null,(function (){var env2267 = cljs.test.empty_env.call(null);
var summary2268 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,env2267);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"hello-world-test","hello-world-test",399832352,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__1958__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__1958__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
})], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return hello_world_test.test_hello_world;},new cljs.core.Symbol("hello-world-test","test-hello-world","hello-world-test/test-hello-world",71552555,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"hello-world-test","hello-world-test",399832352,null),new cljs.core.Symbol(null,"test-hello-world","test-hello-world",-1577943981,null),"/Users/nbrand/Exercism/clojurescript/hello-world/test/hello_world_test.cljs",26,1,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(hello_world_test.test_hello_world)?hello_world_test.test_hello_world.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__1958__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
})], null));
})());
}),(function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"hello-world-test","hello-world-test",399832352,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core._vreset_BANG_.call(null,summary2268,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary2268),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
})], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,env2267);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary2268));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary2268),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
})], null));
})());
})));

//# sourceMappingURL=gen.js.map
