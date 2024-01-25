import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const paper = (props) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                '& > :not(style)': {
                    m: 1,
                    width: 1280,
                    height: 128,
                },
            }}
        >
            <Paper elevation={3}>
                <div
                    ref={props.editorRef}
                    contentEditable
                    class='editor-content'
                    style={{ minHeight: '100px', padding: '5px' }}
                    dir='rtl'
                >
                    l
                    Just type lorem in html to generate a paragraph of dummy text. Control how much text is generated with a number suffix, such as lorem10 to generate 10 words of dummy text. You can also combine lorem with other Emmet abbreviations.
                    Just type lorem in html to generate a paragraph of dummy text. Control how much text is generated with a number suffix, such as lorem10 to generate 10 words of dummy text. You can also combine lorem with other Emmet abbreviations.
                    Just type lorem in html to generate a paragraph of dummy text. Control how much text is generated with a number suffix, such as lorem10 to generate 10 words of dummy text. You can also combine lorem with other Emmet abbreviations.
                    Just type lorem in html to generate a paragraph of dummy text. Control how much text is generated with a number suffix, such as lorem10 to generate 10 words of dummy text. You can also combine lorem with other Emmet abbreviations.

                    Just type lorem in html to generate a paragraph of dummy text. Control how much text is generated with a number suffix, such as lorem10 to generate 10 words of dummy text. You can also combine lorem with other Emmet abbreviations.
                    Just type lorem in html to generate a paragraph of dummy text. Control how much text is generated with a number suffix, such as lorem10 to generate 10 words of dummy text. You can also combine lorem with other Emmet abbreviations.
                    Just type lorem in html to generate a paragraph of dummy text. Control how much text is generated with a number suffix, such as lorem10 to generate 10 words of dummy text. You can also combine lorem with other Emmet abbreviations.
                    Just type lorem in html to generate a paragraph of dummy text. Control how much text is generated with a number suffix, such as lorem10 to generate 10 words of dummy text. You can also combine lorem with other Emmet abbreviations.
                </div>
            </Paper>
        </Box>
    )
}

export default paper
