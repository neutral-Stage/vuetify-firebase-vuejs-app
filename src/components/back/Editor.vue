<template>
  <div>
    <tiptap-vuetify
      v-model="content"
      :extensions="extensions"
    />

    <h3 class="mt-4 primary--text">Preview</h3>
    <v-divider />

    <div
      class="tiptap-vuetify-editor__content"
      v-html="content"
    />

    <h3 class="mt-2 primary--text">HTML</h3>
    <v-divider />

    <div class="mt-3">{{ content }}</div>
  </div>
</template>

<script>
import {
  // component
  TiptapVuetify,
  // extensions
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  CodeBlock,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History
} from "tiptap-vuetify";

export default {
  components: { TiptapVuetify },
  data: () => ({
    extensions: [
      new Heading({
        levels: [1, 2, 3]
      }),
      new Bold(),
      new Italic(),
      new Strike(),
      new Underline(),
      new Code(),
      new CodeBlock(),
      new Paragraph(),
      new BulletList(),
      new OrderedList(),
      new ListItem(),
      new Link(),
      new Blockquote(),
      new HardBreak(), // Shift + Enter
      new HorizontalRule(),
      new History()
    ],
    content: `
<h1>Most basic use</h1>
<p>
  You can use the necessary extensions. 
  The corresponding buttons are 
  <strong>
    added automatically.
  </strong>
</p>
<pre><code>&lt;tiptap-vuetify v-model="content" :extensions="extensions"/&gt;</code></pre>
<p></p>
<h2>Icons</h2>
<p>Avaliable icons groups:</p>
<ol>
  <li>
    <p>Material Design <em>Official</em></p>
  </li>
  <li>
    <p>Font Awesome (FA)</p>
  </li>
  <li>
    <p>Material Design Icons (MDI)</p>
  </li>
</ol>
<p></p>
<blockquote>
  <p>This package is awesome!</p>
</blockquote>
<p></p>
    `
  })
};
</script>
