ajax学习笔记

初学ajax --- 有些得不好的地方还望多多包涵

---

### Ajax

<p>ajax可以做到什么，使用ajax可以实现更新页面中的一小部分。其他内容————标志，导航，头部，脚部，都不用重新加载 。用户任然像往常一样点击链接，但这一次，已经加载到页面中的只有一小部分页面区域会更新，而不必在次加载整个页面了。</p>

<p>和任何新技术一样，Ajax有他自己的适用范围。他依赖于JavaScript,所以可能会有浏览器不支持它,而搜索引擎的蜘蛛程序也不会抓取到有关内容。</p>


#### XMLHttpRequest
<p>Ajax 的核心是XMLHttpRequest对象。这个对象充当着浏览器中脚本（客户端）与服务器之间的中间人的角色。以往的请求都由浏览器发出，而javascript通过这个对象可以自己发送请求，同时也自己处理响应。</p>