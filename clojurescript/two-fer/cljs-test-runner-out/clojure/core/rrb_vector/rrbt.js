// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('clojure.core.rrb_vector.rrbt');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector.protocols');
goog.require('clojure.core.rrb_vector.nodes');
goog.require('clojure.core.rrb_vector.trees');
goog.require('clojure.core.rrb_vector.transients');
clojure.core.rrb_vector.rrbt.rrbt_concat_threshold = (33);
clojure.core.rrb_vector.rrbt.max_extra_search_steps = (2);

/**
 * @interface
 */
clojure.core.rrb_vector.rrbt.AsRRBT = function(){};

var clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$dyn_1884 = (function (v){
var x__4428__auto__ = (((v == null))?null:v);
var m__4429__auto__ = (clojure.core.rrb_vector.rrbt._as_rrbt[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,v);
} else {
var m__4426__auto__ = (clojure.core.rrb_vector.rrbt._as_rrbt["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,v);
} else {
throw cljs.core.missing_protocol.call(null,"AsRRBT.-as-rrbt",v);
}
}
});
clojure.core.rrb_vector.rrbt._as_rrbt = (function clojure$core$rrb_vector$rrbt$_as_rrbt(v){
if((((!((v == null)))) && ((!((v.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 == null)))))){
return v.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1(v);
} else {
return clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$dyn_1884.call(null,v);
}
});


/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ASeq}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IChunkedNext}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {clojure.core.rrb_vector.rrbt.Object}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IChunkedSeq}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
clojure.core.rrb_vector.rrbt.RRBChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2179858668;
this.cljs$lang$protocol_mask$partition1$ = 1536;
});
(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_.call(null,coll);
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,this$__$1);
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(((self__.off + (1)) < self__.node.length)){
var s = clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,self__.vec,self__.node,self__.i,(self__.off + (1)));
if((s == null)){
return null;
} else {
return s;
}
} else {
return cljs.core._chunked_next.call(null,coll__$1);
}
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = cljs.core.hash_coll.call(null,coll__$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential.call(null,coll__$1,other);
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.call(null,cljs.core.subvec.call(null,self__.vec,(self__.i + self__.off),cljs.core.count.call(null,self__.vec)),f);
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.call(null,cljs.core.subvec.call(null,self__.vec,(self__.i + self__.off),cljs.core.count.call(null,self__.vec)),f,start);
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (self__.node[self__.off]);
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(((self__.off + (1)) < self__.node.length)){
var s = clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,self__.vec,self__.node,self__.i,(self__.off + (1)));
if((s == null)){
return cljs.core.List.EMPTY;
} else {
return s;
}
} else {
return cljs.core._chunked_rest.call(null,coll__$1);
}
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_chunk.call(null,self__.node,self__.off);
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var l = self__.node.length;
var s = ((((self__.i + l) < cljs.core._count.call(null,self__.vec)))?clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,self__.vec,(self__.i + l),(0)):null);
if((s == null)){
return cljs.core.List.EMPTY;
} else {
return s;
}
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
var coll__$1 = this;
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,self__.vec,self__.node,self__.i,self__.off,m);
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons.call(null,o,coll__$1);
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var l = self__.node.length;
var s = ((((self__.i + l) < cljs.core._count.call(null,self__.vec)))?clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,self__.vec,(self__.i + l),(0)):null);
if((s == null)){
return null;
} else {
return s;
}
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec","vec",982683596,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"off","off",-2047994980,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.cljs$lang$type = true);

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.cljs$lang$ctorStr = "clojure.core.rrb-vector.rrbt/RRBChunkedSeq");

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"clojure.core.rrb-vector.rrbt/RRBChunkedSeq");
}));

/**
 * Positional factory function for clojure.core.rrb-vector.rrbt/RRBChunkedSeq.
 */
clojure.core.rrb_vector.rrbt.__GT_RRBChunkedSeq = (function clojure$core$rrb_vector$rrbt$__GT_RRBChunkedSeq(vec,node,i,off,meta,__hash){
return (new clojure.core.rrb_vector.rrbt.RRBChunkedSeq(vec,node,i,off,meta,__hash));
});

clojure.core.rrb_vector.rrbt.rrb_chunked_seq = (function clojure$core$rrb_vector$rrbt$rrb_chunked_seq(var_args){
var G__1886 = arguments.length;
switch (G__1886) {
case 3:
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3 = (function (vec,i,off){
var cnt = vec.cnt;
var shift = vec.shift;
var root = vec.root;
var tail = vec.tail;
return (new clojure.core.rrb_vector.rrbt.RRBChunkedSeq(vec,clojure.core.rrb_vector.trees.array_for.call(null,cnt,shift,root,tail,i),i,off,null,null));
}));

(clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4 = (function (vec,node,i,off){
return (new clojure.core.rrb_vector.rrbt.RRBChunkedSeq(vec,node,i,off,null,null));
}));

(clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$5 = (function (vec,node,i,off,meta){
return (new clojure.core.rrb_vector.rrbt.RRBChunkedSeq(vec,node,i,off,meta,null));
}));

(clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$lang$maxFixedArity = 5);

clojure.core.rrb_vector.rrbt.slice_right = (function clojure$core$rrb_vector$rrbt$slice_right(node,shift,end){
if((shift === (0))){
var arr = node.arr;
var new_arr = (new Array(end));
cljs.core.array_copy.call(null,arr,(0),new_arr,(0),end);

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
} else {
var reg_QMARK_ = clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node);
var rngs = (((!(reg_QMARK_)))?clojure.core.rrb_vector.nodes.ranges.call(null,node):null);
var i = (((end - (1)) >> shift) & (31));
var i__$1 = ((reg_QMARK_)?i:(function (){var j = i;
while(true){
if((end <= (rngs[j]))){
return j;
} else {
var G__1888 = (j + (1));
j = G__1888;
continue;
}
break;
}
})());
var child_end = ((reg_QMARK_)?(function (){var ce = cljs.core.mod.call(null,end,((1) << shift));
if((ce === (0))){
return ((1) << shift);
} else {
return ce;
}
})():(((i__$1 > (0)))?(end - (rngs[(i__$1 - (1))])):end));
var arr = node.arr;
var new_child = clojure.core.rrb_vector.rrbt.slice_right.call(null,(arr[i__$1]),(shift - (5)),child_end);
var regular_child_QMARK_ = (((shift === (5)))?((32) === new_child.arr.length):clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,new_child));
var new_arr = (new Array(((((reg_QMARK_) && (regular_child_QMARK_)))?(32):(33))));
var new_child_rng = ((regular_child_QMARK_)?(function (){var m = cljs.core.mod.call(null,child_end,((1) << shift));
if((m === (0))){
return ((1) << shift);
} else {
return m;
}
})():(((shift === (5)))?new_child.arr.length:clojure.core.rrb_vector.nodes.last_range.call(null,new_child)));
cljs.core.array_copy.call(null,arr,(0),new_arr,(0),i__$1);

(new_arr[i__$1] = new_child);

if((!(((reg_QMARK_) && (regular_child_QMARK_))))){
var new_rngs_1889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var step_1890 = ((1) << shift);
if(reg_QMARK_){
var n__4613__auto___1891 = i__$1;
var j_1892 = (0);
while(true){
if((j_1892 < n__4613__auto___1891)){
(new_rngs_1889[j_1892] = ((j_1892 + (1)) * step_1890));

var G__1893 = (j_1892 + (1));
j_1892 = G__1893;
continue;
} else {
}
break;
}
} else {
var n__4613__auto___1894 = i__$1;
var j_1895 = (0);
while(true){
if((j_1895 < n__4613__auto___1894)){
(new_rngs_1889[j_1895] = (rngs[j_1895]));

var G__1896 = (j_1895 + (1));
j_1895 = G__1896;
continue;
} else {
}
break;
}
}

(new_rngs_1889[i__$1] = ((((i__$1 > (0)))?(new_rngs_1889[(i__$1 - (1))]):(0)) + new_child_rng));

(new_rngs_1889[(32)] = (i__$1 + (1)));

(new_arr[(32)] = new_rngs_1889);
} else {
}

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
}
});
clojure.core.rrb_vector.rrbt.slice_left = (function clojure$core$rrb_vector$rrbt$slice_left(node,shift,start,end){
if((shift === (0))){
var arr = node.arr;
var new_len = (arr.length - start);
var new_arr = (new Array(new_len));
cljs.core.array_copy.call(null,arr,start,new_arr,(0),new_len);

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
} else {
var reg_QMARK_ = clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node);
var arr = node.arr;
var rngs = (((!(reg_QMARK_)))?clojure.core.rrb_vector.nodes.ranges.call(null,node):null);
var i = ((start >> shift) & (31));
var i__$1 = ((reg_QMARK_)?i:(function (){var j = i;
while(true){
if((start < (rngs[j]))){
return j;
} else {
var G__1897 = (j + (1));
j = G__1897;
continue;
}
break;
}
})());
var len = ((reg_QMARK_)?(function (){var i__$2 = i__$1;
while(true){
if((((i__$2 === (32))) || (((arr[i__$2]) == null)))){
return i__$2;
} else {
var G__1898 = (i__$2 + (1));
i__$2 = G__1898;
continue;
}
break;
}
})():(rngs[(32)]));
var child_start = (((i__$1 > (0)))?(start - ((reg_QMARK_)?(i__$1 * ((1) << shift)):(rngs[(i__$1 - (1))]))):start);
var child_end = (function (){var x__4217__auto__ = ((1) << shift);
var y__4218__auto__ = (((i__$1 > (0)))?(end - ((reg_QMARK_)?(i__$1 * ((1) << shift)):(rngs[(i__$1 - (1))]))):end);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var new_child = clojure.core.rrb_vector.rrbt.slice_left.call(null,(arr[i__$1]),(shift - (5)),child_start,child_end);
var new_len = (len - i__$1);
var new_len__$1 = (((new_child == null))?(new_len - (1)):new_len);
if((new_len__$1 === (0))){
return null;
} else {
if(reg_QMARK_){
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var rngs__$1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var rng0 = (((((new_child == null)) || ((shift === (5))) || (clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,new_child))))?(((1) << shift) - ((start >> (shift - (5))) & (31))):clojure.core.rrb_vector.nodes.last_range.call(null,new_child));
var step = ((1) << shift);
var j_1899 = (0);
var r_1900 = rng0;
while(true){
if((j_1899 < new_len__$1)){
(rngs__$1[j_1899] = r_1900);

var G__1901 = (j_1899 + (1));
var G__1902 = (r_1900 + step);
j_1899 = G__1901;
r_1900 = G__1902;
continue;
} else {
}
break;
}

(rngs__$1[(new_len__$1 - (1))] = (end - start));

(rngs__$1[(32)] = new_len__$1);

cljs.core.array_copy.call(null,arr,(((new_child == null))?(i__$1 + (1)):i__$1),new_arr,(0),new_len__$1);

if((!((new_child == null)))){
(new_arr[(0)] = new_child);
} else {
}

(new_arr[(32)] = rngs__$1);

return cljs.core.__GT_VectorNode.call(null,node.edit,new_arr);
} else {
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var j_1903 = (0);
var i_1904__$2 = i__$1;
while(true){
if((j_1903 < new_len__$1)){
(new_rngs[j_1903] = ((rngs[i_1904__$2]) - start));

var G__1905 = (j_1903 + (1));
var G__1906 = (i_1904__$2 + (1));
j_1903 = G__1905;
i_1904__$2 = G__1906;
continue;
} else {
}
break;
}

(new_rngs[(32)] = new_len__$1);

cljs.core.array_copy.call(null,arr,(((new_child == null))?(i__$1 + (1)):i__$1),new_arr,(0),new_len__$1);

if((!((new_child == null)))){
(new_arr[(0)] = new_child);
} else {
}

(new_arr[(32)] = new_rngs);

return cljs.core.__GT_VectorNode.call(null,node.edit,new_arr);

}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IVector}
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEditableCollection}
 * @implements {clojure.core.rrb_vector.rrbt.AsRRBT}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {clojure.core.rrb_vector.protocols.PSliceableVector}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.IMapEntry}
 * @implements {clojure.core.rrb_vector.rrbt.Object}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IComparable}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {clojure.core.rrb_vector.protocols.PSpliceableVector}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
clojure.core.rrb_vector.rrbt.Vector = (function (cnt,shift,root,tail,meta,__hash){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2315152159;
this.cljs$lang$protocol_mask$partition1$ = 2052;
});
(clojure.core.rrb_vector.rrbt.Vector.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_.call(null,this$);
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,k,null);
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,k,not_found);
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this$,f,init){
var self__ = this;
var this$__$1 = this;
var i = (0);
var j = (0);
var init__$1 = init;
var arr = clojure.core.rrb_vector.trees.array_for.call(null,self__.cnt,self__.shift,self__.root,self__.tail,i);
var lim = (arr.length - (1));
var step = (lim + (1));
while(true){
var init__$2 = f.call(null,init__$1,(i + j),(arr[j]));
if(cljs.core.reduced_QMARK_.call(null,init__$2)){
return cljs.core.deref.call(null,init__$2);
} else {
if((j < lim)){
var G__1911 = i;
var G__1912 = (j + (1));
var G__1913 = init__$2;
var G__1914 = arr;
var G__1915 = lim;
var G__1916 = step;
i = G__1911;
j = G__1912;
init__$1 = G__1913;
arr = G__1914;
lim = G__1915;
step = G__1916;
continue;
} else {
var i__$1 = (i + step);
if((i__$1 < self__.cnt)){
var arr__$1 = clojure.core.rrb_vector.trees.array_for.call(null,self__.cnt,self__.shift,self__.root,self__.tail,i__$1);
var len = arr__$1.length;
var lim__$1 = (len - (1));
var G__1917 = i__$1;
var G__1918 = (0);
var G__1919 = init__$2;
var G__1920 = arr__$1;
var G__1921 = lim__$1;
var G__1922 = len;
i = G__1917;
j = G__1918;
init__$1 = G__1919;
arr = G__1920;
lim = G__1921;
step = G__1922;
continue;
} else {
return init__$2;
}
}
}
break;
}
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
if(((((0) <= i)) && ((i < self__.cnt)))){
var tail_off = (self__.cnt - self__.tail.length);
if((tail_off <= i)){
return (self__.tail[(i - tail_off)]);
} else {
var i__$1 = i;
var node = self__.root;
var shift__$1 = self__.shift;
while(true){
if((shift__$1 === (0))){
var arr = node.arr;
return (arr[((i__$1 >> shift__$1) & (31))]);
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node)){
var arr = node.arr;
var idx = ((i__$1 >> shift__$1) & (31));
var i__$2 = i__$1;
var node__$1 = (arr[idx]);
var shift__$2 = (shift__$1 - (5));
while(true){
var arr__$1 = node__$1.arr;
var idx__$1 = ((i__$2 >> shift__$2) & (31));
if((shift__$2 === (0))){
return (arr__$1[idx__$1]);
} else {
var G__1923 = i__$2;
var G__1924 = (arr__$1[idx__$1]);
var G__1925 = (shift__$2 - (5));
i__$2 = G__1923;
node__$1 = G__1924;
shift__$2 = G__1925;
continue;
}
break;
}
} else {
var arr = node.arr;
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,node);
var idx = (function (){var j = ((i__$1 >> shift__$1) & (31));
while(true){
if((i__$1 < (rngs[j]))){
return j;
} else {
var G__1926 = (j + (1));
j = G__1926;
continue;
}
break;
}
})();
var i__$2 = (((idx === (0)))?i__$1:(i__$1 - (rngs[(idx - (1))])));
var G__1927 = i__$2;
var G__1928 = (arr[idx]);
var G__1929 = (shift__$1 - (5));
i__$1 = G__1927;
node = G__1928;
shift__$1 = G__1929;
continue;
}
}
break;
}
}
} else {
return cljs.core.vector_index_out_of_bounds.call(null,i,self__.cnt);
}
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){
var self__ = this;
var this$__$1 = this;
if((((i >= (0))) && ((i < self__.cnt)))){
return cljs.core._nth.call(null,this$__$1,i);
} else {
return not_found;
}
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,this$__$1);
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (this$,i,val){
var self__ = this;
var this$__$1 = this;
if(((((0) <= i)) && ((i < self__.cnt)))){
var tail_off = clojure.core.rrb_vector.trees.tail_offset.call(null,self__.cnt,self__.tail);
if((i >= tail_off)){
var new_tail = (new Array(self__.tail.length));
var idx = (i - tail_off);
cljs.core.array_copy.call(null,self__.tail,(0),new_tail,(0),self__.tail.length);

(new_tail[idx] = val);

return (new clojure.core.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,self__.root,new_tail,self__.meta,null));
} else {
return (new clojure.core.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,clojure.core.rrb_vector.trees.do_assoc.call(null,self__.shift,self__.root,i,val),self__.tail,self__.meta,null));
}
} else {
if((i === self__.cnt)){
return cljs.core._conj.call(null,this$__$1,val);
} else {
return cljs.core.vector_index_out_of_bounds.call(null,i,self__.cnt);

}
}
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cnt;
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,(0));
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,(1));
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt > (0))){
return cljs.core._nth.call(null,this$__$1,(self__.cnt - (1)));
} else {
return null;
}
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.cnt)){
return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta);
} else {
if((self__.tail.length > (1))){
var new_tail = (new Array((self__.tail.length - (1))));
cljs.core.array_copy.call(null,self__.tail,(0),new_tail,(0),new_tail.length);

return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt - (1)),self__.shift,self__.root,new_tail,self__.meta,null));
} else {
var new_tail = clojure.core.rrb_vector.trees.array_for.call(null,self__.cnt,self__.shift,self__.root,self__.tail,(self__.cnt - (2)));
var root_cnt = clojure.core.rrb_vector.trees.tail_offset.call(null,self__.cnt,self__.tail);
var new_root = clojure.core.rrb_vector.trees.pop_tail.call(null,self__.shift,root_cnt,self__.root.edit,self__.root);
if((new_root == null)){
return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt - (1)),self__.shift,clojure.core.rrb_vector.nodes.empty_node,new_tail,self__.meta,null));
} else {
if((((self__.shift > (5))) && (((new_root.arr[(1)]) == null)))){
return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt - (1)),(self__.shift - (5)),(new_root.arr[(0)]),new_tail,self__.meta,null));
} else {
return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt - (1)),self__.shift,new_root,new_tail,self__.meta,null));

}
}

}
}
}
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt > (0))){
return (new cljs.core.RSeq(this$__$1,(self__.cnt - (1)),null));
} else {
return null;
}
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = cljs.core.hash_coll.call(null,this$__$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return cljs.core.equiv_sequential.call(null,this$__$1,that);
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return clojure.core.rrb_vector.rrbt.__GT_Transient.call(null,self__.cnt,self__.shift,clojure.core.rrb_vector.transients.editable_root.call(null,self__.root),clojure.core.rrb_vector.transients.editable_tail.call(null,self__.tail),self__.tail.length);
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta);
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$protocols$PSliceableVector$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$protocols$PSliceableVector$_slicev$arity$3 = (function (this$,start,end){
var self__ = this;
var this$__$1 = this;
var new_cnt = (end - start);
if((((start < (0))) || ((end > self__.cnt)))){
throw (new Error("vector index out of bounds"));
} else {
if((start === end)){
return cljs.core.empty.call(null,this$__$1);
} else {
if((start > end)){
throw (new Error("start index greater than end index"));
} else {
var tail_off = clojure.core.rrb_vector.trees.tail_offset.call(null,self__.cnt,self__.tail);
if((start >= tail_off)){
var new_tail = (new Array(new_cnt));
cljs.core.array_copy.call(null,self__.tail,(start - tail_off),new_tail,(0),new_cnt);

return (new clojure.core.rrb_vector.rrbt.Vector(new_cnt,(5),clojure.core.rrb_vector.nodes.empty_node,new_tail,self__.meta,null));
} else {
var tail_cut_QMARK_ = (end > tail_off);
var new_root = ((tail_cut_QMARK_)?self__.root:clojure.core.rrb_vector.rrbt.slice_right.call(null,self__.root,self__.shift,end));
var new_root__$1 = (((start === (0)))?new_root:clojure.core.rrb_vector.rrbt.slice_left.call(null,new_root,self__.shift,start,(function (){var x__4217__auto__ = end;
var y__4218__auto__ = tail_off;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})()));
var new_tail = ((tail_cut_QMARK_)?(function (){var new_len = (end - tail_off);
var new_tail = (new Array(new_len));
cljs.core.array_copy.call(null,self__.tail,(0),new_tail,(0),new_len);

return new_tail;
})():clojure.core.rrb_vector.trees.array_for.call(null,new_cnt,self__.shift,new_root__$1,[],(new_cnt - (1))));
var new_root__$2 = ((tail_cut_QMARK_)?new_root__$1:clojure.core.rrb_vector.trees.pop_tail.call(null,self__.shift,new_cnt,new_root__$1.edit,new_root__$1));
if((new_root__$2 == null)){
return (new clojure.core.rrb_vector.rrbt.Vector(new_cnt,(5),clojure.core.rrb_vector.nodes.empty_node,new_tail,self__.meta,null));
} else {
var r = new_root__$2;
var s = self__.shift;
while(true){
if((((s > (5))) && (((r.arr[(1)]) == null)))){
var G__1930 = (r.arr[(0)]);
var G__1931 = (s - (5));
r = G__1930;
s = G__1931;
continue;
} else {
return (new clojure.core.rrb_vector.rrbt.Vector(new_cnt,s,r,new_tail,self__.meta,null));
}
break;
}
}
}

}
}
}
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f);
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var self__ = this;
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f,start);
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,k,v){
var self__ = this;
var this$__$1 = this;
return cljs.core._assoc_n.call(null,this$__$1,k,v);
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt === (0))){
return null;
} else {
if((clojure.core.rrb_vector.trees.tail_offset.call(null,self__.cnt,self__.tail) === (0))){
return cljs.core.array_seq.call(null,self__.tail);
} else {
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,this$__$1,(0),(0));

}
}
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new clojure.core.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,self__.root,self__.tail,meta__$1,self__.__hash));
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,val){
var self__ = this;
var this$__$1 = this;
if((self__.tail.length < (32))){
var tail_len = self__.tail.length;
var new_tail = (new Array((tail_len + (1))));
cljs.core.array_copy.call(null,self__.tail,(0),new_tail,(0),tail_len);

(new_tail[tail_len] = val);

return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt + (1)),self__.shift,self__.root,new_tail,self__.meta,null));
} else {
var tail_node = cljs.core.__GT_VectorNode.call(null,self__.root.edit,self__.tail);
var new_tail = (function (){var new_arr = [null];
(new_arr[(0)] = val);

return new_arr;
})();
if(clojure.core.rrb_vector.nodes.overflow_QMARK_.call(null,self__.root,self__.shift,self__.cnt)){
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,self__.root)){
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_root = cljs.core.__GT_VectorNode.call(null,self__.root.edit,new_arr);
var G__1908_1932 = new_arr;
(G__1908_1932[(0)] = self__.root);

(G__1908_1932[(1)] = clojure.core.rrb_vector.trees.new_path.call(null,self__.tail,self__.root.edit,self__.shift,tail_node));


return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt + (1)),(self__.shift + (5)),new_root,new_tail,self__.meta,null));
} else {
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_root = cljs.core.__GT_VectorNode.call(null,self__.root.edit,new_arr);
var root_total_range = (clojure.core.rrb_vector.nodes.ranges.call(null,self__.root)[(31)]);
var G__1909_1933 = new_arr;
(G__1909_1933[(0)] = self__.root);

(G__1909_1933[(1)] = clojure.core.rrb_vector.trees.new_path.call(null,self__.tail,self__.root.edit,self__.shift,tail_node));

(G__1909_1933[(32)] = new_rngs);


var G__1910_1934 = new_rngs;
(G__1910_1934[(0)] = root_total_range);

(G__1910_1934[(1)] = (root_total_range + (32)));

(G__1910_1934[(32)] = (2));


return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt + (1)),(self__.shift + (5)),new_root,new_tail,self__.meta,null));
}
} else {
return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt + (1)),self__.shift,clojure.core.rrb_vector.trees.push_tail.call(null,self__.shift,self__.cnt,self__.root.edit,self__.root,tail_node),new_tail,self__.meta,null));
}
}
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.call = (function() {
var G__1935 = null;
var G__1935__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._nth.call(null,this$,k);
});
var G__1935__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._nth.call(null,this$,k,not_found);
});
G__1935 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__1935__2.call(this,self__,k);
case 3:
return G__1935__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__1935.cljs$core$IFn$_invoke$arity$2 = G__1935__2;
G__1935.cljs$core$IFn$_invoke$arity$3 = G__1935__3;
return G__1935;
})()
);

(clojure.core.rrb_vector.rrbt.Vector.prototype.apply = (function (self__,args1907){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1907)));
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._nth.call(null,this$,k);
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._nth.call(null,this$,k,not_found);
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare_indexed.call(null,this$__$1,that);
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$protocols$PSpliceableVector$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$protocols$PSpliceableVector$_splicev$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return clojure.core.rrb_vector.rrbt.splice_rrbts.call(null,this$__$1,clojure.core.rrb_vector.rrbt._as_rrbt.call(null,that));
}));

(clojure.core.rrb_vector.rrbt.Vector.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"shift","shift",-1657295705,null),new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.Symbol(null,"tail","tail",494507963,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(clojure.core.rrb_vector.rrbt.Vector.cljs$lang$type = true);

(clojure.core.rrb_vector.rrbt.Vector.cljs$lang$ctorStr = "clojure.core.rrb-vector.rrbt/Vector");

(clojure.core.rrb_vector.rrbt.Vector.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"clojure.core.rrb-vector.rrbt/Vector");
}));

/**
 * Positional factory function for clojure.core.rrb-vector.rrbt/Vector.
 */
clojure.core.rrb_vector.rrbt.__GT_Vector = (function clojure$core$rrb_vector$rrbt$__GT_Vector(cnt,shift,root,tail,meta,__hash){
return (new clojure.core.rrb_vector.rrbt.Vector(cnt,shift,root,tail,meta,__hash));
});

(cljs.core.PersistentVector.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 = (function (this$){
var this$__$1 = this;
return (new clojure.core.rrb_vector.rrbt.Vector(cljs.core.count.call(null,this$__$1),this$__$1.shift,this$__$1.root,this$__$1.tail,cljs.core.meta.call(null,this$__$1),null));
}));

(cljs.core.Subvec.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Subvec.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 = (function (this$){
var this$__$1 = this;
var v = this$__$1.v;
var start = this$__$1.start;
var end = this$__$1.end;
return clojure.core.rrb_vector.protocols._slicev.call(null,clojure.core.rrb_vector.rrbt._as_rrbt.call(null,v),start,end);
}));
clojure.core.rrb_vector.rrbt.shift_from_to = (function clojure$core$rrb_vector$rrbt$shift_from_to(node,from,to){
while(true){
if((from === to)){
return node;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node)){
var G__1939 = cljs.core.__GT_VectorNode.call(null,node.edit,(function (){var G__1936 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__1936[(0)] = node);

return G__1936;
})());
var G__1940 = ((5) + from);
var G__1941 = to;
node = G__1939;
from = G__1940;
to = G__1941;
continue;
} else {
var G__1942 = cljs.core.__GT_VectorNode.call(null,node.edit,(function (){var G__1937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__1937[(0)] = node);

(G__1937[(32)] = (function (){var G__1938 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__1938[(0)] = clojure.core.rrb_vector.nodes.last_range.call(null,node));

(G__1938[(32)] = (1));

return G__1938;
})());

return G__1937;
})());
var G__1943 = ((5) + from);
var G__1944 = to;
node = G__1942;
from = G__1943;
to = G__1944;
continue;

}
}
break;
}
});
clojure.core.rrb_vector.rrbt.slot_count = (function clojure$core$rrb_vector$rrbt$slot_count(node,shift){
var arr = node.arr;
if((shift === (0))){
return arr.length;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node)){
return clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr);
} else {
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,node);
return (rngs[(32)]);
}
}
});
clojure.core.rrb_vector.rrbt.subtree_branch_count = (function clojure$core$rrb_vector$rrbt$subtree_branch_count(node,shift){
var arr = node.arr;
var cs = (shift - (5));
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node)){
var i = (0);
var sbc = (0);
while(true){
if((i === (32))){
return sbc;
} else {
var temp__5733__auto__ = (arr[i]);
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
var G__1945 = (i + (1));
var G__1946 = (sbc + clojure.core.rrb_vector.rrbt.slot_count.call(null,child,cs));
i = G__1945;
sbc = G__1946;
continue;
} else {
return sbc;
}
}
break;
}
} else {
var lim = (clojure.core.rrb_vector.nodes.ranges.call(null,node)[(32)]);
var i = (0);
var sbc = (0);
while(true){
if((i === lim)){
return sbc;
} else {
var child = (arr[i]);
var G__1947 = (i + (1));
var G__1948 = (sbc + clojure.core.rrb_vector.rrbt.slot_count.call(null,child,cs));
i = G__1947;
sbc = G__1948;
continue;
}
break;
}
}
});
clojure.core.rrb_vector.rrbt.leaf_seq = (function clojure$core$rrb_vector$rrbt$leaf_seq(arr){
return cljs.core.mapcat.call(null,(function (p1__1949_SHARP_){
return p1__1949_SHARP_.arr;
}),cljs.core.take.call(null,clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr),arr));
});
clojure.core.rrb_vector.rrbt.rebalance_leaves = (function clojure$core$rrb_vector$rrbt$rebalance_leaves(n1,cnt1,n2,cnt2,transferred_leaves){
var slc1 = clojure.core.rrb_vector.rrbt.slot_count.call(null,n1,(5));
var slc2 = clojure.core.rrb_vector.rrbt.slot_count.call(null,n2,(5));
var a = (slc1 + slc2);
var sbc1 = clojure.core.rrb_vector.rrbt.subtree_branch_count.call(null,n1,(5));
var sbc2 = clojure.core.rrb_vector.rrbt.subtree_branch_count.call(null,n2,(5));
var p = (sbc1 + sbc2);
var e = (a - (cljs.core.quot.call(null,(p - (1)),(32)) + (1)));
if((e <= (2))){
return [n1,n2];
} else {
if(((sbc1 + sbc2) <= (1024))){
var reg_QMARK_ = (cljs.core.mod.call(null,p,(32)) === (0));
var new_arr = (new Array(((reg_QMARK_)?(32):(33))));
var new_n1 = cljs.core.__GT_VectorNode.call(null,null,new_arr);
var i_1950 = (0);
var bs_1951 = cljs.core.partition_all.call(null,(32),cljs.core.concat.call(null,clojure.core.rrb_vector.rrbt.leaf_seq.call(null,n1.arr),clojure.core.rrb_vector.rrbt.leaf_seq.call(null,n2.arr)));
while(true){
var temp__5735__auto___1952 = cljs.core.seq.call(null,bs_1951);
if(temp__5735__auto___1952){
var xs__6292__auto___1953 = temp__5735__auto___1952;
var block_1954 = cljs.core.first.call(null,xs__6292__auto___1953);
var a_1955__$1 = (new Array(cljs.core.count.call(null,block_1954)));
var i_1956__$1 = (0);
var xs_1957 = cljs.core.seq.call(null,block_1954);
while(true){
if(xs_1957){
(a_1955__$1[i_1956__$1] = cljs.core.first.call(null,xs_1957));

var G__1958 = (i_1956__$1 + (1));
var G__1959 = cljs.core.next.call(null,xs_1957);
i_1956__$1 = G__1958;
xs_1957 = G__1959;
continue;
} else {
}
break;
}

(new_arr[i_1950] = cljs.core.__GT_VectorNode.call(null,null,a_1955__$1));

var G__1960 = (i_1950 + (1));
var G__1961 = cljs.core.next.call(null,bs_1951);
i_1950 = G__1960;
bs_1951 = G__1961;
continue;
} else {
}
break;
}

if((!(reg_QMARK_))){
(new_arr[(32)] = clojure.core.rrb_vector.nodes.regular_ranges.call(null,(5),p));
} else {
}

(transferred_leaves.val = sbc2);

return [new_n1,null];
} else {
var reg_QMARK_ = (cljs.core.mod.call(null,p,(32)) === (0));
var new_arr1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_arr2 = (new Array(((reg_QMARK_)?(32):(33))));
var new_n1 = cljs.core.__GT_VectorNode.call(null,null,new_arr1);
var new_n2 = cljs.core.__GT_VectorNode.call(null,null,new_arr2);
var i_1962 = (0);
var bs_1963 = cljs.core.partition_all.call(null,(32),cljs.core.concat.call(null,clojure.core.rrb_vector.rrbt.leaf_seq.call(null,(new Array(n1))),clojure.core.rrb_vector.rrbt.leaf_seq.call(null,(new Array(n2)))));
while(true){
var temp__5735__auto___1964 = cljs.core.seq.call(null,bs_1963);
if(temp__5735__auto___1964){
var xs__6292__auto___1965 = temp__5735__auto___1964;
var block_1966 = cljs.core.first.call(null,xs__6292__auto___1965);
var a_1967__$1 = (new Array(cljs.core.count.call(null,block_1966)));
var i_1968__$1 = (0);
var xs_1969 = cljs.core.seq.call(null,block_1966);
while(true){
if(xs_1969){
(a_1967__$1[i_1968__$1] = cljs.core.first.call(null,xs_1969));

var G__1970 = (i_1968__$1 + (1));
var G__1971 = cljs.core.next.call(null,xs_1969);
i_1968__$1 = G__1970;
xs_1969 = G__1971;
continue;
} else {
}
break;
}

if((i_1962 < (32))){
(new_arr1[i_1962] = cljs.core.__GT_VectorNode.call(null,null,a_1967__$1));
} else {
(new_arr2[(i_1962 - (32))] = cljs.core.__GT_VectorNode.call(null,null,a_1967__$1));
}

var G__1972 = (i_1962 + (1));
var G__1973 = cljs.core.next.call(null,bs_1963);
i_1962 = G__1972;
bs_1963 = G__1973;
continue;
} else {
}
break;
}

if((!(reg_QMARK_))){
(new_arr2[(32)] = clojure.core.rrb_vector.nodes.regular_ranges.call(null,(5),(p - (1024))));
} else {
}

(transferred_leaves.val = ((1024) - sbc1));

return [new_n1,new_n2];

}
}
});
clojure.core.rrb_vector.rrbt.child_seq = (function clojure$core$rrb_vector$rrbt$child_seq(node,shift,cnt){
var arr = node.arr;
var rngs = ((clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node))?clojure.core.rrb_vector.nodes.regular_ranges.call(null,shift,cnt):clojure.core.rrb_vector.nodes.ranges.call(null,node));
var cs = (cljs.core.truth_(rngs)?(rngs[(32)]):clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr));
var cseq = (function clojure$core$rrb_vector$rrbt$child_seq_$_cseq(c,r){
var arr__$1 = c.arr;
var rngs__$1 = ((clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,c))?clojure.core.rrb_vector.nodes.regular_ranges.call(null,(shift - (5)),r):clojure.core.rrb_vector.nodes.ranges.call(null,c));
var gcs = (cljs.core.truth_(rngs__$1)?(rngs__$1[(32)]):clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr__$1));
return cljs.core.map.call(null,cljs.core.list,cljs.core.take.call(null,gcs,arr__$1),cljs.core.take.call(null,gcs,cljs.core.map.call(null,cljs.core._,rngs__$1,cljs.core.cons.call(null,(0),rngs__$1))));
});
return cljs.core.mapcat.call(null,cseq,cljs.core.take.call(null,cs,arr),cljs.core.take.call(null,cs,cljs.core.map.call(null,cljs.core._,rngs,cljs.core.cons.call(null,(0),rngs))));
});
clojure.core.rrb_vector.rrbt.rebalance = (function clojure$core$rrb_vector$rrbt$rebalance(shift,n1,cnt1,n2,cnt2,transferred_leaves){
if((n2 == null)){
return [n1,null];
} else {
var slc1 = clojure.core.rrb_vector.rrbt.slot_count.call(null,n1,shift);
var slc2 = clojure.core.rrb_vector.rrbt.slot_count.call(null,n2,shift);
var a = (slc1 + slc2);
var sbc1 = clojure.core.rrb_vector.rrbt.subtree_branch_count.call(null,n1,shift);
var sbc2 = clojure.core.rrb_vector.rrbt.subtree_branch_count.call(null,n2,shift);
var p = (sbc1 + sbc2);
var e = (a - (cljs.core.quot.call(null,(p - (1)),(32)) + (1)));
if((e <= (2))){
return [n1,n2];
} else {
if(((sbc1 + sbc2) <= (1024))){
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_n1 = cljs.core.__GT_VectorNode.call(null,null,new_arr);
var i_1980 = (0);
var bs_1981 = cljs.core.partition_all.call(null,(32),cljs.core.concat.call(null,clojure.core.rrb_vector.rrbt.child_seq.call(null,n1,shift,cnt1),clojure.core.rrb_vector.rrbt.child_seq.call(null,n2,shift,cnt2)));
while(true){
var temp__5735__auto___1982 = cljs.core.seq.call(null,bs_1981);
if(temp__5735__auto___1982){
var xs__6292__auto___1983 = temp__5735__auto___1982;
var block_1984 = cljs.core.first.call(null,xs__6292__auto___1983);
var a_1985__$1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var r_1986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(a_1985__$1[(32)] = r_1986);

(r_1986[(32)] = cljs.core.count.call(null,block_1984));

var i_1987__$1 = (0);
var o_1988 = (0);
var gcs_1989 = cljs.core.seq.call(null,block_1984);
while(true){
var temp__5735__auto___1990__$1 = cljs.core.seq.call(null,gcs_1989);
if(temp__5735__auto___1990__$1){
var xs__6292__auto___1991__$1 = temp__5735__auto___1990__$1;
var vec__1974_1992 = cljs.core.first.call(null,xs__6292__auto___1991__$1);
var gc_1993 = cljs.core.nth.call(null,vec__1974_1992,(0),null);
var gcr_1994 = cljs.core.nth.call(null,vec__1974_1992,(1),null);
(a_1985__$1[i_1987__$1] = gc_1993);

(r_1986[i_1987__$1] = (o_1988 + gcr_1994));

var G__1995 = (i_1987__$1 + (1));
var G__1996 = (o_1988 + gcr_1994);
var G__1997 = cljs.core.next.call(null,gcs_1989);
i_1987__$1 = G__1995;
o_1988 = G__1996;
gcs_1989 = G__1997;
continue;
} else {
}
break;
}

(new_arr[i_1980] = cljs.core.__GT_VectorNode.call(null,null,a_1985__$1));

(new_rngs[i_1980] = ((r_1986[((r_1986[(32)]) - (1))]) + (((i_1980 > (0)))?(new_rngs[(i_1980 - (1))]):(0))));

(new_rngs[(32)] = (i_1980 + (1)));

var G__1998 = (i_1980 + (1));
var G__1999 = cljs.core.next.call(null,bs_1981);
i_1980 = G__1998;
bs_1981 = G__1999;
continue;
} else {
}
break;
}

(new_arr[(32)] = new_rngs);

(transferred_leaves.val = cnt2);

return [new_n1,null];
} else {
var new_arr1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_arr2 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs2 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_n1 = cljs.core.__GT_VectorNode.call(null,null,new_arr1);
var new_n2 = cljs.core.__GT_VectorNode.call(null,null,new_arr2);
var i_2000 = (0);
var bs_2001 = cljs.core.partition_all.call(null,(32),cljs.core.concat.call(null,clojure.core.rrb_vector.rrbt.child_seq.call(null,n1,shift,cnt1),clojure.core.rrb_vector.rrbt.child_seq.call(null,n2,shift,cnt2)));
while(true){
var temp__5735__auto___2002 = cljs.core.seq.call(null,bs_2001);
if(temp__5735__auto___2002){
var xs__6292__auto___2003 = temp__5735__auto___2002;
var block_2004 = cljs.core.first.call(null,xs__6292__auto___2003);
var a_2005__$1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var r_2006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(a_2005__$1[(32)] = r_2006);

(r_2006[(32)] = cljs.core.count.call(null,block_2004));

var i_2007__$1 = (0);
var o_2008 = (0);
var gcs_2009 = cljs.core.seq.call(null,block_2004);
while(true){
var temp__5735__auto___2010__$1 = cljs.core.seq.call(null,gcs_2009);
if(temp__5735__auto___2010__$1){
var xs__6292__auto___2011__$1 = temp__5735__auto___2010__$1;
var vec__1977_2012 = cljs.core.first.call(null,xs__6292__auto___2011__$1);
var gc_2013 = cljs.core.nth.call(null,vec__1977_2012,(0),null);
var gcr_2014 = cljs.core.nth.call(null,vec__1977_2012,(1),null);
(a_2005__$1[i_2007__$1] = gc_2013);

(r_2006[i_2007__$1] = (o_2008 + gcr_2014));

var G__2015 = (i_2007__$1 + (1));
var G__2016 = (o_2008 + gcr_2014);
var G__2017 = cljs.core.next.call(null,gcs_2009);
i_2007__$1 = G__2015;
o_2008 = G__2016;
gcs_2009 = G__2017;
continue;
} else {
}
break;
}

if((((i_2000 < (32))) && ((((i_2000 * (32)) + cljs.core.count.call(null,block_2004)) > sbc1)))){
var tbs_2018 = (((i_2000 * (32)) + cljs.core.count.call(null,block_2004)) - sbc1);
var li_2019 = ((r_2006[(32)]) - (1));
var d_2020 = (((tbs_2018 >= (32)))?(r_2006[li_2019]):((r_2006[li_2019]) - (r_2006[(li_2019 - tbs_2018)])));
(transferred_leaves.val = (transferred_leaves.val + d_2020));
} else {
}

var new_arr_2021 = (((i_2000 < (32)))?new_arr1:new_arr2);
var new_rngs_2022 = (((i_2000 < (32)))?new_rngs1:new_rngs2);
var i_2023__$1 = cljs.core.mod.call(null,i_2000,(32));
(new_arr_2021[i_2023__$1] = cljs.core.__GT_VectorNode.call(null,null,a_2005__$1));

(new_rngs_2022[i_2023__$1] = ((r_2006[((r_2006[(32)]) - (1))]) + (((i_2023__$1 > (0)))?(new_rngs_2022[(i_2023__$1 - (1))]):(0))));

(new_rngs_2022[(32)] = (i_2023__$1 + (1)));

var G__2024 = (i_2000 + (1));
var G__2025 = cljs.core.next.call(null,bs_2001);
i_2000 = G__2024;
bs_2001 = G__2025;
continue;
} else {
}
break;
}

(new_arr1[(32)] = new_rngs1);

(new_arr2[(32)] = new_rngs2);

return [new_n1,new_n2];

}
}
}
});
clojure.core.rrb_vector.rrbt.zippath = (function clojure$core$rrb_vector$rrbt$zippath(shift,n1,cnt1,n2,cnt2,transferred_leaves){
if((shift === (5))){
return clojure.core.rrb_vector.rrbt.rebalance_leaves.call(null,n1,cnt1,n2,cnt2,transferred_leaves);
} else {
var c1 = clojure.core.rrb_vector.nodes.last_child.call(null,n1);
var c2 = clojure.core.rrb_vector.nodes.first_child.call(null,n2);
var ccnt1 = ((clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,n1))?(function (){var m = cljs.core.mod.call(null,cnt1,((1) << shift));
if((m === (0))){
return ((1) << shift);
} else {
return m;
}
})():(function (){var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,n1);
var i = ((rngs[(32)]) - (1));
if((i === (0))){
return (rngs[(0)]);
} else {
return ((rngs[i]) - (rngs[(i - (1))]));
}
})());
var ccnt2 = ((clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,n2))?(function (){var m = cljs.core.mod.call(null,cnt2,((1) << shift));
if((m === (0))){
return ((1) << shift);
} else {
return m;
}
})():(clojure.core.rrb_vector.nodes.ranges.call(null,n2)[(0)]));
var next_transferred_leaves = (new cljs.core.Box((0)));
var vec__2026 = clojure.core.rrb_vector.rrbt.zippath.call(null,(shift - (5)),c1,ccnt1,c2,ccnt2,next_transferred_leaves);
var new_c1 = cljs.core.nth.call(null,vec__2026,(0),null);
var new_c2 = cljs.core.nth.call(null,vec__2026,(1),null);
var d = next_transferred_leaves.val;
(transferred_leaves.val = (transferred_leaves.val + d));

return clojure.core.rrb_vector.rrbt.rebalance.call(null,shift,(((c1 === new_c1))?n1:clojure.core.rrb_vector.nodes.replace_rightmost_child.call(null,shift,n1,new_c1,d)),(cnt1 + d),(cljs.core.truth_(new_c2)?(((c2 === new_c2))?n2:clojure.core.rrb_vector.nodes.replace_leftmost_child.call(null,shift,n2,cnt2,new_c2,d)):clojure.core.rrb_vector.nodes.remove_leftmost_child.call(null,shift,n2)),(cnt2 - d),transferred_leaves);
}
});
clojure.core.rrb_vector.rrbt.squash_nodes = (function clojure$core$rrb_vector$rrbt$squash_nodes(shift,n1,cnt1,n2,cnt2){
var arr1 = n1.arr;
var arr2 = n2.arr;
var li1 = clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr1);
var li2 = clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr2);
var slots = cljs.core.concat.call(null,cljs.core.take.call(null,li1,arr1),cljs.core.take.call(null,li2,arr2));
if((cljs.core.count.call(null,slots) > (32))){
return [n1,n2];
} else {
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var rngs1 = cljs.core.take.call(null,li1,((clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,n1))?clojure.core.rrb_vector.nodes.regular_ranges.call(null,shift,cnt1):clojure.core.rrb_vector.nodes.ranges.call(null,n1)));
var rngs2 = cljs.core.take.call(null,li2,((clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,n2))?clojure.core.rrb_vector.nodes.regular_ranges.call(null,shift,cnt2):clojure.core.rrb_vector.nodes.ranges.call(null,n2)));
var rngs2__$1 = (function (){var r = cljs.core.last.call(null,rngs1);
return cljs.core.map.call(null,(function (p1__2029_SHARP_){
return (p1__2029_SHARP_ + r);
}),rngs2);
})();
var rngs = cljs.core.concat.call(null,rngs1,rngs2__$1);
(new_arr[(32)] = new_rngs);

var i_2030 = (0);
var cs_2031 = cljs.core.seq.call(null,slots);
while(true){
if(cs_2031){
(new_arr[i_2030] = cljs.core.first.call(null,cs_2031));

var G__2032 = (i_2030 + (1));
var G__2033 = cljs.core.next.call(null,cs_2031);
i_2030 = G__2032;
cs_2031 = G__2033;
continue;
} else {
}
break;
}

var i_2034 = (0);
var rngs_2035__$1 = cljs.core.seq.call(null,rngs);
while(true){
if(rngs_2035__$1){
(new_rngs[i_2034] = cljs.core.first.call(null,rngs_2035__$1));

var G__2036 = (i_2034 + (1));
var G__2037 = cljs.core.next.call(null,rngs_2035__$1);
i_2034 = G__2036;
rngs_2035__$1 = G__2037;
continue;
} else {
(new_rngs[(32)] = i_2034);
}
break;
}

return [cljs.core.__GT_VectorNode.call(null,null,new_arr),null];
}
});
clojure.core.rrb_vector.rrbt.splice_rrbts = (function clojure$core$rrb_vector$rrbt$splice_rrbts(v1,v2){
if((cljs.core.count.call(null,v1) === (0))){
return v2;
} else {
if((cljs.core.count.call(null,v2) < (33))){
return cljs.core.into.call(null,v1,v2);
} else {
var s1 = v1.shift;
var s2 = v2.shift;
var r1 = v1.root;
var o_QMARK_ = clojure.core.rrb_vector.nodes.overflow_QMARK_.call(null,r1,s1,(cljs.core.count.call(null,v1) + ((32) - v1.tail.length)));
var r1__$1 = ((o_QMARK_)?(function (){var tail = v1.tail;
var tail_node = cljs.core.__GT_VectorNode.call(null,null,tail);
var reg_QMARK_ = ((clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,r1)) && ((tail.length === (32))));
var arr = (new Array(((reg_QMARK_)?(32):(33))));
(arr[(0)] = r1);

(arr[(1)] = clojure.core.rrb_vector.nodes.new_path_STAR_.call(null,s1,tail_node));

if((!(reg_QMARK_))){
var rngs_2045 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(rngs_2045[(32)] = (2));

(rngs_2045[(0)] = (cljs.core.count.call(null,v1) - tail.length));

(rngs_2045[(1)] = cljs.core.count.call(null,v1));

(arr[(32)] = rngs_2045);
} else {
}

return cljs.core.__GT_VectorNode.call(null,null,arr);
})():clojure.core.rrb_vector.nodes.fold_tail.call(null,r1,s1,clojure.core.rrb_vector.trees.tail_offset.call(null,v1.cnt,v1.tail),v1.tail));
var s1__$1 = ((o_QMARK_)?(s1 + (5)):s1);
var r2 = v2.root;
var s = (function (){var x__4214__auto__ = s1__$1;
var y__4215__auto__ = s2;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var r1__$2 = clojure.core.rrb_vector.rrbt.shift_from_to.call(null,r1__$1,s1__$1,s);
var r2__$1 = clojure.core.rrb_vector.rrbt.shift_from_to.call(null,r2,s2,s);
var transferred_leaves = (new cljs.core.Box((0)));
var vec__2038 = clojure.core.rrb_vector.rrbt.zippath.call(null,s,r1__$2,cljs.core.count.call(null,v1),r2__$1,(cljs.core.count.call(null,v2) - v2.tail.length),transferred_leaves);
var n1 = cljs.core.nth.call(null,vec__2038,(0),null);
var n2 = cljs.core.nth.call(null,vec__2038,(1),null);
var d = transferred_leaves.val;
var ncnt1 = (cljs.core.count.call(null,v1) + d);
var ncnt2 = ((cljs.core.count.call(null,v2) - v2.tail.length) - d);
var vec__2041 = (((n2 === r2__$1))?clojure.core.rrb_vector.rrbt.squash_nodes.call(null,s,n1,ncnt1,n2,ncnt2):[n1,n2]);
var n1__$1 = cljs.core.nth.call(null,vec__2041,(0),null);
var n2__$1 = cljs.core.nth.call(null,vec__2041,(1),null);
var ncnt1__$1 = (cljs.core.truth_(n2__$1)?ncnt1:(ncnt1 + ncnt2));
var ncnt2__$1 = (cljs.core.truth_(n2__$1)?ncnt2:(0));
if(cljs.core.truth_(n2__$1)){
var arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_root = cljs.core.__GT_VectorNode.call(null,null,arr);
(arr[(0)] = n1__$1);

(arr[(1)] = n2__$1);

(arr[(32)] = (function (){var G__2044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__2044[(0)] = ncnt1__$1);

(G__2044[(1)] = (ncnt1__$1 + ncnt2__$1));

(G__2044[(32)] = (2));

return G__2044;
})());

return (new clojure.core.rrb_vector.rrbt.Vector((cljs.core.count.call(null,v1) + cljs.core.count.call(null,v2)),(s + (5)),new_root,v2.tail,null,null));
} else {
var r = n1__$1;
var s__$1 = s;
while(true){
if((((s__$1 > (5))) && (((r.arr[(1)]) == null)))){
var G__2046 = (r.arr[(0)]);
var G__2047 = (s__$1 - (5));
r = G__2046;
s__$1 = G__2047;
continue;
} else {
return (new clojure.core.rrb_vector.rrbt.Vector((cljs.core.count.call(null,v1) + cljs.core.count.call(null,v2)),s__$1,r,v2.tail,null,null));
}
break;
}
}

}
}
});

/**
* @constructor
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ITransientCollection}
 * @implements {cljs.core.ITransientVector}
 * @implements {cljs.core.ITransientAssociative}
*/
clojure.core.rrb_vector.rrbt.Transient = (function (cnt,shift,root,tail,tidx){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.tidx = tidx;
this.cljs$lang$protocol_mask$partition1$ = 88;
this.cljs$lang$protocol_mask$partition0$ = 2;
});
(clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
if((self__.tidx < (32))){
(self__.tail[self__.tidx] = o);

(self__.cnt = (self__.cnt + (1)));

(self__.tidx = (self__.tidx + (1)));

return this$__$1;
} else {
var tail_node = cljs.core.__GT_VectorNode.call(null,self__.root.edit,self__.tail);
var new_tail = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(new_tail[(0)] = o);

(self__.tail = new_tail);

(self__.tidx = (1));

if(clojure.core.rrb_vector.nodes.overflow_QMARK_.call(null,self__.root,self__.shift,self__.cnt)){
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,self__.root)){
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var G__2048_2051 = new_arr;
(G__2048_2051[(0)] = self__.root);

(G__2048_2051[(1)] = clojure.core.rrb_vector.trees.new_path.call(null,self__.tail,self__.root.edit,self__.shift,tail_node));


(self__.root = cljs.core.__GT_VectorNode.call(null,self__.root.edit,new_arr));

(self__.shift = (self__.shift + (5)));

(self__.cnt = (self__.cnt + (1)));

return this$__$1;
} else {
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_root = cljs.core.__GT_VectorNode.call(null,self__.root.edit,new_arr);
var root_total_range = (clojure.core.rrb_vector.nodes.ranges.call(null,self__.root)[(31)]);
var G__2049_2052 = new_arr;
(G__2049_2052[(0)] = self__.root);

(G__2049_2052[(1)] = clojure.core.rrb_vector.trees.new_path.call(null,self__.tail,self__.root.edit,self__.shift,tail_node));

(G__2049_2052[(32)] = new_rngs);


var G__2050_2053 = new_rngs;
(G__2050_2053[(0)] = root_total_range);

(G__2050_2053[(1)] = (root_total_range + (32)));

(G__2050_2053[(32)] = (2));


(self__.root = new_root);

(self__.shift = (self__.shift + (5)));

(self__.cnt = (self__.cnt + (1)));

return this$__$1;
}
} else {
var new_root = clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,self__.shift,self__.cnt,self__.root.edit,self__.root,tail_node);
(self__.root = new_root);

(self__.cnt = (self__.cnt + (1)));

return this$__$1;
}
}
} else {
throw (new Error("conj! after persistent!"));
}
}));

(clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
(self__.root.edit = null);

var trimmed_tail = (new Array(self__.tidx));
cljs.core.array_copy.call(null,self__.tail,(0),trimmed_tail,(0),self__.tidx);

return (new clojure.core.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,self__.root,trimmed_tail,null,null));
} else {
throw (new Error("persistent! called twice"));
}
}));

(clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (this$,key,val){
var self__ = this;
var this$__$1 = this;
return cljs.core._assoc_n_BANG_.call(null,this$__$1,key,val);
}));

(clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (this$,i,val){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
if(((((0) <= i)) && ((i < self__.cnt)))){
var tail_off = (self__.cnt - self__.tidx);
if((tail_off <= i)){
(self__.tail[(i - tail_off)] = val);
} else {
(self__.root = clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,self__.shift,self__.root.edit,self__.root,i,val));
}

return this$__$1;
} else {
if((i === self__.cnt)){
return cljs.core._conj_BANG_.call(null,this$__$1,val);
} else {
return cljs.core.vector_index_out_of_bounds.call(null,i,self__.cnt);

}
}
} else {
throw (new Error("assoc! after persistent!"));
}
}));

(clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
if((self__.cnt === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.cnt)){
(self__.cnt = (0));

(self__.tidx = (0));

(self__.tail[(0)] = null);

return this$__$1;
} else {
if((self__.tidx > (1))){
(self__.cnt = (self__.cnt - (1)));

(self__.tidx = (self__.tidx - (1)));

(self__.tail[self__.tidx] = null);

return this$__$1;
} else {
var new_tail_base = clojure.core.rrb_vector.trees.array_for.call(null,self__.cnt,self__.shift,self__.root,self__.tail,(self__.cnt - (2)));
var new_tail = cljs.core.aclone.call(null,new_tail_base);
var new_tidx = new_tail_base.length;
var new_root = clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,self__.shift,self__.cnt,self__.root.edit,self__.root);
if((new_root == null)){
(self__.cnt = (self__.cnt - (1)));

(self__.root = clojure.core.rrb_vector.transients.ensure_editable.call(null,self__.root.edit,clojure.core.rrb_vector.nodes.empty_node));

(self__.tail = new_tail);

(self__.tidx = new_tidx);

return this$__$1;
} else {
if((((self__.shift > (5))) && (((new_root.arr[(1)]) == null)))){
(self__.cnt = (self__.cnt - (1)));

(self__.shift = (self__.shift - (5)));

(self__.root = (new_root.arr[(0)]));

(self__.tail = new_tail);

(self__.tidx = new_tidx);

return this$__$1;
} else {
(self__.cnt = (self__.cnt - (1)));

(self__.root = new_root);

(self__.tail = new_tail);

(self__.tidx = new_tidx);

return this$__$1;

}
}

}
}
}
} else {
throw (new Error("count after persistent!"));
}
}));

(clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
return self__.cnt;
} else {
throw (new Error("count after persistent!"));
}
}));

(clojure.core.rrb_vector.rrbt.Transient.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"shift","shift",-1657295705,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tail","tail",494507963,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tidx","tidx",1939123455,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(clojure.core.rrb_vector.rrbt.Transient.cljs$lang$type = true);

(clojure.core.rrb_vector.rrbt.Transient.cljs$lang$ctorStr = "clojure.core.rrb-vector.rrbt/Transient");

(clojure.core.rrb_vector.rrbt.Transient.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"clojure.core.rrb-vector.rrbt/Transient");
}));

/**
 * Positional factory function for clojure.core.rrb-vector.rrbt/Transient.
 */
clojure.core.rrb_vector.rrbt.__GT_Transient = (function clojure$core$rrb_vector$rrbt$__GT_Transient(cnt,shift,root,tail,tidx){
return (new clojure.core.rrb_vector.rrbt.Transient(cnt,shift,root,tail,tidx));
});


//# sourceMappingURL=rrbt.js.map
