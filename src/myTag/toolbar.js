import React from 'react';

const Toolbar = (props) => {
    const { editorRef } = props
    const executeCommand = (command) => {
        document.execCommand(command, false, null);
        editorRef.current.focus();
    };

    const applyTag = (tag) => {
        const selection = window.getSelection();
        if (!selection.rangeCount) return;
      
        let range = selection.getRangeAt(0);
        let selectedText = range.extractContents();
        let newElement = document.createElement(tag);
        
        newElement.appendChild(selectedText);
        range.insertNode(newElement);
      
        // Remove any empty tags that might have been left behind
        document.querySelectorAll(tag).forEach(el => {
          if (el.innerHTML === '') {
            el.remove();
          }
        });
      };

      const spliter = ( )=>{
        const text = editorRef.current.innerHTML
        for(let i = 0; i< 200; i++) {
          const char = text[i];
          const charPos = char.offsetTop;
          console.log(charPos);

        }
      }

    return (
        <div className='no-print' style={{ marginBottom: '10px' }}>
            <button onClick={() => executeCommand('bold')}>Bold</button>
            <button onClick={() => executeCommand('italic')}>Italic</button>
            <button onClick={() => executeCommand('underline')}>Underline</button>
            <button onClick={() => executeCommand('strikeThrough')}>strikeThrough</button>
            <button onClick={() => applyTag('H1')}>H1</button>
            <button onClick={() => applyTag('H2')}>H2</button>
            <button onClick={() => applyTag('P')}>Paragraph</button>
            <button onClick={() => window.print()}>Print to PDF</button>
            <button onClick={() => spliter()}>Split</button>
        </div>
    );
}

export default Toolbar;
