/**
 * Created by WebStorm.
 * User: athukorala
 * Date: 5/13/20
 * Time: 9:20 AM
 */
import React, {useState} from 'react'
import Files from "react-files"
import * as commonFunc from "../../utility/commonFunc"
import './ReactFiles.scss'
import {Plus} from "react-feather"

// const onFilesChange_ = props => files => {
//   if (files.length !== 0) {
//     props.sendImageData(files[0])
//   }
// }
const onFilesChange = (props,setFileName) => async files => {

  if (files.length !== 0) {
    // let file = await commonFunc.compressImage(files)
    // let base64 = await commonFunc.readFile(file)
    props.sendImageData(files[0].name,files[0])
  }
}
const App = (props) =>{
  const [filename,setFileName] =useState('')
  return(
    <div className={"cover-photo-wrapper file-picker-mini print-none-dp"}>
      <Files
        className='files-dropzone-file'
        onChange={onFilesChange(props,setFileName)}
        accepts={props.accepts ? props.accepts : ["image/png", "image/jpg", "image/jpeg", "application/pdf", "application/msword", "application/xls", "application/xlsx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]}
        multiple={false}
        maxFileSize={100050000}
        minFileSize={0}
        onError={commonFunc.onFileError}
        clickable
      >
        <div className={'file-picker-mini-sub'}>
          <div>
            {/*<p className={`${props.imageFile && !props.imageFile.startsWith("http") ? 'active-lbl':''} ${(props.imageFile === "" && props.placeholder) ? `placeholder-lbl`:``}`}>*/}
            {/*  {props.imageFile === "" && props.placeholder ? props.placeholder : props.imageFile ? !props.imageFile.startsWith("http") ? props.imageFile : props.imageFile.startsWith("http") ? "Choose File (Update)": "Choose File": filename}*/}
            {/*</p>*/}
          </div>
          <button> <Plus size={12} /> Browse</button>
        </div>
      </Files>
    </div>
  )
}
export default App
