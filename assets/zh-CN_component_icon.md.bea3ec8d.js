import{_ as m}from"./chunks/contributors.1da018b8.js";import{r as e,o as _,c as v,a as n,w as t,e as c,b as a,d as u,u as s,l as o,x as i,G as r,ag as f,B as k}from"./app.b23e5cc8.js";const b=c(`<h1 id="icon-\u56FE\u6807" tabindex="-1">Icon \u56FE\u6807 <a class="header-anchor" href="#icon-\u56FE\u6807" aria-hidden="true">#</a></h1><p>Element Plus \u63D0\u4F9B\u4E86\u4E00\u5957\u5E38\u7528\u7684\u56FE\u6807\u96C6\u5408\u3002</p><h2 id="\u4F7F\u7528\u56FE\u6807" tabindex="-1">\u4F7F\u7528\u56FE\u6807 <a class="header-anchor" href="#\u4F7F\u7528\u56FE\u6807" aria-hidden="true">#</a></h2><ul><li><p>\u5982\u679C\u4F60\u60F3\u50CF\u7528\u4F8B\u4E00\u6837<strong>\u76F4\u63A5\u4F7F\u7528</strong>\uFF0C\u4F60\u9700\u8981<a href="https://v3.vuejs.org/guide/component-registration.html#global-registration" target="_blank" rel="noopener noreferrer">\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6</a>\uFF0C\u624D\u80FD\u591F\u76F4\u63A5\u5728\u9879\u76EE\u91CC\u4F7F\u7528\u3002</p></li><li><p>\u5982\u82E5\u60F3\u67E5\u770B\u6240\u6709\u53EF\u7528\u7684 SVG \u56FE\u6807\u8BF7\u67E5\u9605 <a href="https://unpkg.com/browse/@element-plus/icons-vue@latest/dist/es/" target="_blank" rel="noopener noreferrer">@element-plus/icons-vue</a> \u548C <a href="https://github.com/element-plus/element-plus-icons" target="_blank" rel="noopener noreferrer">element-plus-icons</a> \u7684\u6E90\u4EE3\u7801\u6216\u5F53\u524D\u9875\u7684 <a href="#icon-collection">Icon Collection</a></p></li></ul><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><h3 id="\u4F7F\u7528\u5305\u7BA1\u7406\u5668" tabindex="-1">\u4F7F\u7528\u5305\u7BA1\u7406\u5668 <a class="header-anchor" href="#\u4F7F\u7528\u5305\u7BA1\u7406\u5668" aria-hidden="true">#</a></h3><div class="language-shell"><pre><code><span class="token comment"># \u9009\u62E9\u4E00\u4E2A\u4F60\u559C\u6B22\u7684\u5305\u7BA1\u7406\u5668</span>

<span class="token comment"># NPM</span>
$ <span class="token function">npm</span> <span class="token function">install</span> @element-plus/icons-vue
<span class="token comment"># Yarn</span>
$ <span class="token function">yarn</span> <span class="token function">add</span> @element-plus/icons-vue
<span class="token comment"># pnpm</span>
$ <span class="token function">pnpm</span> <span class="token function">install</span> @element-plus/icons-vue
</code></pre></div><h3 id="\u6CE8\u518C\u6240\u6709\u56FE\u6807" tabindex="-1">\u6CE8\u518C\u6240\u6709\u56FE\u6807 <a class="header-anchor" href="#\u6CE8\u518C\u6240\u6709\u56FE\u6807" aria-hidden="true">#</a></h3><p>\u60A8\u9700\u8981\u4ECE <code>@element-plus/icons-vue</code> \u4E2D\u5BFC\u5165\u6240\u6709\u56FE\u6807\u5E76\u8FDB\u884C\u5168\u5C40\u6CE8\u518C\u3002</p><div class="language-ts"><pre><code><span class="token comment">// main.ts</span>

<span class="token comment">// \u5982\u679C\u60A8\u6B63\u5728\u4F7F\u7528CDN\u5F15\u5165\uFF0C\u8BF7\u5220\u9664\u4E0B\u9762\u4E00\u884C\u3002</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ElementPlusIconsVue <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/icons-vue&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> component<span class="token punctuation">]</span> <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>ElementPlusIconsVue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> component<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u60A8\u4E5F\u53EF\u4EE5\u53C2\u8003 <a href="https://codepen.io/sxzz/pen/xxpvdrg" target="_blank" rel="noopener noreferrer">\u6B64\u6A21\u677F</a>\u3002</p><h3 id="\u6D4F\u89C8\u5668\u76F4\u63A5\u5F15\u5165" tabindex="-1">\u6D4F\u89C8\u5668\u76F4\u63A5\u5F15\u5165 <a class="header-anchor" href="#\u6D4F\u89C8\u5668\u76F4\u63A5\u5F15\u5165" aria-hidden="true">#</a></h3><p>\u76F4\u63A5\u901A\u8FC7\u6D4F\u89C8\u5668\u7684 HTML \u6807\u7B7E\u5BFC\u5165 Element Plus\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u4F7F\u7528\u5168\u5C40\u53D8\u91CF <code>ElementPlusIconsVue</code>\u4E86\u3002</p><p>\u6839\u636E\u4E0D\u540C\u7684 CDN \u63D0\u4F9B\u5546\u6709\u4E0D\u540C\u7684\u5F15\u5165\u65B9\u5F0F\uFF0C \u6839\u636E\u4E0D\u540C\u7684 CDN \u63D0\u4F9B\u5546\u6709\u4E0D\u540C\u7684\u5F15\u5165\u65B9\u5F0F\uFF0C \u6211\u4EEC\u5728\u8FD9\u91CC\u4EE5 <a href="https://unpkg.com" target="_blank" rel="noopener noreferrer">unpkg</a> \u548C <a href="https://jsdelivr.com" target="_blank" rel="noopener noreferrer">jsDelivr</a> \u4E3E\u4F8B\u3002 \u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5176\u5B83\u7684 CDN \u4F9B\u5E94\u5546\u3002</p><h4 id="unpkg" tabindex="-1">unpkg <a class="header-anchor" href="#unpkg" aria-hidden="true">#</a></h4><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/@element-plus/icons-vue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="jsdelivr" tabindex="-1">jsDelivr <a class="header-anchor" href="#jsdelivr" aria-hidden="true">#</a></h4><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/@element-plus/icons-vue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u6211\u4EEC\u5EFA\u8BAE\u4F7F\u7528 CDN \u5F15\u5165 Element Plus \u7684\u7528\u6237\u5728\u94FE\u63A5\u5730\u5740\u4E0A\u9501\u5B9A\u7248\u672C\uFF0C\u4EE5\u514D\u5C06\u6765 Element Plus \u5347\u7EA7\u65F6\u53D7\u5230\u975E\u517C\u5BB9\u6027\u66F4\u65B0\u7684\u5F71\u54CD\u3002 \u9501\u5B9A\u7248\u672C\u7684\u65B9\u6CD5\u8BF7\u67E5\u770B <a href="https://unpkg.com" target="_blank" rel="noopener noreferrer">unpkg.com</a>\u3002</p></div><h3 id="\u81EA\u52A8\u5BFC\u5165" tabindex="-1">\u81EA\u52A8\u5BFC\u5165 <a class="header-anchor" href="#\u81EA\u52A8\u5BFC\u5165" aria-hidden="true">#</a></h3><p>\u4F7F\u7528 <a href="https://github.com/antfu/unplugin-icons" target="_blank" rel="noopener noreferrer">unplugin-icons</a> \u548C <a href="https://github.com/antfu/unplugin-auto-import" target="_blank" rel="noopener noreferrer">unplugin-auto-import</a> \u4ECE iconify \u4E2D\u81EA\u52A8\u5BFC\u5165\u4EFB\u4F55\u56FE\u6807\u96C6\u3002 \u60A8\u53EF\u4EE5\u53C2\u8003<a href="https://github.com/sxzz/element-plus-best-practices/blob/db2dfc983ccda5570033a0ac608a1bd9d9a7f658/vite.config.ts#L21-L58" target="_blank" rel="noopener noreferrer">\u6B64\u6A21\u677F</a>\u3002</p><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u56E0\u4E3A HTML \u6807\u51C6\u5DF2\u7ECF\u5B9A\u4E49\u4E86\u4E00\u4E2A\u540D\u4E3A <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu" target="_blank" rel="noopener noreferrer">menu</a> \u7684\u6807\u7B7E\uFF0C \u5982\u679C\u60A8\u6CE8\u518C\u7684 <code>menu</code> \u65E0\u6CD5\u6B63\u5E38\u5DE5\u4F5C\uFF0C\u60A8\u9700\u8981\u4F7F\u7528\u522B\u540D\u6765\u6E32\u67D3\u56FE\u6807\u3002</p></div><div class="language-vue"><pre><code><span class="token comment">&lt;!-- Use el-icon to provide attributes to SVG icon --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>size<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Edit</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- Or use it independently without derive attributes from parent --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Edit</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,24),y=c(`<h2 id="\u7ED3\u5408-el-icon-\u4F7F\u7528" tabindex="-1">\u7ED3\u5408 el-icon \u4F7F\u7528 <a class="header-anchor" href="#\u7ED3\u5408-el-icon-\u4F7F\u7528" aria-hidden="true">#</a></h2><p><code>el-icon</code> \u4E3A raw SVG \u56FE\u6807\u63D0\u4F9B\u989D\u5916\u7684\u5C5E\u6027, \u63D0\u4F9B\u7684\u8BE6\u7EC6\u5C5E\u6027\u8BF7\u7EE7\u7EED\u9605\u8BFB\u3002</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    with extra class <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>is-loading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span>, your icon is able to rotate 360 deg in 2
    seconds, you can also override this
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Edit</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#409EFC<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no-inherit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Share</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Delete</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>is-loading<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Loading</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">vertical-align</span><span class="token punctuation">:</span> middle</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Search</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">vertical-align</span><span class="token punctuation">:</span> middle</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span> Search <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,3),q=a("p",null,[u(" \u901A\u8FC7\u6DFB\u52A0\u989D\u5916\u7684\u7C7B\u540D "),a("b",null,"is-loading"),u("\uFF0C\u4F60\u7684\u56FE\u6807\u5C31\u53EF\u4EE5\u5728 2 \u79D2\u5185\u65CB\u8F6C 360 \u5EA6\uFF0C\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u6539\u5199\u60F3\u8981\u7684\u52A8\u753B\u3002 ")],-1),x={style:{display:"flex","align-items":"center","justify-content":"space-between",width:"100%"}},S=a("span",{style:{"vertical-align":"middle"}},"\u641C\u7D22",-1),T=c(`<h2 id="\u76F4\u63A5\u4F7F\u7528-svg-\u56FE\u6807" tabindex="-1">\u76F4\u63A5\u4F7F\u7528 SVG \u56FE\u6807 <a class="header-anchor" href="#\u76F4\u63A5\u4F7F\u7528-svg-\u56FE\u6807" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u7531\u4E8ESVG\u56FE\u6807\u9ED8\u8BA4\u4E0D\u643A\u5E26\u4EFB\u4F55\u5C5E\u6027 --&gt;</span>
    <span class="token comment">&lt;!-- \u4F60\u9700\u8981\u76F4\u63A5\u63D0\u4F9B\u5B83\u4EEC --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Edit</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px</span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Share</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px</span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Delete</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px</span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Search</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px</span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,2),w={style:{"font-size":"20px"}},I=a("h2",{id:"\u56FE\u6807\u96C6\u5408",tabindex:"-1"},[u("\u56FE\u6807\u96C6\u5408 "),a("a",{class:"header-anchor",href:"#\u56FE\u6807\u96C6\u5408","aria-hidden":"true"},"#")],-1),E=a("div",{class:"tip custom-block"},[a("p",{class:"custom-block-title"},"TIP"),a("p",null,"\u53EA\u8981\u4F60\u5B89\u88C5\u4E86 @element-plus/icons\uFF0C**\u5C31\u53EF\u4EE5\u5728\u4EFB\u610F\u7248\u672C\u91CC\u4F7F\u7528 SVG \u56FE\u6807 **\u3002"),a("p",null,[a("strong",null,"\u60A8\u53EF\u4EE5\u70B9\u51FB\u56FE\u6807\u590D\u5236\u4EE3\u7801\u3002")])],-1),V=c('<h2 id="icon-\u5C5E\u6027" tabindex="-1">Icon \u5C5E\u6027 <a class="header-anchor" href="#icon-\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>color</td><td>svg \u7684 fill \u989C\u8272</td><td>Pick&lt;CSSProperties, &#39;color&#39;&gt;</td><td>-</td><td>inherit</td></tr><tr><td>size</td><td>SVG \u56FE\u6807\u7684\u5927\u5C0F\uFF0Csize x size</td><td>number/</td><td>string</td><td>-</td></tr></tbody></table><h2 id="icon-\u63D2\u69FD" tabindex="-1">Icon \u63D2\u69FD <a class="header-anchor" href="#icon-\u63D2\u69FD" aria-hidden="true">#</a></h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9</td></tr></tbody></table><h2 id="\u6E90\u4EE3\u7801" tabindex="-1">\u6E90\u4EE3\u7801 <a class="header-anchor" href="#\u6E90\u4EE3\u7801" aria-hidden="true">#</a></h2><p><a href="https://github.com/element-plus/element-plus/tree/dev/packages/components/icon" target="_blank" rel="noopener noreferrer">\u7EC4\u4EF6</a> \u2022 <a href="https://github.com/element-plus/element-plus/blob/dev/docs/en-US/component/icon.md" target="_blank" rel="noopener noreferrer">\u6587\u6863</a></p><h2 id="\u8D21\u732E\u8005" tabindex="-1">\u8D21\u732E\u8005 <a class="header-anchor" href="#\u8D21\u732E\u8005" aria-hidden="true">#</a></h2>',7),j='{"title":"Icon \u56FE\u6807","description":"","frontmatter":{"title":"Icon \u56FE\u6807","lang":"zh-CN"},"headers":[{"level":2,"title":"\u4F7F\u7528\u56FE\u6807","slug":"\u4F7F\u7528\u56FE\u6807"},{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":3,"title":"\u4F7F\u7528\u5305\u7BA1\u7406\u5668","slug":"\u4F7F\u7528\u5305\u7BA1\u7406\u5668"},{"level":3,"title":"\u6CE8\u518C\u6240\u6709\u56FE\u6807","slug":"\u6CE8\u518C\u6240\u6709\u56FE\u6807"},{"level":3,"title":"\u6D4F\u89C8\u5668\u76F4\u63A5\u5F15\u5165","slug":"\u6D4F\u89C8\u5668\u76F4\u63A5\u5F15\u5165"},{"level":3,"title":"\u81EA\u52A8\u5BFC\u5165","slug":"\u81EA\u52A8\u5BFC\u5165"},{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u7ED3\u5408 el-icon \u4F7F\u7528","slug":"\u7ED3\u5408-el-icon-\u4F7F\u7528"},{"level":2,"title":"\u76F4\u63A5\u4F7F\u7528 SVG \u56FE\u6807","slug":"\u76F4\u63A5\u4F7F\u7528-svg-\u56FE\u6807"},{"level":2,"title":"\u56FE\u6807\u96C6\u5408","slug":"\u56FE\u6807\u96C6\u5408"},{"level":2,"title":"Icon \u5C5E\u6027","slug":"icon-\u5C5E\u6027"},{"level":2,"title":"Icon \u63D2\u69FD","slug":"icon-\u63D2\u69FD"},{"level":2,"title":"\u6E90\u4EE3\u7801","slug":"\u6E90\u4EE3\u7801"},{"level":2,"title":"\u8D21\u732E\u8005","slug":"\u8D21\u732E\u8005"}],"relativePath":"zh-CN/component/icon.md","lastUpdated":null}',C={},G=Object.assign(C,{__name:"icon",setup(P){return(N,z)=>{const p=e("ElIcon"),l=e("ElRow"),g=e("ElButton"),d=e("IconList"),h=m;return _(),v("div",null,[b,n(l,null,{default:t(()=>[a("div",null,[n(p,{size:30},{default:t(()=>[n(s(o))]),_:1}),n(s(o))])]),_:1}),y,n(l,null,{default:t(()=>[q,a("div",x,[n(p,{size:20},{default:t(()=>[n(s(o))]),_:1}),n(p,{color:"#409EFC",class:"no-inherit"},{default:t(()=>[n(s(i))]),_:1}),n(p,null,{default:t(()=>[n(s(r))]),_:1}),n(p,{class:"is-loading"},{default:t(()=>[n(s(f))]),_:1}),n(g,{type:"primary"},{default:t(()=>[n(p,{style:{"vertical-align":"middle",color:"#fff"}},{default:t(()=>[n(s(k))]),_:1}),S]),_:1})])]),_:1}),T,n(l,null,{default:t(()=>[a("div",w,[n(s(o),{style:{width:"1em",height:"1em","margin-right":"8px"}}),n(s(i),{style:{width:"1em",height:"1em","margin-right":"8px"}}),n(s(r),{style:{width:"1em",height:"1em","margin-right":"8px"}}),n(s(k),{style:{width:"1em",height:"1em","margin-right":"8px"}})])]),_:1}),I,E,n(d),V,n(h,{id:"icon"})])}}});export{j as __pageData,G as default};
