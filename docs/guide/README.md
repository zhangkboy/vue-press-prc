<!--
 * @Author: zhangkaichao zhangkc@kcwl.com
 * @Date: 2024-03-25 13:38:02
 * @LastEditors: zhangkaichao zhangkc@kcwl.com
 * @LastEditTime: 2024-03-26 15:37:40
 * @FilePath: /vuepress-starter/docs/.vuepress/zh/guide/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

# 新手指引

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::
::: danger STOP
危险区域，禁止通行
:::
::: details
这是一个详情块，在 IE / Edge 中不生效
:::

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
</ul>
```

```js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VuePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```
