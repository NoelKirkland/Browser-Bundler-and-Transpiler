import MonacoEditor, { EditorDidMount } from '@monaco-editor/react';

interface CodeEditorProps {
  initialValue: string;
  onChange(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {
  const onEditorDidMount: EditorDidMount = (getEditorValue, editor) => {
    editor.onDidChangeModelContent(() => {
      onChange(getEditorValue());
    });
    editor.getModel()?.updateOptions({ tabSize: 2 });
  };

  return (
    <MonacoEditor
      value={initialValue}
      editorDidMount={onEditorDidMount}
      language="javascript"
      theme="dark"
      height="500px"
      options={{
        wordWrap: 'on',
        minimap: { enabled: false },
        showUnused: false,
        folding: false,
        lineNumbersMinChars: 3,
        fontSize: 16,
        scrollBeyondLastLine: false,
        automaticLayout: true,
      }}
    />
  );
};

export default CodeEditor;
