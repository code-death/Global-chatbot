import {useCallback, useContext} from 'react'
import { Box } from '@mui/material'
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { xml } from '@codemirror/lang-xml'
import { css } from '@codemirror/lang-css'
import { DataContext} from '../context/DataProvider'

export default function Editor({language}) {
    const {htmlData, cssData, jsData, setHtmlData, setCssData, setJsData} = useContext(DataContext)


    const javascriptCode = <CodeMirror
                                height="400px"
                                minWidth='33vw'
                                maxWidth='33vw'
                                extensions={[javascript()]}
                                value={jsData}
                                theme='dark'
                                onChange={(value) => setJsData(value)}
                            />
    const xmlCode = <CodeMirror
                                height="400px"
                                minWidth='33vw'
                                maxWidth='33vw'
                                extensions={[xml()]}
                                value={htmlData}
                                theme='dark'
                                onChange={(e) => setHtmlData(e)}
                            />
    const cssCode = <CodeMirror
                                height="400px"
                                minWidth='33vw'
                                maxWidth='33vw'
                                extensions={[css()]}
                                value={cssData}
                                theme='dark'
                                onChange={(e) => setCssData(e)}
                            />
  return (
    <Box className='editorBox'>
        <Box className='editorBar'>
            <span className='htmlIcon'>
            {(language == 'javascript') ? <JavascriptIcon fontSize='large' />: ((language == 'xml') ? <HtmlIcon fontSize='large'/> : <CssIcon fontSize='large'/>)}
                </span>
            <Box component='span' className='utilityIcons' >
                <span className='settingsIcon rightIcon'><SettingsIcon fontSize='smaller'/></span>
                <span className='arrowIcon rightIcon'><KeyboardArrowDownIcon fontSize='medium' /></span>
            </Box>
        </Box>
        <Box className='editor'>
        {(language == 'javascript') ? javascriptCode: ((language == 'xml') ? xmlCode : cssCode)}
        </Box>
    </Box>
  )
}
