import React, { useRef } from 'react';
import jsPDF from 'jspdf';

import Toolbar from './toolbar';
import Page from './page';
import './style.css'


const RichTextEditor = () => {
    const editorRef = useRef(null);
    const printToPDF = () => {
        const doc = new jsPDF();

        // Assuming your contentEditable element has an ID of 'editable'
        const content = editorRef.current.innerText;

        // Add text to PDF; you can format it as needed
        doc.text(content, 10, 10);

        // Save the PDF with a filename
        doc.save('document.pdf');
    };



    return (
        <div className=''>
            <Toolbar editorRef={editorRef} />
            <Page editorRef={editorRef}/>
        </div>
    );
};

export default RichTextEditor;
