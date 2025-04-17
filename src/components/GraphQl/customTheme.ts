import { Extension } from '@codemirror/state';
import { tags as t } from '@lezer/highlight';
import { createTheme } from '@uiw/codemirror-themes';

export const editorTheme = (): Extension => {
  return createTheme({
    theme: 'dark',
    settings: {
      background: 'transparent',
      caret: '#759cff',
      foreground: '#d3a6ff',
      gutterBackground: 'transparent',
      selection: 'rgba(178,117,255,0.4)',
      selectionMatch: 'rgba(81,69,117,0.58)',
      lineHighlight: 'transparent',
      gutterForeground: '#9293a0',
    },
    styles: [
      { tag: t.keyword, color: '#f79a9a' },
      { tag: [t.name, t.deleted, t.character, t.macroName], color: '#f5d4c0' },
      { tag: [t.propertyName], color: '#53a3ff' },
      {
        tag: [
          t.processingInstruction,
          t.string,
          t.inserted,
          t.special(t.string),
        ],
        color: '#6ace81',
      },
      { tag: [t.function(t.variableName), t.labelName], color: '#6bc2fc' },
      {
        tag: [t.color, t.constant(t.name), t.standard(t.name)],
        color: '#bb9af7',
      },
      { tag: [t.definition(t.name), t.separator], color: '#c0caf5' },
      { tag: [t.className], color: '#c0caf5' },
      {
        tag: [
          t.number,
          t.changed,
          t.annotation,
          t.modifier,
          t.self,
          t.namespace,
        ],
        color: '#ff9e64',
      },
      { tag: [t.typeName], color: '#2ac3de', fontStyle: '#2ac3de' },
      { tag: [t.operator, t.operatorKeyword], color: '#bb9af7' },
      { tag: [t.url, t.escape, t.regexp, t.link], color: '#b4f9f8' },
      { tag: [t.meta, t.comment], color: '#9293a0' },
      { tag: t.strong, fontWeight: 'bold' },
      { tag: t.emphasis, fontStyle: 'italic' },
      { tag: t.link, textDecoration: 'underline' },
      { tag: t.heading, fontWeight: 'bold', color: '#89ddff' },
      { tag: [t.atom, t.bool, t.special(t.variableName)], color: '#c0caf5' },
      { tag: t.invalid, color: '#ff537b' },
      { tag: t.strikethrough, textDecoration: 'line-through' },
    ],
  });
};
