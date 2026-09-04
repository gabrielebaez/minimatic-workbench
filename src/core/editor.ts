import { EditorView, basicSetup } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { markdown } from '@codemirror/lang-markdown';

export interface EditorOptions {
  container: HTMLElement;
  initialValue: string;
  onChange?: (value: string) => void;
  onCursorMove?: (line: number, col: number) => void;
}

export interface EditorInstance {
  getValue(): string;
  setValue(text: string): void;
  destroy(): void;
}

export function createEditor(options: EditorOptions): EditorInstance {
  let editorView: EditorView | null = null;

  const customTheme = EditorView.theme({
    "&": { height: "100%", fontSize: "13px" },
    ".cm-scroller": { overflow: "auto", fontFamily: "'Roboto Mono', 'Fira Code', monospace" },
    ".cm-content": { padding: "16px 20px" },
    ".cm-gutters": { backgroundColor: "#f7f9ff", borderRight: "1px solid #bdc1c6", color: "#5f6368" },
    ".cm-activeLine": { backgroundColor: "rgba(27, 110, 243, 0.05)" },
    ".cm-activeLineGutter": { backgroundColor: "#e8f0fe", color: "#1b6ef3" }
  });

  const extensions = [
    basicSetup,
    markdown(),
    customTheme,
    EditorView.lineWrapping
  ];

  if (options.onChange || options.onCursorMove) {
    const listener = EditorView.updateListener.of((update) => {
      if (update.docChanged && options.onChange) {
        options.onChange(update.state.doc.toString());
      }
      if ((update.selectionSet || update.docChanged) && options.onCursorMove) {
        const pos = update.state.selection.main.head;
        const line = update.state.doc.lineAt(pos);
        options.onCursorMove(line.number, pos - line.from + 1);
      }
    });
    extensions.push(listener);
  }

  const state = EditorState.create({
    doc: options.initialValue,
    extensions
  });

  editorView = new EditorView({
    state,
    parent: options.container
  });

  return {
    getValue() {
      return editorView ? editorView.state.doc.toString() : '';
    },
    setValue(text: string) {
      if (!editorView) return;
      editorView.dispatch({
        changes: { from: 0, to: editorView.state.doc.length, insert: text }
      });
    },
    destroy() {
      if (editorView) {
        editorView.destroy();
        editorView = null;
      }
    }
  };
}
