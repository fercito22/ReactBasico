import React from "react"

function withFileUpload(WrappedComponent) {
    return class WithFileComponent extends React.Component {
        constructor(props) {
            super(props)

            this.state = { files: [] }
            this.fileReader = new FileReader()

            this.addFile = this.addFile.bind(this)
            this.appendFile = this.appendFile.bind(this)

        }

        addFile(e) {
            const files = e.target.files
            //Convercion a Base 64
            this.fileReader.readAsDataURL(files[0])
        }

        appendFile() {
            this.setState({
                files: [...this.state.files, this.fileReader.result]
            })
        }

        componentDidMount() {
            this.fileReader.addEventListener('load', this.appendFile)
        }

        componentWillMount() {
            this.fileReader.removeEventListener('load',
                this.appendFile)
        }

        render() {
            return (
                <WrappedComponent {...this.props}
                    addFile={this.addFile}
                    files={this.state.files} />
            )
        }


    }
}

export default withFileUpload;