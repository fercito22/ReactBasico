import React from 'react'
import withFileUpload from '../HOC/withFileUpload'

const CircleFiles = (props) => (
    <div>
        <form>
            <input type="file" onChange={props.addFile}/>
        </form>
        {props.files.map((file, index) =>(
            <div className='image image--circle' key={index}>
                <img src={file} alt=""/>
            </div>
        ))}
    </div>
)

export default withFileUpload( CircleFiles);