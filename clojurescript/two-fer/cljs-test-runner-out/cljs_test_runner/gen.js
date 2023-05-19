// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs_test_runner.gen');
goog.require('cljs.core');
goog.require('doo.runner');
goog.require('two_fer_test');
cljs_test_runner.gen.var__GT_sym = (function cljs_test_runner$gen$var__GT_sym(var$){
return cljs.core.symbol.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,var$)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,var$)));
});
cljs_test_runner.gen.var_filter = (function cljs_test_runner$gen$var_filter(p__2138){
var map__2139 = p__2138;
var map__2139__$1 = (((((!((map__2139 == null))))?(((((map__2139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2139):map__2139);
var var$ = cljs.core.get.call(null,map__2139__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var include = cljs.core.get.call(null,map__2139__$1,new cljs.core.Keyword(null,"include","include",153360230));
var exclude = cljs.core.get.call(null,map__2139__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var test_specific = (cljs.core.truth_(var$)?cljs.core.comp.call(null,var$,cljs_test_runner.gen.var__GT_sym):cljs.core.constantly.call(null,true));
var test_inclusion = (cljs.core.truth_(include)?(function (p1__2135_SHARP_){
return cljs.core.apply.call(null,cljs.core.some_fn,include).call(null,cljs.core.meta.call(null,p1__2135_SHARP_));
}):cljs.core.constantly.call(null,true));
var test_exclusion = (cljs.core.truth_(exclude)?(function (p1__2136_SHARP_){
return cljs.core.complement.call(null,cljs.core.apply.call(null,cljs.core.some_fn,exclude)).call(null,cljs.core.meta.call(null,p1__2136_SHARP_));
}):cljs.core.constantly.call(null,true));
return (function (p1__2137_SHARP_){
var and__4115__auto__ = test_specific.call(null,p1__2137_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = test_inclusion.call(null,p1__2137_SHARP_);
if(cljs.core.truth_(and__4115__auto____$1)){
return test_exclusion.call(null,p1__2137_SHARP_);
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
});
cljs_test_runner.gen.filter_vars_BANG_ = (function cljs_test_runner$gen$filter_vars_BANG_(ns_syms,filter_fn){
var seq__2141 = cljs.core.seq.call(null,ns_syms);
var chunk__2142 = null;
var count__2143 = (0);
var i__2144 = (0);
while(true){
if((i__2144 < count__2143)){
var ns_sym = cljs.core._nth.call(null,chunk__2142,i__2144);
var seq__2177_2209 = cljs.core.seq.call(null,ns_sym);
var chunk__2178_2210 = null;
var count__2179_2211 = (0);
var i__2180_2212 = (0);
while(true){
if((i__2180_2212 < count__2179_2211)){
var vec__2187_2213 = cljs.core._nth.call(null,chunk__2178_2210,i__2180_2212);
var __2214 = cljs.core.nth.call(null,vec__2187_2213,(0),null);
var var_2215 = cljs.core.nth.call(null,vec__2187_2213,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,var_2215)))){
if(cljs.core.not.call(null,filter_fn.call(null,var_2215))){
(cljs.core.deref.call(null,var_2215).cljs$lang$test = null);
} else {
}
} else {
}


var G__2216 = seq__2177_2209;
var G__2217 = chunk__2178_2210;
var G__2218 = count__2179_2211;
var G__2219 = (i__2180_2212 + (1));
seq__2177_2209 = G__2216;
chunk__2178_2210 = G__2217;
count__2179_2211 = G__2218;
i__2180_2212 = G__2219;
continue;
} else {
var temp__5735__auto___2220 = cljs.core.seq.call(null,seq__2177_2209);
if(temp__5735__auto___2220){
var seq__2177_2221__$1 = temp__5735__auto___2220;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2177_2221__$1)){
var c__4556__auto___2222 = cljs.core.chunk_first.call(null,seq__2177_2221__$1);
var G__2223 = cljs.core.chunk_rest.call(null,seq__2177_2221__$1);
var G__2224 = c__4556__auto___2222;
var G__2225 = cljs.core.count.call(null,c__4556__auto___2222);
var G__2226 = (0);
seq__2177_2209 = G__2223;
chunk__2178_2210 = G__2224;
count__2179_2211 = G__2225;
i__2180_2212 = G__2226;
continue;
} else {
var vec__2190_2227 = cljs.core.first.call(null,seq__2177_2221__$1);
var __2228 = cljs.core.nth.call(null,vec__2190_2227,(0),null);
var var_2229 = cljs.core.nth.call(null,vec__2190_2227,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,var_2229)))){
if(cljs.core.not.call(null,filter_fn.call(null,var_2229))){
(cljs.core.deref.call(null,var_2229).cljs$lang$test = null);
} else {
}
} else {
}


var G__2230 = cljs.core.next.call(null,seq__2177_2221__$1);
var G__2231 = null;
var G__2232 = (0);
var G__2233 = (0);
seq__2177_2209 = G__2230;
chunk__2178_2210 = G__2231;
count__2179_2211 = G__2232;
i__2180_2212 = G__2233;
continue;
}
} else {
}
}
break;
}


var G__2234 = seq__2141;
var G__2235 = chunk__2142;
var G__2236 = count__2143;
var G__2237 = (i__2144 + (1));
seq__2141 = G__2234;
chunk__2142 = G__2235;
count__2143 = G__2236;
i__2144 = G__2237;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__2141);
if(temp__5735__auto__){
var seq__2141__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2141__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__2141__$1);
var G__2238 = cljs.core.chunk_rest.call(null,seq__2141__$1);
var G__2239 = c__4556__auto__;
var G__2240 = cljs.core.count.call(null,c__4556__auto__);
var G__2241 = (0);
seq__2141 = G__2238;
chunk__2142 = G__2239;
count__2143 = G__2240;
i__2144 = G__2241;
continue;
} else {
var ns_sym = cljs.core.first.call(null,seq__2141__$1);
var seq__2193_2242 = cljs.core.seq.call(null,ns_sym);
var chunk__2194_2243 = null;
var count__2195_2244 = (0);
var i__2196_2245 = (0);
while(true){
if((i__2196_2245 < count__2195_2244)){
var vec__2203_2246 = cljs.core._nth.call(null,chunk__2194_2243,i__2196_2245);
var __2247 = cljs.core.nth.call(null,vec__2203_2246,(0),null);
var var_2248 = cljs.core.nth.call(null,vec__2203_2246,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,var_2248)))){
if(cljs.core.not.call(null,filter_fn.call(null,var_2248))){
(cljs.core.deref.call(null,var_2248).cljs$lang$test = null);
} else {
}
} else {
}


var G__2249 = seq__2193_2242;
var G__2250 = chunk__2194_2243;
var G__2251 = count__2195_2244;
var G__2252 = (i__2196_2245 + (1));
seq__2193_2242 = G__2249;
chunk__2194_2243 = G__2250;
count__2195_2244 = G__2251;
i__2196_2245 = G__2252;
continue;
} else {
var temp__5735__auto___2253__$1 = cljs.core.seq.call(null,seq__2193_2242);
if(temp__5735__auto___2253__$1){
var seq__2193_2254__$1 = temp__5735__auto___2253__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2193_2254__$1)){
var c__4556__auto___2255 = cljs.core.chunk_first.call(null,seq__2193_2254__$1);
var G__2256 = cljs.core.chunk_rest.call(null,seq__2193_2254__$1);
var G__2257 = c__4556__auto___2255;
var G__2258 = cljs.core.count.call(null,c__4556__auto___2255);
var G__2259 = (0);
seq__2193_2242 = G__2256;
chunk__2194_2243 = G__2257;
count__2195_2244 = G__2258;
i__2196_2245 = G__2259;
continue;
} else {
var vec__2206_2260 = cljs.core.first.call(null,seq__2193_2254__$1);
var __2261 = cljs.core.nth.call(null,vec__2206_2260,(0),null);
var var_2262 = cljs.core.nth.call(null,vec__2206_2260,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,var_2262)))){
if(cljs.core.not.call(null,filter_fn.call(null,var_2262))){
(cljs.core.deref.call(null,var_2262).cljs$lang$test = null);
} else {
}
} else {
}


var G__2263 = cljs.core.next.call(null,seq__2193_2254__$1);
var G__2264 = null;
var G__2265 = (0);
var G__2266 = (0);
seq__2193_2242 = G__2263;
chunk__2194_2243 = G__2264;
count__2195_2244 = G__2265;
i__2196_2245 = G__2266;
continue;
}
} else {
}
}
break;
}


var G__2267 = cljs.core.next.call(null,seq__2141__$1);
var G__2268 = null;
var G__2269 = (0);
var G__2270 = (0);
seq__2141 = G__2267;
chunk__2142 = G__2268;
count__2143 = G__2269;
i__2144 = G__2270;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs_test_runner.gen.filter_vars_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"two-fer-no-args-test"),new cljs.core.Var(function(){return two_fer_test.two_fer_no_args_test;},new cljs.core.Symbol("two-fer-test","two-fer-no-args-test","two-fer-test/two-fer-no-args-test",1191062948,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"two-fer-test","two-fer-test",-567472516,null),new cljs.core.Symbol(null,"two-fer-no-args-test","two-fer-no-args-test",812276401,null),"/Users/nbrand/Exercism/clojurescript/two-fer/test/two_fer_test.cljs",30,1,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(two_fer_test.two_fer_no_args_test)?two_fer_test.two_fer_no_args_test.cljs$lang$test:null)]))], null)], null))], null),cljs_test_runner.gen.var_filter.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"include","include",153360230),null,new cljs.core.Keyword(null,"exclude","exclude",-1230250334),null], null)));
doo.runner.set_entry_point_BANG_.call(null,((doo.runner.karma_QMARK_.call(null))?(function (tc__2127__auto__){
jx.reporter.karma.start.call(null,tc__2127__auto__,1);

return cljs.test.run_block.call(null,(function (){var env2271 = cljs.test.empty_env.call(null,new cljs.core.Keyword("jx.reporter.karma","karma","jx.reporter.karma/karma",404831826));
var summary2272 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,env2271);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"two-fer-test","two-fer-test",-567472516,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__1960__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__1960__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
})], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return two_fer_test.two_fer_no_args_test;},new cljs.core.Symbol("two-fer-test","two-fer-no-args-test","two-fer-test/two-fer-no-args-test",1191062948,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"two-fer-test","two-fer-test",-567472516,null),new cljs.core.Symbol(null,"two-fer-no-args-test","two-fer-no-args-test",812276401,null),"/Users/nbrand/Exercism/clojurescript/two-fer/test/two_fer_test.cljs",30,1,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(two_fer_test.two_fer_no_args_test)?two_fer_test.two_fer_no_args_test.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__1960__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
})], null));
})());
}),(function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"two-fer-test","two-fer-test",-567472516,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core._vreset_BANG_.call(null,summary2272,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary2272),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
})], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,env2271);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary2272));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary2272),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
})], null));
})());
}):(function (){
return cljs.test.run_block.call(null,(function (){var env2273 = cljs.test.empty_env.call(null);
var summary2274 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,env2273);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"two-fer-test","two-fer-test",-567472516,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__1960__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__1960__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
})], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return two_fer_test.two_fer_no_args_test;},new cljs.core.Symbol("two-fer-test","two-fer-no-args-test","two-fer-test/two-fer-no-args-test",1191062948,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"two-fer-test","two-fer-test",-567472516,null),new cljs.core.Symbol(null,"two-fer-no-args-test","two-fer-no-args-test",812276401,null),"/Users/nbrand/Exercism/clojurescript/two-fer/test/two_fer_test.cljs",30,1,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(two_fer_test.two_fer_no_args_test)?two_fer_test.two_fer_no_args_test.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__1960__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
})], null));
})());
}),(function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"two-fer-test","two-fer-test",-567472516,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core._vreset_BANG_.call(null,summary2274,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary2274),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
})], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,env2273);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary2274));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary2274),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
})], null));
})());
})));

//# sourceMappingURL=gen.js.map
